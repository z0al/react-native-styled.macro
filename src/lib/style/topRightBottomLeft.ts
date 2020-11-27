// Packages
import { ViewStyle } from 'react-native';

export const topRightBottomLeft = () => ({
	'inset-0': { top: 0, right: 0, bottom: 0, left: 0 } as ViewStyle,
	'inset-y-0': { top: 0, bottom: 0 } as ViewStyle,
	'inset-x-0': { right: 0, left: 0 } as ViewStyle,
	'top-0': { top: 0 } as ViewStyle,
	'right-0': { right: 0 } as ViewStyle,
	'bottom-0': { bottom: 0 } as ViewStyle,
	'left-0': { left: 0 } as ViewStyle,
});
