// Package
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const opacity = (theme: Theme): Record<string, ViewStyle> => {
	return Object.keys(theme.opacity)
		.map((key) => ({
			[StyleUtils.id('opacity', key)]: {
				opacity: theme.opacity[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
