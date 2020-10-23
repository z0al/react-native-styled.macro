// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const maxHeight = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.maxHeight)
		.map((key) => ({
			[id('max-h', key)]: {
				maxHeight: theme.maxHeight[key],
			},
		}))
		.reduce(merge, {});
};
