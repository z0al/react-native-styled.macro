// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const backgroundColor = (
	theme: Theme
): Record<string, ViewStyle> => {
	return Object.keys(theme.backgroundColor)
		.map((key) => ({
			[StyleUtils.id('bg', key)]: {
				backgroundColor: theme.backgroundColor[key] as string,
			},
		}))
		.reduce(StyleUtils.merge, {});
};
