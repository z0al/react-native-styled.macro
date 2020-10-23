// Package
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const opacity = (theme: Theme): Record<string, ViewStyle> => {
	return Object.keys(theme.opacity)
		.map((key) => ({
			[id('opacity', key)]: {
				opacity: theme.opacity[key],
			},
		}))
		.reduce(merge, {});
};
