// Ours
import { builtinVariants } from '../variants';
import { TokenInfo, VariantFlags } from '../types';

export const select = (
	styles: TokenInfo[],
	variantFlags?: VariantFlags
) => {
	// Override built-in variants with user provided values but always
	// include default variant styles
	const flags = {
		...builtinVariants,
		...variantFlags,
		default: true,
	};

	// Check if a variant is enabled
	const isEnabled = (variant: string) => {
		return variant
			.split(':')
			.map((v) => flags[v])
			.every(Boolean);
	};

	const mergeStyles = (
		base: Partial<TokenInfo>,
		override: Partial<TokenInfo>
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
			{} as TokenInfo
		);
};
