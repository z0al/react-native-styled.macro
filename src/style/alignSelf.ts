// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from './utils/id';

export const alignSelf = (): Record<string, FlexStyle> => ({
	[id('self', 'start')]: {
		alignSelf: 'flex-start',
	},
	[id('self', 'end')]: {
		alignSelf: 'flex-end',
	},
	[id('self', 'auto')]: {
		alignSelf: 'auto',
	},
	[id('self', 'stretch')]: {
		alignSelf: 'stretch',
	},
	[id('self', 'center')]: {
		alignSelf: 'center',
	},
});
