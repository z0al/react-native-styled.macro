// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from './utils/id';

export const justifyContent = (): Record<string, FlexStyle> => ({
	'justify-center': {
		justifyContent: 'center',
	},
	[id('justify', 'start')]: {
		justifyContent: 'flex-start',
	},
	[id('justify', 'end')]: {
		justifyContent: 'flex-end',
	},
	[id('justify', 'between')]: {
		justifyContent: 'space-between',
	},
	[id('justify', 'around')]: {
		justifyContent: 'space-around',
	},
	[id('justify', 'evenly')]: {
		justifyContent: 'space-evenly',
	},
});
