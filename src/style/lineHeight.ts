// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const lineHeight = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.lineHeight)
		.map((key) => ({
			[StyleUtils.id('line-h', key)]: {
				lineHeight: theme.lineHeight[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
