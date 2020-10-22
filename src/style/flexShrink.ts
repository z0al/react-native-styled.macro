// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const flexShrink = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flexShrink)
		.map((key) => ({
			[StyleUtils.id('flex-shrink', key)]: {
				flexShrink: theme.flexShrink[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
