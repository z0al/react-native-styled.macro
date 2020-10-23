// Packages
import { TextStyle } from 'react-native';

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
