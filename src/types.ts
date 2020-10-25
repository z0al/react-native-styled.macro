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

export type StyleProps = {
	style: Record<string, any>;
	[props: string]: unknown;
};

export type VariantStyle = StyleProps & {
	variant: string;
};

export type ToggleVariants = Record<string, boolean | undefined>;

export type Variant = (
	cb: (toggle: ToggleVariants) => void
) => () => void;

type Colors = Record<string, ColorValue>;

export type Theme = {
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
	theme: Theme;
};

export class StyleError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'StyleError';
	}
}
