// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const skew = (theme: Theme): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.skew);

	const x = sizes
		.map((key) => ({
			[id('skew-x', key)]: {
				transform: [
					{
						skewX: theme.skew[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('skew-y', key)]: {
				transform: [
					{
						skewY: theme.skew[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y].reduce(merge, {});
};
