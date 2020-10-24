// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const fontSize = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontSize)
		.map((key) => ({
			[id('text', key)]: {
				fontSize: theme.fontSize[key],
			},
		}))
		.reduce(merge, {});
};
