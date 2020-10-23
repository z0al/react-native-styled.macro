// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const fontFamily = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontFamily)
		.map((key) => ({
			[StyleUtils.id('font', key)]: {
				fontFamily: theme.fontFamily[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
