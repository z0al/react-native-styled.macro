// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const flex = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flex)
		.map((key) => {
			const value = theme.flex[key] || {};

			return {
				[id('flex', key)]: {
					...(typeof value === 'number' ? { flex: value } : value),
				},
			};
		})
		.reduce(merge, {});
};
