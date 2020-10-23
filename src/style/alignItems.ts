// Packages
import { FlexStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const alignItems = (): Record<string, FlexStyle> => ({
	[StyleUtils.id('items', 'start')]: {
		alignItems: 'flex-start',
	},
	[StyleUtils.id('items', 'end')]: {
		alignItems: 'flex-end',
	},
	[StyleUtils.id('items', 'baseline')]: {
		alignItems: 'baseline',
	},
	[StyleUtils.id('items', 'stretch')]: {
		alignItems: 'stretch',
	},
	[StyleUtils.id('items', 'center')]: {
		alignItems: 'center',
	},
});
