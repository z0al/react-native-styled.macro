// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const zIndex = (theme: Theme): Record<string, FlexStyle> => {
	return ['0', '10', '20', '30', '40', '50']
		.map((key) => ({
			[id('z', key)]: {
				zIndex: theme.zIndex[key],
			},
		}))
		.reduce(merge, {});
};
