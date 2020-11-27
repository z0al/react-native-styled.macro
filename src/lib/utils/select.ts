// Ours
import { builtin } from '../variants';
import { StyleProps, VariantStyle, VariantFlags } from '../types';

export const select = (
	styles: VariantStyle[],
	variantFlags: VariantFlags = builtin
): StyleProps => {
	// Override built-in variants with user provided values but always
	// include default variant styles
	variantFlags = { ...builtin, ...variantFlags, default: true };

	// Check if a variant is enabled
	const isEnabled = (variant: string) => {
		return variant
			.split(':')
			.map((v) => variantFlags[v])
			.every(Boolean);
	};

	const mergeStyles = (
		base: Partial<VariantStyle>,
		override: Partial<VariantStyle>
	) => {
		if (!base.style) {
			return [override.style];
		}

		if (Array.isArray(base.style)) {
			return [...base.style, override.style];
		}

		return [base.style, override.style];
	};

	return styles
		.filter(({ variant }) => isEnabled(variant))
		.map(({ variant: _, ...style }) => style)
		.reduce(
			(current, next) => ({
				...current,
				...next,
				style: mergeStyles(current, next),
			}),
			{} as VariantStyle
		);
};
