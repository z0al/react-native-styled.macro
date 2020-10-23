// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const maxHeight = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.maxHeight)
		.map((key) => ({
			[StyleUtils.id('max-h', key)]: {
				maxHeight: theme.maxHeight[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
