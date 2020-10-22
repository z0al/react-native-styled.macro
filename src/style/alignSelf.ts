// Packages
import { FlexStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const alignSelf = (): Record<string, FlexStyle> => ({
	[StyleUtils.id('self', 'start')]: {
		alignSelf: 'flex-start',
	},
	[StyleUtils.id('self', 'end')]: {
		alignSelf: 'flex-end',
	},
	[StyleUtils.id('self', 'auto')]: {
		alignSelf: 'auto',
	},
	[StyleUtils.id('self', 'stretch')]: {
		alignSelf: 'stretch',
	},
	[StyleUtils.id('self', 'center')]: {
		alignSelf: 'center',
	},
});
