// Packages
import * as t from '@babel/types';
import { NodePath } from '@babel/core';
import * as importHelpers from '@babel/helper-module-imports';

function importModule(
	program: NodePath<t.Program>,
	exportName: string,
	moduleName: string
): t.Identifier {
	return importHelpers.addNamed(
		program,
		exportName,
		moduleName
	) as t.Identifier;
}

export function importStyleSheet(program: NodePath<t.Program>) {
	return importModule(program, 'StyleSheet', 'react-native');
}

export function importUtil(
	program: NodePath<t.Program>,
	utilName: string
) {
	return importModule(
		program,
		utilName,
		`react-native-styled.macro/build/module/lib/utils/${utilName}`
	);
}
