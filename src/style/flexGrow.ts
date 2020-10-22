// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const flexGrow = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flexGrow)
		.map((key) => ({
			[StyleUtils.id('flex-grow', key)]: {
				flexGrow: theme.flexGrow[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
