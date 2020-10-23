// Packages
import { FlexStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const alignContent = (): Record<string, FlexStyle> => ({
	[StyleUtils.id('content', 'stretch')]: {
		alignContent: 'stretch',
	},
	[StyleUtils.id('content', 'center')]: {
		alignContent: 'center',
	},
	[StyleUtils.id('content', 'start')]: {
		alignContent: 'flex-start',
	},
	[StyleUtils.id('content', 'end')]: {
		alignContent: 'flex-end',
	},
	[StyleUtils.id('content', 'between')]: {
		alignContent: 'space-between',
	},
	[StyleUtils.id('content', 'around')]: {
		alignContent: 'space-around',
	},
});
