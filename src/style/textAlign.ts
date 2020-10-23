// Packages
import { TextStyle } from 'react-native';

// Ours
import { id } from './utils/id';
import { merge } from './utils/merge';

export const textAlign = (): Record<string, TextStyle> => ({
	[id('text', 'auto')]: {
		textAlign: 'auto',
	},
	[id('text', 'left')]: {
		textAlign: 'left',
	},
	[id('text', 'right')]: {
		textAlign: 'right',
	},
	[id('text', 'center')]: {
		textAlign: 'center',
	},
	[id('text', 'justify')]: {
		textAlign: 'justify',
	},
});
