// Packages
import { TextStyle } from 'react-native';

export const fontStyle = (): Record<string, TextStyle> => ({
	'italic': {
		fontStyle: 'italic',
	},
	'not-italic': {
		fontStyle: 'normal',
	},
});
