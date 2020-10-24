// Packages
import { ViewStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const borderStyle = (): Record<string, ViewStyle> => ({
	[id('border', 'solid')]: {
		borderStyle: 'solid',
	},
	[id('border', 'dotted')]: {
		borderStyle: 'dotted',
	},
	[id('border', 'dashed')]: {
		borderStyle: 'dashed',
	},
});
