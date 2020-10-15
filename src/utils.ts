export const DEFAULT_KEY = 'default';

/**
 * Trim unnecessary whitespaces.
 */
export function formatTokens(tokens: string) {
	return tokens.trim().replace(/\s+/g, ' ');
}

/**
 * Sort variant names to group relevant styles under the same styleKey
 * regardless of the order. E.g, "dark:sm" should equal "sm:dark".
 */
export function getUniqueVariant(
	variants: string | string[],
	sep: string
) {
	if (typeof variants === 'string') {
		variants = variants.split(sep);
	}

	return variants.sort().join(sep);
}
