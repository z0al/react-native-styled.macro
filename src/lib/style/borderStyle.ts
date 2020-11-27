// Packages
import { ViewStyle } from 'react-native';

// Ours
import { id } from '../utils/id';

export const borderStyle = () => ({
	[id('border', 'solid')]: {
		borderStyle: 'solid' as ViewStyle['borderStyle'],
	},
	[id('border', 'dotted')]: {
		borderStyle: 'dotted' as ViewStyle['borderStyle'],
	},
	[id('border', 'dashed')]: {
		borderStyle: 'dashed' as ViewStyle['borderStyle'],
	},
});
