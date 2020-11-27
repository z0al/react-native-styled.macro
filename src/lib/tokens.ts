// Packages
import { dequal } from 'dequal';

// Ours
import theme from './theme';
import createStyles from './style';
import { VariantStyle } from './types';
import { reduce } from './utils/reduce';
import createProps from './style/props';
import { extractTokenInfo } from './utils/extractTokenInfo';
import { getOrderedTokens } from './utils/getOrderedTokens';

const themeStyles = createStyles(theme);
const themeProps = createProps(theme);

const resolveToken = (token: string): VariantStyle => {
	const { styleId, variant } = extractTokenInfo(token);

	const style = themeStyles[styleId];
	const props = themeProps[styleId];

	if (!style && !props) {
		throw new Error(`Unknown style: '${styleId}'`);
	}

	return { variant, style, ...props };
};

export const resolveTokens = (tokens: string[]) => {
	const ordered = getOrderedTokens(tokens);

	// Different order? warn the user
	if (!dequal(ordered, tokens)) {
		throw new Error(
			'Incorrect order. Default variant styles must always come first.'
		);
	}

	return reduce(ordered.map(resolveToken));
};
