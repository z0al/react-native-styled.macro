// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const letterSpacing = (
	theme: Theme
): Record<string, TextStyle> => {
	return Object.keys(theme.letterSpacing)
		.map((key) => ({
			[id('letter', key)]: {
				letterSpacing: theme.letterSpacing[key],
			},
		}))
		.reduce(merge, {});
};
