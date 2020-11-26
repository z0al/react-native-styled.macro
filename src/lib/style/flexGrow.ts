// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const flexGrow = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flexGrow)
		.map((key) => ({
			[id('flex-grow', key)]: {
				flexGrow: theme.flexGrow[key],
			},
		}))
		.reduce(merge, {});
};
