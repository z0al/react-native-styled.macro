// Ours
import { StyleProps, VariantStyle, ToggleVariants } from '../types';
import { builtin } from '../variants';

export const select = (
	variantStyles: VariantStyle[],
	variants: ToggleVariants = builtin
): StyleProps => {
	// Override built-in variants with user provided values but always
	// include default variant styles
	variants = { ...builtin, ...variants, default: true };

	return variantStyles
		.filter(({ variant }) => Boolean(variants[variant]))
		.map(({ variant, ...styleWithProps }) => styleWithProps)
		.reduce(
			(props, next) => ({
				...props,
				...next,
				style: props.style
					? Array.isArray(props.style)
						? [...props.style, next.style]
						: [props.style, next.style]
					: [next.style],
			}),
			{} as VariantStyle
		);
};
