// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const alignItems = (): Record<string, FlexStyle> => ({
	[id('items', 'start')]: {
		alignItems: 'flex-start',
	},
	[id('items', 'end')]: {
		alignItems: 'flex-end',
	},
	[id('items', 'baseline')]: {
		alignItems: 'baseline',
	},
	[id('items', 'stretch')]: {
		alignItems: 'stretch',
	},
	[id('items', 'center')]: {
		alignItems: 'center',
	},
});
