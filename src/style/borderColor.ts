// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const borderColor = (
	theme: Theme
): Record<string, ViewStyle> => {
	return Object.keys(theme.borderColor)
		.map((key) => ({
			[StyleUtils.id('border', key)]: {
				borderColor: theme.borderColor[key] as string,
			},
		}))
		.reduce(StyleUtils.merge, {});
};
