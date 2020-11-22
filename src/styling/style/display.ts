// Packages
import { FlexStyle } from 'react-native';

export const display = (): Record<string, FlexStyle> => ({
	flex: {
		display: 'flex',
	},
	hidden: {
		display: 'none',
	},
});
