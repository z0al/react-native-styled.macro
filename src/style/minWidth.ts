// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const minWidth = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.minWidth)
		.map((key) => ({
			[StyleUtils.id('min-w', key)]: {
				minWidth: theme.minWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
