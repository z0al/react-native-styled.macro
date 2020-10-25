// Ours
import createStyles from './style';
import theme from './theme';
import { VariantStyle } from './types';
import { StyleUtils } from './utils';

const styles = createStyles(theme);

const resolveToken = (token: string): VariantStyle => {
	const { styleId, variant } = StyleUtils.extractTokenInfo(token);

	const style = styles[styleId];

	if (!style) {
		throw new Error(`Unknown style: '${styleId}'`);
	}

	return { variant, style };
};

export const resolveTokens = (tokens: string[]) =>
	StyleUtils.reduce(
		StyleUtils.getOrderedTokens(tokens).map(resolveToken)
	);
