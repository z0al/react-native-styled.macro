// Packages
import { FlexStyle } from 'react-native';

export const flexWrap = (): Record<string, FlexStyle> => ({
	'flex-no-wrap': {
		flexWrap: 'nowrap',
	},
	'flex-wrap': {
		flexWrap: 'wrap',
	},
	'flex-wrap-reverse': {
		flexWrap: 'wrap-reverse',
	},
});
