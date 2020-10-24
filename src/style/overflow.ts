// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const overflow = (): Record<string, FlexStyle> => ({
	[id('overflow', 'hidden')]: {
		overflow: 'hidden',
	},
	[id('overflow', 'scroll')]: {
		overflow: 'scroll',
	},
	[id('overflow', 'visible')]: {
		overflow: 'visible',
	},
});
