// Packages
import { TextStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const textAlign = () => ({
	[id('text', 'auto')]: {
		textAlign: 'auto' as TextStyle['textAlign'],
	},
	[id('text', 'left')]: {
		textAlign: 'left' as TextStyle['textAlign'],
	},
	[id('text', 'right')]: {
		textAlign: 'right' as TextStyle['textAlign'],
	},
	[id('text', 'center')]: {
		textAlign: 'center' as TextStyle['textAlign'],
	},
	[id('text', 'justify')]: {
		textAlign: 'justify' as TextStyle['textAlign'],
	},
});
