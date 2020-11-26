// Packages
import { I18nManager } from 'react-native';

export const layout = () => ({
	rtl: I18nManager.isRTL,
	ltr: !I18nManager.isRTL,
});
