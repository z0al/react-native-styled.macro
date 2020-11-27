// Packages
import { FlexStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const alignSelf = () => ({
	[id('self', 'start')]: {
		alignSelf: 'flex-start' as FlexStyle['alignSelf'],
	},
	[id('self', 'end')]: {
		alignSelf: 'flex-end' as FlexStyle['alignSelf'],
	},
	[id('self', 'auto')]: {
		alignSelf: 'auto' as FlexStyle['alignSelf'],
	},
	[id('self', 'stretch')]: {
		alignSelf: 'stretch' as FlexStyle['alignSelf'],
	},
	[id('self', 'center')]: {
		alignSelf: 'center' as FlexStyle['alignSelf'],
	},
});
