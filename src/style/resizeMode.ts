// Packages
import { ImageStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const resizeMode = (): Record<string, ImageStyle> => ({
	[id('img', 'cover')]: {
		resizeMode: 'cover',
	},
	[id('img', 'contain')]: {
		resizeMode: 'contain',
	},
	[id('img', 'stretch')]: {
		resizeMode: 'stretch',
	},
	[id('img', 'repeat')]: {
		resizeMode: 'repeat',
	},
	[id('img', 'center')]: {
		resizeMode: 'center',
	},
});
