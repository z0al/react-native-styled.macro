// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const lineHeight = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.lineHeight)
		.map((key) => ({
			[id('line-h', key)]: {
				lineHeight: theme.lineHeight[key] as number,
			},
		}))
		.reduce(merge, {});
};
