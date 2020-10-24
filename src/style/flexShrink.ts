// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const flexShrink = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flexShrink)
		.map((key) => ({
			[id('flex-shrink', key)]: {
				flexShrink: theme.flexShrink[key],
			},
		}))
		.reduce(merge, {});
};
