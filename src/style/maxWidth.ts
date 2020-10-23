// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const maxWidth = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.maxWidth)
		.map((key) => ({
			[id('max-w', key)]: {
				maxWidth: theme.maxWidth[key],
			},
		}))
		.reduce(merge, {});
};
