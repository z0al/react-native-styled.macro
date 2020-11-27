// Packages
import { Platform } from 'react-native';

export const platform = () =>
	({
		[Platform.OS]: true,
	} as Record<typeof Platform.OS, boolean>);
