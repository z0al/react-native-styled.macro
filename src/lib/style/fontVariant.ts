// Packages
import { TextStyle } from 'react-native';

export const fontVariant = () => ({
	'small-caps': {
		fontVariant: ['small-caps'] as TextStyle['fontVariant'],
	},
	'oldstyle-nums': {
		fontVariant: ['oldstyle-nums'] as TextStyle['fontVariant'],
	},
	'lining-nums': {
		fontVariant: ['lining-nums'] as TextStyle['fontVariant'],
	},
	'tabular-nums': {
		fontVariant: ['tabular-nums'] as TextStyle['fontVariant'],
	},
	'proportional-nums': {
		fontVariant: ['proportional-nums'] as TextStyle['fontVariant'],
	},
});
