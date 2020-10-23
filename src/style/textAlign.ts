// Packages
import { TextStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const textAlign = (): Record<string, TextStyle> => ({
	[StyleUtils.id('text', 'auto')]: {
		textAlign: 'auto',
	},
	[StyleUtils.id('text', 'left')]: {
		textAlign: 'left',
	},
	[StyleUtils.id('text', 'right')]: {
		textAlign: 'right',
	},
	[StyleUtils.id('text', 'center')]: {
		textAlign: 'center',
	},
	[StyleUtils.id('text', 'justify')]: {
		textAlign: 'justify',
	},
});
