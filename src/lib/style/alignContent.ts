// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const alignContent = () => ({
	[id('content', 'stretch')]: {
		alignContent: 'stretch' as FlexStyle['alignContent'],
	},
	[id('content', 'center')]: {
		alignContent: 'center' as FlexStyle['alignContent'],
	},
	[id('content', 'start')]: {
		alignContent: 'flex-start' as FlexStyle['alignContent'],
	},
	[id('content', 'end')]: {
		alignContent: 'flex-end' as FlexStyle['alignContent'],
	},
	[id('content', 'between')]: {
		alignContent: 'space-between' as FlexStyle['alignContent'],
	},
	[id('content', 'around')]: {
		alignContent: 'space-around' as FlexStyle['alignContent'],
	},
});
