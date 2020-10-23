// Packages
import { FlexStyle } from 'react-native';

export const flexDirection = (): Record<string, FlexStyle> => ({
	'flex-row': {
		flexDirection: 'row',
	},
	'flex-row-reverse': {
		flexDirection: 'row-reverse',
	},
	'flex-col': {
		flexDirection: 'column',
	},
	'flex-col-reverse': {
		flexDirection: 'column-reverse',
	},
});
