// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from './utils/id';

export const alignContent = (): Record<string, FlexStyle> => ({
	[id('content', 'stretch')]: {
		alignContent: 'stretch',
	},
	[id('content', 'center')]: {
		alignContent: 'center',
	},
	[id('content', 'start')]: {
		alignContent: 'flex-start',
	},
	[id('content', 'end')]: {
		alignContent: 'flex-end',
	},
	[id('content', 'between')]: {
		alignContent: 'space-between',
	},
	[id('content', 'around')]: {
		alignContent: 'space-around',
	},
});
