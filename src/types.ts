// @noflow

export type StyledVariants = {
	default: any[];
	[variant: string]: any[];
};

export type ToggleVariants = Record<string, boolean>;

export type Variant = (
	cb: (toggle: ToggleVariants) => void
) => () => void;

export type Configuration = {
	variants: Variant[];
	separator: string;
};
