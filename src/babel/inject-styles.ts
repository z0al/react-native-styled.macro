// Packages
import * as t from '@babel/types';
import traverse from '@babel/traverse';
import { NodePath } from '@babel/core';

// Ours
import { importStyleSheet, importUtil } from './add-import';

export function injectStyles(
	program: NodePath<t.Program>,
	stylesVariableId: t.Identifier,
	styles: Record<string, Record<string, any>>
) {
	// Use StyleSheet.create
	// => const styles = StyleSheet.create({...})
	const stylesheet = t.variableDeclaration('const', [
		t.variableDeclarator(
			stylesVariableId,
			t.callExpression(
				t.memberExpression(
					importStyleSheet(program),
					t.identifier('create')
				),
				[t.valueToNode(styles)]
			)
		),
	]);

	// Handle Rem values
	traverse(stylesheet, {
		noScope: true,
		StringLiteral: (path) => {
			// Replace Rem values with function calls
			if (path.node.value.match(/rem/)) {
				const remValue = parseFloat(
					path.node.value.replace(/rem|\(|\)/g, '')
				);

				path.replaceWith(
					t.callExpression(importUtil(program, 'rem'), [
						t.numericLiteral(remValue),
					])
				);
			}
		},
	});

	// Create stylesheet
	// => const styles = StyleSheet.create({...})
	program.unshiftContainer('body' as any, stylesheet);
}
