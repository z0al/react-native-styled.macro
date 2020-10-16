// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';

const fontFamily = (theme: Theme) => {
	return Object.keys(theme.fontFamily)
		.map((key) => ({
			['font-' + key]: {
				fontFamily: theme.fontFamily[key],
			},
		}))
		.reduce(merge, {});
};

const fontWeight = (theme: Theme) => {
	return Object.keys(theme.fontWeight)
		.map((key) => ({
			['font-' + key]: {
				fontWeight: theme.fontWeight[key],
			},
		}))
		.reduce(merge, {});
};

const fontSize = (theme: Theme) => {
	return Object.keys(theme.fontSize)
		.map((key) => ({
			['text-' + key]: {
				fontSize: theme.fontSize[key],
			},
		}))
		.reduce(merge, {});
};

const fontStyle = () => ({
	italic: {
		fontStyle: 'italic',
	},
	'not-italic': {
		fontStyle: 'normal',
	},
});

const fontVariant = () => {
	return [
		'small-caps',
		'oldstyle-nums',
		'lining-nums',
		'tabular-nums',
		'proportional-nums',
	]
		.map((value) => ({
			[value]: {
				fontVariant: [value],
			},
		}))
		.reduce(merge, {});
};

const letterSpacing = (theme: Theme) => {
	return Object.keys(theme.letterSpacing)
		.map((key) => ({
			['letter-' + key]: {
				letterSpacing: theme.letterSpacing[key],
			},
		}))
		.reduce(merge, {});
};

const lineHeight = (theme: Theme) => {
	return Object.keys(theme.lineHeight)
		.map((key) => ({
			['line-h-' + key]: {
				lineHeight: theme.lineHeight[key],
			},
		}))
		.reduce(merge, {});
};

const textAlign = () => {
	return ['auto', 'left', 'right', 'center', 'justify']
		.map((value) => ({
			['text-' + value]: {
				textAlign: value,
			},
		}))
		.reduce(merge, {});
};

const textAlignVertical = () => {
	return ['auto', 'top', 'bottom', 'center']
		.map((value) => ({
			['text-v-' + value]: {
				textAlignVertical: value,
			},
		}))
		.reduce(merge, {});
};

const textColor = (theme: Theme) => {
	return Object.keys(theme.textColor)
		.map((key) => ({
			['text-' + key]: {
				color: theme.textColor[key],
			},
		}))
		.reduce(merge, {});
};

const textDecoration = () => ({
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

const textTransform = () => ({
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
	...textAlign(),
	...textAlignVertical(),
	...textColor(theme),
	...textDecoration(),
	...textTransform(),
});
