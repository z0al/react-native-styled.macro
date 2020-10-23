// Packages
import { TextStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const textAlignVertical = (): Record<string, TextStyle> => ({
	[StyleUtils.id('text-v', 'auto')]: {
		textAlignVertical: 'auto',
	},
	[StyleUtils.id('text-v', 'top')]: {
		textAlignVertical: 'top',
	},
	[StyleUtils.id('text-v', 'bottom')]: {
		textAlignVertical: 'bottom',
	},
	[StyleUtils.id('text-v', 'center')]: {
		textAlignVertical: 'center',
	},
});
