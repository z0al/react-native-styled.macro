// Packages
import { FlexStyle } from 'react-native';

export const flexDirection = () => ({
	'flex-row': {
		flexDirection: 'row' as FlexStyle['flexDirection'],
	},
	'flex-row-reverse': {
		flexDirection: 'row-reverse' as FlexStyle['flexDirection'],
	},
	'flex-col': {
		flexDirection: 'column' as FlexStyle['flexDirection'],
	},
	'flex-col-reverse': {
		flexDirection: 'column-reverse' as FlexStyle['flexDirection'],
	},
});
