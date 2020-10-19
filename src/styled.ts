// Ours
import configs from './configs';
import { StyleUtils } from './styles/utils';
import { Configuration, StyledVariant, ToggleVariants } from './types';

function getStyle(styleName: string) {
	return configs.styles[styleName];
}

/**
 * Resolve styles for given token(s) e.g. "dark:bg-white".
 */
export function createStyledVariants(
	tokens: string,
	config: Configuration
): StyledVariant[] {
	return StyleUtils.getOrderedTokens(tokens).map(
		(token) => {
			// Style Key is either the DEFAULT_VARIANT or a variant
			// e.g. "sm" or "dark:focus"
			const { styleName, variant } = StyleUtils.extractTokenInfo(token);

			return { variant, style: getStyle(styleName) };
		},
		{ default: [] }
	);
}

export function styled(
	tokens: string,
	variants?: ToggleVariants
): StyledVariant['style'][] {
	const styleList = createStyledVariants(tokens, configs);

	const isVariantEnabled = ({ variant }: StyledVariant) => {
		// The default styles are always applied
		if (StyleUtils.isDefaultVariant(variant)) {
			return true;
		}

		// Variant name could possibly be nested e.g. dark:focus
		return variant
			.split(':')
			.every((key) => Boolean(variants && variants[key]));
	};

	return styleList
		.filter(isVariantEnabled)
		.map((styledVariant) => styledVariant.style);
}
