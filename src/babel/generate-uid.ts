import * as t from '@babel/types';
import { NodePath } from '@babel/core';

export function generateUid(
	program: NodePath<t.Program>,
	name: string
) {
	return program.scope.generateUidIdentifier(name);
}
