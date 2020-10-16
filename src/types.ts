// @noflow

export type StyledVariant = {
	variant: string;
	style: Record<string, any>;
};

export type ToggleVariants = Record<string, boolean>;

export type Variant = (
	cb: (toggle: ToggleVariants) => void
) => () => void;

type Colors = Record<string, string>;
type Units = Record<string, string | number>;
type Numeric = Record<string, number>;

export type Theme = {
	screens: Units;
	colors: Colors;
	spacing: Units;
	backgroundColor: Colors;
	borderColor: Colors;
	borderRadius: Units;
	borderWidth: Units;
	flex: Record<string, Units>;
	flexGrow: Units;
	flexShrink: Units;
	fontFamily: Record<string, string>;
	fontSize: Units;
	fontWeight: Record<string, string>;
	height: Units;
	letterSpacing: Units;
	lineHeight: Units;
	margin: Units;
	maxHeight: Units;
	maxWidth: Units;
	minHeight: Units;
	minWidth: Units;
	opacity: Numeric;
	padding: Units;
	textColor: Colors;
	width: Units;
	zIndex: Numeric;
};

export type Configuration = {
	separator: string;
	theme: Theme;
};
