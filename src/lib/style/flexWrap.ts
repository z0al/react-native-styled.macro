// Packages
import { FlexStyle } from 'react-native';

export const flexWrap = () => ({
	'flex-no-wrap': {
		flexWrap: 'nowrap' as FlexStyle['flexWrap'],
	},
	'flex-wrap': {
		flexWrap: 'wrap' as FlexStyle['flexWrap'],
	},
	'flex-wrap-reverse': {
		flexWrap: 'wrap-reverse' as FlexStyle['flexWrap'],
	},
});
