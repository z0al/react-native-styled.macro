// Packages
import { TextStyle } from 'react-native';

export const fontStyle = () => ({
	'italic': {
		fontStyle: 'italic' as TextStyle['fontStyle'],
	},
	'not-italic': {
		fontStyle: 'normal' as TextStyle['fontStyle'],
	},
});
