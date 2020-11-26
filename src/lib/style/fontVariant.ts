// Packages
import { TextStyle } from 'react-native';

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
