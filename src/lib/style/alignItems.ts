// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const alignItems = () => ({
	[id('items', 'start')]: {
		alignItems: 'flex-start' as FlexStyle['alignItems'],
	},
	[id('items', 'end')]: {
		alignItems: 'flex-end' as FlexStyle['alignItems'],
	},
	[id('items', 'baseline')]: {
		alignItems: 'baseline' as FlexStyle['alignItems'],
	},
	[id('items', 'stretch')]: {
		alignItems: 'stretch' as FlexStyle['alignItems'],
	},
	[id('items', 'center')]: {
		alignItems: 'center' as FlexStyle['alignItems'],
	},
});
