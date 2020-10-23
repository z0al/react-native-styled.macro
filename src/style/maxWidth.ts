// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const maxWidth = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.maxWidth)
		.map((key) => ({
			[StyleUtils.id('max-w', key)]: {
				maxWidth: theme.maxWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
