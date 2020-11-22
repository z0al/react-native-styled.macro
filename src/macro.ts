// Packages
import * as t from '@babel/types';
import traverse from '@babel/traverse';
import { NodePath } from '@babel/core';
import { createMacro, MacroHandler } from 'babel-plugin-macros';

// Ours
import { evalNode } from './babel/eval-node';
import { StyledMacro } from './styling/types';
import { resolveTokens } from './styling/tokens';
import { DEFAULT_VARIANT } from './styling/utils/defaultVariant';
import { importStyleSheet, importUtil } from './babel/add-import';

const transformRem = (program: NodePath<t.Program>) => {
	traverse(program.parent, {
		StringLiteral: (path) => {
			if (!t.isObjectProperty(path.parent)) {
				return;
			}

			// Transform values only
			if (!t.isNodesEquivalent(path.parent.value, path.node)) {
				return;
			}

			const { value } = path.node;

			// Replace Rem values with function calls
			if (value.match(/rem/)) {
				const remValue = parseFloat(value.replace(/rem|\(|\)/g, ''));

				// => { style: rem(number) }
				path.replaceWith(
					t.callExpression(importUtil(program, 'rem'), [
						t.numericLiteral(remValue),
					])
				);
			}
		},
	});
};

const createStyleSheet = (
	program: NodePath<t.Program>,
	stylesId: t.Identifier,
	styles: Record<string, Record<string, any>>
) => {
	// Use StyleSheet.create
	// => const styles = StyleSheet.create({...})
	const stylesheet = t.variableDeclaration('const', [
		t.variableDeclarator(
			stylesId,
			t.callExpression(
				t.memberExpression(
					importStyleSheet(program),
					t.identifier('create')
				),
				[t.valueToNode(styles)]
			)
		),
	]);

	// Create stylesheet
	// => const styles = StyleSheet.create({...})
	program.unshiftContainer('body' as any, stylesheet);
};

const styledMacro: MacroHandler = ({ references, state }) => {
	const program = state.file.path;

	// A map that holds the key/value pairs of the generated styles.
	const styles: Record<string, Record<string, any>> = {};

	// Variable name to be used later with StyleSheet.create
	const stylesId = program.scope.generateUidIdentifier('styles');

	references.default?.forEach((refPath) => {
		if (!t.isCallExpression(refPath.parent)) {
			return;
		}

		// Get the call expression
		const callExpr = refPath.parent;

		// Parse token argument
		const { confident, value: tokens, deopt } = evalNode(
			refPath.parentPath,
			callExpr.arguments[0]
		);

		if (!confident) {
			throw deopt?.buildCodeFrameError(
				'could not evaluate style names at compile time'
			);
		}

		if (!Array.isArray(tokens)) {
			throw deopt?.buildCodeFrameError(
				'style names must be an array of strings'
			);
		}

		// Avoid wrapping styles around select(..) call if we only have
		// defautl variant styles.
		let shouldUseSelect = false;

		try {
			// Resolve styles
			callExpr.arguments[0] = t.arrayExpression(
				resolveTokens(tokens).map((style) => {
					if (style.variant !== DEFAULT_VARIANT) {
						shouldUseSelect = true;
					}

					// Generate an Id to be used as a key in the StyleSheet
					// later.
					const styleId = program.scope.generateUidIdentifier(
						style.variant
					);

					styles[styleId.name] = style.style;

					return t.objectExpression([
						// => { vairant: style.variant }
						t.objectProperty(
							t.identifier('variant'),
							t.stringLiteral(style.variant)
						),
						// => { style: styles.styleId }
						t.objectProperty(
							t.identifier('style'),
							t.memberExpression(stylesId, styleId)
						),
					]);
				})
			);
		} catch (error) {
			throw refPath.buildCodeFrameError(error.message);
		}

		if (!shouldUseSelect) {
			// We know for sure there is exactly one element (if any)
			const defaultStyle = callExpr.arguments[0]
				.elements[0] as t.ObjectExpression;

			// => { style: defaultStyle , ... }
			refPath.parentPath.replaceWith(
				t.objectExpression(
					defaultStyle ? [defaultStyle.properties[1]] : []
				)
			);

			return;
		}

		// Import StyleUtils.select
		// => import { select } from 'path/to/util';
		//    select([...], ...)
		callExpr.callee = importUtil(program, 'select');
	});

	// Inject generated styles to the module
	if (Object.keys(styles).length > 0) {
		createStyleSheet(program, stylesId, styles);

		// Convert Rem string literals to function calls
		transformRem(program);
	}
};

export default createMacro(styledMacro) as StyledMacro;
