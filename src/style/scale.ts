// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const scale = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.scale);

	const x = sizes
		.map((key) => ({
			[id('scale-x', key)]: {
				transform: [
					{
						scaleX: theme.scale[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('scale-y', key)]: {
				transform: [
					{
						scaleY: theme.scale[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const xy = sizes
		.map((key) => ({
			[id('scale', key)]: {
				transform: [
					{
						scale: theme.scale[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y, xy].reduce(merge, {});
};
