// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const rotate = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.rotate);

	const x = sizes
		.map((key) => ({
			[StyleUtils.id('rotate-x', key)]: {
				transform: [
					{
						rotateX: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const y = sizes
		.map((key) => ({
			[StyleUtils.id('rotate-y', key)]: {
				transform: [
					{
						rotateY: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const z = sizes
		.map((key) => ({
			[StyleUtils.id('rotate-z', key)]: {
				transform: [
					{
						rotateZ: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const xy = sizes
		.map((key) => ({
			[StyleUtils.id('rotate', key)]: {
				transform: [
					{
						rotate: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [x, y, z, xy].reduce(StyleUtils.merge, {});
};
