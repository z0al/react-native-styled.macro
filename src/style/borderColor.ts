// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const borderColor = (
	theme: Theme
): Record<string, ViewStyle> => {
	return Object.keys(theme.borderColor)
		.map((key) => ({
			[id('border', key)]: {
				borderColor: theme.borderColor[key] as string,
			},
		}))
		.reduce(merge, {});
};
