// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from '../utils/id';
import { merge } from '../utils/merge';

export const translate = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.translate);

	const x = sizes
		.map((key) => ({
			[id('translate-x', key)]: {
				transform: [
					{
						translateX: theme.translate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('translate-y', key)]: {
				transform: [
					{
						translateY: theme.translate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y].reduce(merge, {});
};
