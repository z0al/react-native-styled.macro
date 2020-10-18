// @noflow
// Packages
import {
	ColorValue,
	ViewStyle,
	TextStyle,
	FlexStyle,
	ScaleTransform,
	RotateTransform,
	TranslateXTransform,
	SkewXTransform,
} from 'react-native';

export type StyledVariant = {
	variant: string;
	style: Record<string, any>;
};

export type ToggleVariants = Record<string, boolean>;

export type Variant = (
	cb: (toggle: ToggleVariants) => void
) => () => void;

type StringOrNumber = Record<string, string | number>;
type Colors = Record<string, ColorValue>;

export type Theme = {
	screens: StringOrNumber;
	colors: Colors;
	spacing: StringOrNumber;
	backgroundColor: Colors;
	borderColor: Colors;
	borderRadius: Record<string, ViewStyle['borderRadius']>;
	borderWidth: Record<string, ViewStyle['borderWidth']>;
	flex: Record<
		string,
		| FlexStyle['flex']
		| Partial<Pick<FlexStyle, 'flexBasis' | 'flexGrow' | 'flexShrink'>>
	>;
	flexGrow: Record<string, FlexStyle['flexGrow']>;
	flexShrink: Record<string, FlexStyle['flexShrink']>;
	fontFamily: Record<string, TextStyle['fontFamily']>;
	fontSize: Record<string, TextStyle['fontSize']>;
	fontWeight: Record<string, TextStyle['fontWeight']>;
	height: Record<string, ViewStyle['height']>;
	letterSpacing: Record<string, TextStyle['letterSpacing']>;
	lineHeight: Record<string, TextStyle['lineHeight']>;
	margin: Record<string, ViewStyle['margin']>;
	maxHeight: Record<string, ViewStyle['maxHeight']>;
	maxWidth: Record<string, ViewStyle['maxWidth']>;
	minHeight: Record<string, ViewStyle['maxHeight']>;
	minWidth: Record<string, ViewStyle['minWidth']>;
	opacity: Record<string, ViewStyle['opacity']>;
	padding: Record<string, ViewStyle['padding']>;
	textColor: Colors;
	width: Record<string, ViewStyle['width']>;
	zIndex: Record<string, ViewStyle['zIndex']>;
	scale: Record<string, ScaleTransform['scale']>;
	rotate: Record<string, RotateTransform['rotate']>;
	translate: Record<string, TranslateXTransform['translateX']>;
	skew: Record<string, SkewXTransform['skewX']>;
};

export type Configuration = {
	separator: string;
	theme: Theme;
};
