// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';

export const container = (theme: Theme): Record<string, FlexStyle> => {
	return {
		container: {
			width: theme.width.full,
		},
	};
};
