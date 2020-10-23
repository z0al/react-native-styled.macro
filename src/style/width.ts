// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const width = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.width)
		.map((key) => ({
			[StyleUtils.id('w', key)]: {
				width: theme.width[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
