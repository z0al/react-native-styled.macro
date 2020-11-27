// Packages
import { ImageStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const resizeMode = () => ({
	[id('img', 'cover')]: {
		resizeMode: 'cover' as ImageStyle['resizeMode'],
	},
	[id('img', 'contain')]: {
		resizeMode: 'contain' as ImageStyle['resizeMode'],
	},
	[id('img', 'stretch')]: {
		resizeMode: 'stretch' as ImageStyle['resizeMode'],
	},
	[id('img', 'repeat')]: {
		resizeMode: 'repeat' as ImageStyle['resizeMode'],
	},
	[id('img', 'center')]: {
		resizeMode: 'center' as ImageStyle['resizeMode'],
	},
});
