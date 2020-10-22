// Ours
import { StyleProps, VariantStyle, ToggleVariants } from '../../types';
import { builtin } from '../../variants';

export const select = (
	variantStyles: VariantStyle[],
	variants: ToggleVariants = builtin
): StyleProps[] => {
	// Override built-in variants with user provided values but always
	// include default variant styles
	variants = { ...builtin, ...variants, default: true };

	return variantStyles
		.filter(({ variant }) => variants[variant])
		.map(({ variant, ...styleWithProps }) => styleWithProps);
};
