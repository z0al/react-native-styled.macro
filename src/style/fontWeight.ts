// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const fontWeight = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontWeight)
		.map((key) => ({
			[StyleUtils.id('font', key)]: {
				fontWeight: theme.fontWeight[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
