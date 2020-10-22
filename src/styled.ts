// Ours
import createStyles from './style';
import { StyleUtils } from './style/utils';
import theme from './theme';
import { VariantStyle } from './types';

const styles = createStyles(theme);

const resolveToken = (token: string): VariantStyle => {
	const { styleId, variant } = StyleUtils.extractTokenInfo(token);
	return { variant, style: styles[styleId] };
};

export const styled = (tokens: string[]) =>
	StyleUtils.reduce(
		StyleUtils.getOrderedTokens(tokens).map(resolveToken)
	);
