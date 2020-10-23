// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const fontSize = (theme: Theme): Record<string, TextStyle> => {
	return Object.keys(theme.fontSize)
		.map((key) => ({
			[StyleUtils.id('text', key)]: {
				fontSize: theme.fontSize[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
