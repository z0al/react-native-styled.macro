// Packages
import { ViewStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const overflow = () => ({
	[id('overflow', 'hidden')]: {
		overflow: 'hidden' as ViewStyle['overflow'],
	},
	[id('overflow', 'scroll')]: {
		overflow: 'scroll' as ViewStyle['overflow'],
	},
	[id('overflow', 'visible')]: {
		overflow: 'visible' as ViewStyle['overflow'],
	},
});
