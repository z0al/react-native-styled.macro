// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const minHeight = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.minHeight)
		.map((key) => ({
			[StyleUtils.id('min-h', key)]: {
				minHeight: theme.minHeight[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
