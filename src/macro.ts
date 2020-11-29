// Packages
import * as t from '@babel/types';
import { createMacro, MacroHandler } from 'babel-plugin-macros';

// Ours
import { Macro } from './lib/types';
import { resolveTokens } from './lib/tokens';
import { evalNode } from './babel/eval-node';
import { importUtil } from './babel/add-import';
import { injectStyles } from './babel/inject-styles';
import { transformTokens } from './babel/transform-tokens';

const styledMacro: MacroHandler = ({ references, state }) => {
	const program = state.file.path;

	// A map that holds the key/value pairs of the generated styles.
	const stylesheet: Record<string, Record<string, any>> = {};

	// Variable name to be used later with StyleSheet.create
	const stylesheetId = program.scope.generateUidIdentifier('styles');

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

		try {
			const styleAST = transformTokens(
				resolveTokens(tokens),
				stylesheetId,
				({ variant, style }) => {
					const id = program.scope.generateUidIdentifier(variant);
					stylesheet[id.name] = style;
					return id;
				}
			);

			// Avoid wrapping styles around select(..) call if we only have
			// defautl variant styles.
			if (styleAST.isDefaultOnly) {
				// => { style: [defaultStyle] , ...props }
				refPath.parentPath.replaceWith(styleAST.ast);

				return;
			}

			// { style: [...styles] , ...props }
			callExpr.arguments[0] = styleAST.ast;

			// Import StyleUtils.select
			// => import { select } from 'path/to/util';
			//    select([...], ...)
			callExpr.callee = importUtil(program, 'select');
		} catch (error) {
			throw refPath.buildCodeFrameError(error.message);
		}
	});

	// Inject generated styles to the module
	if (Object.keys(stylesheet).length > 0) {
		injectStyles(program, stylesheetId, stylesheet);
	}
};

export default createMacro(styledMacro) as Macro;
