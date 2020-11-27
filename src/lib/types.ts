// @noflow

// Ours
import { Theme } from './theme';

export type StyleProps = {
	style: Record<string, any> | Record<string, any>[];
	[props: string]: unknown;
};

export type VariantStyle = StyleProps & {
	variant: string;
};

export type ToggleVariants = Record<string, boolean | undefined>;

export type StyledMacro = (
	tokens: string[],
	variants?: ToggleVariants
) => StyleProps;

export type Configuration = {
	theme: Theme;
};
