// Packages
import { FlexStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const overflow = (): Record<string, FlexStyle> => ({
	[StyleUtils.id('overflow', 'hidden')]: {
		overflow: 'hidden',
	},
	[StyleUtils.id('overflow', 'scroll')]: {
		overflow: 'scroll',
	},
	[StyleUtils.id('overflow', 'visible')]: {
		overflow: 'visible',
	},
});
