// Packages
import { TextStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const textAlignVertical = () => ({
	[id('text-v', 'auto')]: {
		textAlignVertical: 'auto' as TextStyle['textAlignVertical'],
	},
	[id('text-v', 'top')]: {
		textAlignVertical: 'top' as TextStyle['textAlignVertical'],
	},
	[id('text-v', 'bottom')]: {
		textAlignVertical: 'bottom' as TextStyle['textAlignVertical'],
	},
	[id('text-v', 'center')]: {
		textAlignVertical: 'center' as TextStyle['textAlignVertical'],
	},
});
