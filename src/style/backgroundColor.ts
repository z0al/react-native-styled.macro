// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const backgroundColor = (
	theme: Theme
): Record<string, ViewStyle> => {
	return Object.keys(theme.backgroundColor)
		.map((key) => ({
			[id('bg', key)]: {
				backgroundColor: theme.backgroundColor[key] as string,
			},
		}))
		.reduce(merge, {});
};
