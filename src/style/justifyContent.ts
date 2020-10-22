// Packages
import { FlexStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const justifyContent = (): Record<string, FlexStyle> => ({
	'justify-center': {
		justifyContent: 'center',
	},
	[StyleUtils.id('justify', 'start')]: {
		justifyContent: 'flex-start',
	},
	[StyleUtils.id('justify', 'end')]: {
		justifyContent: 'flex-end',
	},
	[StyleUtils.id('justify', 'between')]: {
		justifyContent: 'space-between',
	},
	[StyleUtils.id('justify', 'around')]: {
		justifyContent: 'space-around',
	},
	[StyleUtils.id('justify', 'evenly')]: {
		justifyContent: 'space-evenly',
	},
});
