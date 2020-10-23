// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const fontWeight = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontWeight)
		.map((key) => ({
			[id('font', key)]: {
				fontWeight: theme.fontWeight[key],
			},
		}))
		.reduce(merge, {});
};
