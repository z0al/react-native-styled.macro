// @noflow

export type StyledVariant = {
	variant: string;
	style: Record<string, any>;
};

export type ToggleVariants = Record<string, boolean>;

export type Variant = (
	cb: (toggle: ToggleVariants) => void
) => () => void;

export type Configuration = {
	variants: Variant[];
	separator: string;
};
