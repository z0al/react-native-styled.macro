// Packages
import { Platform, PixelRatio } from 'react-native';

export function rem(value: number): number | string {
	if (Platform.OS === 'web') {
		return `${value}rem`;
	}

	return PixelRatio.getFontScale() * 16 * value;
}

export const negative = (styles: Record<string, string | number>) => {
	const newStyles: Record<string, string | number> = {};

	Object.keys(styles).forEach((key) => {
		const unit = styles[key];
		newStyles['-' + key] =
			typeof unit === 'number' ? -1 * unit : '-' + unit;
	});

	return newStyles;
};

export const breakpoints = (styles: Record<string, number>) => {
	const newStyles: Record<string, number> = {};

	Object.keys(styles).forEach((key) => {
		newStyles[`screen-${key}`] = styles[key];
	});

	return newStyles;
};
