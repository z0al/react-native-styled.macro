// Packages
import * as t from '@babel/types';

// Ours
import { TokenInfo } from '../lib/types';
import { isDefaultVariant } from '../lib/utils/defaultVariant';

export function transformTokens(
	tokens: TokenInfo[],
	stylesheetId: t.Identifier,
	addStylesheet: (token: TokenInfo) => t.Identifier
) {
	const isDefaultOnly = tokens.every((token) =>
		isDefaultVariant(token.variant)
	);

	if (tokens.length === 0) {
		return {
			isDefaultOnly,
			ast: t.objectExpression([]),
		};
	}

	if (isDefaultOnly) {
		// We know for sure it's a single element
		const { variant, style, ...props } = tokens[0];

		const id = addStylesheet({ variant, style });

		const outStyle = t.valueToNode(props);

		outStyle.properties.push(
			t.objectProperty(
				t.identifier('style'),
				t.arrayExpression([t.memberExpression(stylesheetId, id)])
			)
		);

		return {
			isDefaultOnly,
			ast: outStyle,
		};
	}

	const ast = t.arrayExpression(
		tokens.map(({ variant, style, ...props }) => {
			const id = addStylesheet({ variant, style });

			const outStyle = t.valueToNode({
				variant,
				...props,
			});

			outStyle.properties.push(
				t.objectProperty(
					t.identifier('style'),
					t.memberExpression(stylesheetId, id)
				)
			);

			return outStyle;
		})
	);

	return {
		isDefaultOnly,
		ast,
	};
}
