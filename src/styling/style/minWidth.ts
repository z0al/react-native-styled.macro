// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const minWidth = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.minWidth)
		.map((key) => ({
			[id('min-w', key)]: {
				minWidth: theme.minWidth[key],
			},
		}))
		.reduce(merge, {});
};
