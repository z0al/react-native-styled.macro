export const DEFAULT_VARIANT = 'default';

/**
 * Check whether a given variant name equals to the default variant.
 */
export function isDefaultVariant(variant: string) {
	return variant === DEFAULT_VARIANT;
}
