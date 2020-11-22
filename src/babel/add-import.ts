// Packages
import * as t from '@babel/types';
import { NodePath } from '@babel/core';
import { loadPackageJson } from 'json.macro';
// @ts-expect-error
import * as importHelpers from '@babel/helper-module-imports';

const pkgJson = loadPackageJson();

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
		`${pkgJson.name}/build/module/utils/${utilName}`
	);
}
