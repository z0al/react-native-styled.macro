// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const width = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.width)
		.map((key) => ({
			[id('w', key)]: {
				width: theme.width[key],
			},
		}))
		.reduce(merge, {});
};
