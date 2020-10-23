// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const letterSpacing = (
	theme: Theme
): Record<string, TextStyle> => {
	return Object.keys(theme.letterSpacing)
		.map((key) => ({
			[StyleUtils.id('letter', key)]: {
				letterSpacing: theme.letterSpacing[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
