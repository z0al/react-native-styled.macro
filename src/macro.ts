// Packages
import { NodePath } from '@babel/core';
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
	module: NodePath<t.Node>,
	stylesId: t.Identifier,
	styles: Map<t.Identifier, t.ObjectExpression>
) => {
	// Import StyleSheet API
	// => import { StyleSheet } from 'react-native';
	const api: t.Identifier = importHelper.addNamed(
		module,
		'StyleSheet',
		'react-native'
	);

	// Reference StyleUtils.rem() import name
	let remUtil: t.Identifier;

	// Convert styles to Object Expression
	// => { styleId1: {...}, styleId2: {...}, ...}
	const stylesObj = t.objectExpression(
		Array.from(styles).map(([styleId, style]) =>
			t.objectProperty(styleId, {
				...style,
				properties: style.properties.map((prop) => {
					if (!t.isObjectProperty(prop)) {
						return prop;
					}

					if (!t.isStringLiteral(prop.value)) {
						return prop;
					}

					const { value } = prop.value;

					// Replace Rem values with function calls
					if (value.match(/rem/)) {
						// => import { rem } from 'path/to/style/utils'
						if (!remUtil) {
							remUtil = importHelper.addNamed(
								module,
								'rem',
								importUtil('rem')
							);
						}

						const remValue = parseFloat(
							value.replace(/rem|\(|\)/g, '')
						);

						// => { style: rem(number) }
						prop.value = t.callExpression(remUtil, [
							t.numericLiteral(remValue),
						]);
					}

					return prop;
				}),
			})
		)
	);

	// Use StyleSheet.create
	// => const styles = StyleSheet.create({...})
	const stylesheet = t.variableDeclaration('const', [
		t.variableDeclarator(
			stylesId,
			t.callExpression(
				t.memberExpression(api, t.identifier('create')),
				[stylesObj]
			)
		),
	]);

	// Create stylesheet
	// => const styles = StyleSheet.create({...})
	module.pushContainer('body' as any, stylesheet);
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
		callExpr.callee = importHelper.addNamed(
			modulePath,
			'select',
			importUtil('select')
		);
	});

	// Inject generated styles to the module
	if (styles.size > 0) {
		createStyleSheet(modulePath, stylesheetId, styles);
	}
};

export default macro.createMacro(styledMacro);
