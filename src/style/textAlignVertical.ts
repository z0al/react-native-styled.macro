// Packages
import { TextStyle } from 'react-native';

// Ours
import { id } from './utils/id';
import { merge } from './utils/merge';

export const textAlignVertical = (): Record<string, TextStyle> => ({
	[id('text-v', 'auto')]: {
		textAlignVertical: 'auto',
	},
	[id('text-v', 'top')]: {
		textAlignVertical: 'top',
	},
	[id('text-v', 'bottom')]: {
		textAlignVertical: 'bottom',
	},
	[id('text-v', 'center')]: {
		textAlignVertical: 'center',
	},
});
