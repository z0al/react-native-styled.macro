// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const textColor = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.textColor)
		.map((key) => ({
			[id('text', key)]: {
				color: theme.textColor[key] as string,
			},
		}))
		.reduce(merge, {});
};
