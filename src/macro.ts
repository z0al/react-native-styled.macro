// Packages
import * as importHelper from '@babel/helper-module-imports';
import * as t from '@babel/types';
import toAST from 'babel-object-to-ast';
import * as macro from 'babel-plugin-macros';

// Ours
import { resolveTokens } from './tokens';

const pkg = 'react-native-restyled';

const importUtil = (path: string) => {
	return `${pkg}/lib/utils/${path}`;
};

const createStyleSheet = (
	importName: string,
	variable: t.Identifier,
	styles: Map<t.Identifier, t.ObjectExpression>
) => {
	// Convert styles to Object Expression
	// => { styleId1: {...}, styleId2: {...}, ...}
	const stylesObj = t.objectExpression(
		Array.from(styles).map(([styleId, style]) =>
			t.objectProperty(styleId, style)
		)
	);

	// Use StyleSheet.create
	// => const styles = StyleSheet.create({...})
	const stylesheet = t.variableDeclaration('const', [
		t.variableDeclarator(
			variable,
			t.callExpression(
				t.memberExpression(
					t.identifier(importName),
					t.identifier('create')
				),
				[stylesObj]
			)
		),
	]);

	return stylesheet;
};

const styledMacro: macro.MacroHandler = ({ references, state }) => {
	const modulePath = state.file.path;

	// A map that holds the key/value pairs of the generated styles.
	const styles = new Map<t.Identifier, t.ObjectExpression>();

	// Variable name to be used later with StyleSheet.create
	const stylesheetId = modulePath.scope.generateUidIdentifier('styles');

	references.default?.forEach((refPath) => {
		if (!t.isCallExpression(refPath.parent)) {
			return;
		}

		// Get the call expression
		const callExpr = refPath.parent;

		// Parse token argument
		const tokensArg = callExpr.arguments[0];

		// tokens must be an array of strings
		if (!t.isArrayExpression(tokensArg)) {
			return;
		}

		const tokens = tokensArg.elements.map((el) => {
			if (!t.isStringLiteral(el)) {
				throw new macro.MacroError(
					`expected styled to be called with a list of strings. Found:
					${el?.type}
					`
				);
			}

			return el.value;
		});

		// Resolve styles
		callExpr.arguments[0] = t.arrayExpression(
			resolveTokens(tokens).map((style) => {
				// Generate an Id to be used as a key in the StyleSheet later
				const styleId = modulePath.scope.generateUidIdentifier(
					style.variant
				);

				styles.set(styleId, toAST(style.style));

				return t.objectExpression([
					// => { vairant: style.variant }
					t.objectProperty(
						t.identifier('variant'),
						t.stringLiteral(style.variant)
					),
					// => { style: styles.styleId }
					t.objectProperty(
						t.identifier('style'),
						t.memberExpression(stylesheetId, styleId)
					),
				]);
			})
		);

		// Import StyleUtils.select
		// => import { select } from 'path/to/util';
		const importRef: t.Identifier = importHelper.addNamed(
			modulePath,
			'select',
			importUtil('select')
		);

		// Replace the call to the macro with StyleUtils.select
		callExpr.callee = t.identifier(importRef.name);
	});

	// Inject generated styles to the module
	if (styles.size > 0) {
		// Import StyleSheet API
		// => import { StyleSheet } from 'react-native';
		const importRef: t.Identifier = importHelper.addNamed(
			modulePath,
			'StyleSheet',
			'react-native'
		);

		// Create stylesheet
		// => const styles = StyleSheet.create({...})
		modulePath.pushContainer(
			'body' as any,
			createStyleSheet(importRef.name, stylesheetId, styles)
		);
	}
};

export default macro.createMacro(styledMacro);
