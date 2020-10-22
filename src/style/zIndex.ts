// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const zIndex = (theme: Theme): Record<string, FlexStyle> => {
	return ['0', '10', '20', '30', '40', '50']
		.map((key) => ({
			[StyleUtils.id('z', key)]: {
				zIndex: theme.zIndex[key],
			},
		}))
		.reduce(StyleUtils.merge, {});
};
