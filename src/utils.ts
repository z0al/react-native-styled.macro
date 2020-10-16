const DEFAULT_VARIANT = 'default';

/**
 * Check whether a given variant name equals to the default variant.
 */
export function isDefaultVariant(variant: string) {
	return variant === DEFAULT_VARIANT;
}

export function extractTokenInfo(token: string, separator: string) {
	const sepIndex = token.lastIndexOf(separator);

	const styleName = token.slice(sepIndex + 1);
	const variant =
		sepIndex > 0 ? token.slice(0, sepIndex) : DEFAULT_VARIANT;

	return { styleName, variant };
}

/**
 * Transform given `tokens` string to a list of tokens. The list of
 * tokens is ordered such that default variant styles always applied
 * first.
 */
export function getOrderedTokens(tokens: string, separator: string) {
	const getTokens = (tokens: string) => {
		return tokens.trim().replace(/\s+/g, ' ').split(' ');
	};

	const compareByVariant = (a: string, b: string) => {
		const isDefaultA = isDefaultVariant(
			extractTokenInfo(a, separator).variant
		);
		const isDefaultB = isDefaultVariant(
			extractTokenInfo(b, separator).variant
		);

		return isDefaultA && !isDefaultB
			? -1 // A comes first
			: !isDefaultA && isDefaultB
			? 1 // B comes first
			: 0; // Keep the same order
	};

	return getTokens(tokens).sort(compareByVariant);
}
