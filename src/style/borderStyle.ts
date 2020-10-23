// Packages
import { ViewStyle } from 'react-native';

// Ours
import { StyleUtils } from './utils';

export const borderStyle = (): Record<string, ViewStyle> => ({
	[StyleUtils.id('border', 'solid')]: {
		borderStyle: 'solid',
	},
	[StyleUtils.id('border', 'dotted')]: {
		borderStyle: 'dotted',
	},
	[StyleUtils.id('border', 'dashed')]: {
		borderStyle: 'dashed',
	},
});
