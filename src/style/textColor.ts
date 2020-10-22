// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const textColor = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.textColor)
		.map((key) => ({
			[StyleUtils.id('text', key)]: {
				color: theme.textColor[key] as string,
			},
		}))
		.reduce(StyleUtils.merge, {});
};
