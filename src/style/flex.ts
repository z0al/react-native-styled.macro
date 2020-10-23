// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const flex = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flex)
		.map((key) => {
			const value = theme.flex[key] || {};

			return {
				[StyleUtils.id('flex', key)]: {
					...(typeof value === 'number' ? { flex: value } : value),
				},
			};
		})
		.reduce(StyleUtils.merge, {});
};
