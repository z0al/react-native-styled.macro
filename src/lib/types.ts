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

export type VariantFlags = Record<string, boolean | undefined>;

export type StyledMacro = (
	tokens: string[],
	variants?: VariantFlags
) => StyleProps;

export type Configuration = {
	theme: Theme;
};
