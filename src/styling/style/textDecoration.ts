// Packages
import { TextStyle } from 'react-native';

export const textDecoration = (): Record<string, TextStyle> => ({
	'underline': {
		textDecorationLine: 'underline',
	},
	'no-underline': {
		textDecorationLine: 'none',
	},
	'line-through': {
		textDecorationLine: 'line-through',
	},
});
