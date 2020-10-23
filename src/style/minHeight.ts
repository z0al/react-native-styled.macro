// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const minHeight = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.minHeight)
		.map((key) => ({
			[id('min-h', key)]: {
				minHeight: theme.minHeight[key],
			},
		}))
		.reduce(merge, {});
};
