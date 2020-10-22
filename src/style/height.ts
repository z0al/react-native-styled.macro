// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const height = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.height)
		.map((key) => ({
			[StyleUtils.id('h', key)]: {
				height: theme.height[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
