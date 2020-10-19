// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const fontFamily = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontFamily)
		.map((key) => ({
			[styleName('font', key)]: {
				fontFamily: theme.fontFamily[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const fontWeight = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontWeight)
		.map((key) => ({
			[styleName('font', key)]: {
				fontWeight: theme.fontWeight[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const fontSize = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontSize)
		.map((key) => ({
			[styleName('text', key)]: {
				fontSize: theme.fontSize[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const fontStyle = (): Record<string, TextStyle> => ({
	italic: {
		fontStyle: 'italic',
	},
	'not-italic': {
		fontStyle: 'normal',
	},
});

export const fontVariant = (): Record<string, TextStyle> => ({
	'small-caps': {
		fontVariant: ['small-caps'],
	},
	'oldstyle-nums': {
		fontVariant: ['oldstyle-nums'],
	},
	'lining-nums': {
		fontVariant: ['lining-nums'],
	},
	'tabular-nums': {
		fontVariant: ['tabular-nums'],
	},
	'proportional-nums': {
		fontVariant: ['proportional-nums'],
	},
});

export const letterSpacing = (
	theme: Theme
): Record<string, TextStyle> => {
	return Object.keys(theme.letterSpacing)
		.map((key) => ({
			[styleName('letter', key)]: {
				letterSpacing: theme.letterSpacing[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const lineHeight = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.lineHeight)
		.map((key) => ({
			[styleName('line-h', key)]: {
				lineHeight: theme.lineHeight[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const textAlignment = (): Record<string, TextStyle> => ({
	[styleName('text', 'auto')]: {
		textAlign: 'auto',
	},
	[styleName('text', 'left')]: {
		textAlign: 'left',
	},
	[styleName('text', 'right')]: {
		textAlign: 'right',
	},
	[styleName('text', 'center')]: {
		textAlign: 'center',
	},
	[styleName('text', 'justify')]: {
		textAlign: 'justify',
	},
});

export const textAlignVertical = (): Record<string, TextStyle> => ({
	[styleName('text-v', 'auto')]: {
		textAlignVertical: 'auto',
	},
	[styleName('text-v', 'top')]: {
		textAlignVertical: 'top',
	},
	[styleName('text-v', 'bottom')]: {
		textAlignVertical: 'bottom',
	},
	[styleName('text-v', 'center')]: {
		textAlignVertical: 'center',
	},
});

export const textColor = (theme: Theme) => {
	return Object.keys(theme.textColor)
		.map((key) => ({
			[styleName('text', key)]: {
				color: theme.textColor[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const textDecoration = (): Record<string, TextStyle> => ({
	underline: {
		textDecorationLine: 'underline',
	},
	'no-underline': {
		textDecorationLine: 'none',
	},
	'line-through': {
		textDecorationLine: 'line-through',
	},
});

export const textTransform = (): Record<string, TextStyle> => ({
	uppercase: {
		textTransform: 'uppercase',
	},
	lowercase: {
		textTransform: 'lowercase',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	'normal-case': {
		textTransform: 'none',
	},
});

export default (theme: Theme) => ({
	...fontFamily(theme),
	...fontSize(theme),
	...fontStyle(),
	...fontVariant(),
	...fontWeight(theme),
	...letterSpacing(theme),
	...lineHeight(theme),
	...textAlignment(),
	...textAlignVertical(),
	...textColor(theme),
	...textDecoration(),
	...textTransform(),
});
