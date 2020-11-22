import { dequal } from 'dequal';
import * as t from '@babel/types';
import { NodePath } from '@babel/core';
// @ts-expect-error
import evaluatePath from 'babel-helper-evaluate-path';

type EvaluationResult = {
	confident: boolean;
	deopt: NodePath | null;
	value: any;
};

export function evalNode(
	parentPath: NodePath,
	node: t.Node
): EvaluationResult {
	let nodePath: NodePath<t.Node>;

	// A hack to get the Node path
	parentPath.traverse({
		enter(path) {
			if (dequal(path.node, node)) {
				nodePath = path;
			}
		},
	});

	// @ts-expect-error
	return evaluatePath(nodePath);
}
