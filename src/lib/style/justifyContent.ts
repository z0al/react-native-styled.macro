// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const justifyContent = () => ({
	'justify-center': {
		justifyContent: 'center' as FlexStyle['justifyContent'],
	},
	[id('justify', 'start')]: {
		justifyContent: 'flex-start' as FlexStyle['justifyContent'],
	},
	[id('justify', 'end')]: {
		justifyContent: 'flex-end' as FlexStyle['justifyContent'],
	},
	[id('justify', 'between')]: {
		justifyContent: 'space-between' as FlexStyle['justifyContent'],
	},
	[id('justify', 'around')]: {
		justifyContent: 'space-around' as FlexStyle['justifyContent'],
	},
	[id('justify', 'evenly')]: {
		justifyContent: 'space-evenly' as FlexStyle['justifyContent'],
	},
});
