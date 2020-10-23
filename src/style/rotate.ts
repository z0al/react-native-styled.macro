// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const rotate = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.rotate);

	const x = sizes
		.map((key) => ({
			[id('rotate-x', key)]: {
				transform: [
					{
						rotateX: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('rotate-y', key)]: {
				transform: [
					{
						rotateY: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const z = sizes
		.map((key) => ({
			[id('rotate-z', key)]: {
				transform: [
					{
						rotateZ: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const xy = sizes
		.map((key) => ({
			[id('rotate', key)]: {
				transform: [
					{
						rotate: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y, z, xy].reduce(merge, {});
};
