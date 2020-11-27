// Packages
import { TextStyle } from 'react-native';

export const textTransform = () => ({
	'uppercase': {
		textTransform: 'uppercase' as TextStyle['textTransform'],
	},
	'lowercase': {
		textTransform: 'lowercase' as TextStyle['textTransform'],
	},
	'capitalize': {
		textTransform: 'capitalize' as TextStyle['textTransform'],
	},
	'normal-case': {
		textTransform: 'none' as TextStyle['textTransform'],
	},
});
