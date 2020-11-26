// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const height = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.height)
		.map((key) => ({
			[id('h', key)]: {
				height: theme.height[key],
			},
		}))
		.reduce(merge, {});
};
