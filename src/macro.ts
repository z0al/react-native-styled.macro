// Packages
import { addNamed } from '@babel/helper-module-imports';
import toAST from 'babel-object-to-ast';
import { createMacro, MacroError } from 'babel-plugin-macros';

// Ours
import { resolveTokens } from './tokens';

const importUtil = (path: string) =>
	`react-native-restyled/lib/style/utils/${path}`;

export default createMacro(({ babel, references, state }) => {
	const t = babel.types;
	const modulePath = state.file.path;

	const { default: imports = [] } = references;

	// A map that holds the key/value pairs of the generated styles.
	const stylesMap = new Map();

	// Variable name to be used later with StyleSheet.create
	const stylesheetId = modulePath.scope.generateUidIdentifier('styles');

	imports.forEach((refPath) => {
		if (!t.isCallExpression(refPath.parent)) {
			return;
		}

		// 1. Get the call expression
		const callExpr = refPath.parent;

		// 2. Parse token argument
		const tokensArg = callExpr.arguments[0];

		// tokens must be an array of strings
		if (!t.isArrayExpression(tokensArg)) {
			return;
		}

		const tokens = tokensArg.elements.map((el) => {
			if (!t.isStringLiteral(el)) {
				throw new MacroError(
					`expected styled to be called with a list of strings. Found:
					${el?.type}
					`
				);
			}

			return el.value;
		});

		// 3. Resolve styles
		callExpr.arguments[0] = t.arrayExpression(
			resolveTokens(tokens).map((style) => {
				// Generate an Id to be used as a key in the StyleSheet later
				const styleId = modulePath.scope.generateUidIdentifier(
					style.variant
				);

				stylesMap.set(styleId, toAST(style.style));

				return t.objectExpression([
					// vairant => style.variant
					t.objectProperty(
						t.identifier('variant'),
						t.stringLiteral(style.variant)
					),
					// style => styles.styleId
					t.objectProperty(
						t.identifier('style'),
						t.memberExpression(stylesheetId, styleId)
					),
				]);
			})
		);

		// 4. Import StyleUtils.select
		const importRef = addNamed(
			modulePath,
			'select',
			importUtil('select')
		);

		// 5. Replace the call to the macro with StyleUtils.select
		callExpr.callee = t.identifier(importRef.name);
	});

	// Push generated styles
	if (stylesMap.size > 0) {
		// 1. Import StyleSheet API
		// => import { StyleSheet } from 'react-native';
		const importRef = addNamed(
			modulePath,
			'StyleSheet',
			'react-native'
		);

		// 2. Convert StylesMap to Object Expression
		// => { styleId1: {...}, styleId2: {...}, ...}
		const stylesMapExpr = t.objectExpression(
			Array.from(stylesMap).map(([styleId, style]) =>
				t.objectProperty(styleId, style)
			)
		);

		// 3. Use StyleSheet.create
		// => const styles = StyleSheet.create({...})
		const stylesVar = t.variableDeclaration('const', [
			t.variableDeclarator(
				stylesheetId,
				t.callExpression(
					t.memberExpression(
						t.identifier(importRef.name),
						t.identifier('create')
					),
					[stylesMapExpr]
				)
			),
		]);

		// 4. Push the declaration to the end of the module
		modulePath.pushContainer('body' as any, stylesVar);
	}
});
