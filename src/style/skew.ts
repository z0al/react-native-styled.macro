// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const skew = (theme: Theme): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.skew);

	const x = sizes
		.map((key) => ({
			[StyleUtils.id('skew-x', key)]: {
				transform: [
					{
						skewX: theme.skew[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const y = sizes
		.map((key) => ({
			[StyleUtils.id('skew-y', key)]: {
				transform: [
					{
						skewY: theme.skew[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [x, y].reduce(StyleUtils.merge, {});
};
