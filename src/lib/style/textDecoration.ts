// Packages
import { TextStyle } from 'react-native';

export const textDecoration = () => ({
	'underline': {
		textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
	},
	'no-underline': {
		textDecorationLine: 'none' as TextStyle['textDecorationLine'],
	},
	'line-through': {
		textDecorationLine:
			'line-through' as TextStyle['textDecorationLine'],
	},
});
