// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const scale = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.scale);

	const x = sizes
		.map((key) => ({
			[StyleUtils.id('scale-x', key)]: {
				transform: [
					{
						scaleX: theme.scale[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const y = sizes
		.map((key) => ({
			[StyleUtils.id('scale-y', key)]: {
				transform: [
					{
						scaleY: theme.scale[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const xy = sizes
		.map((key) => ({
			[StyleUtils.id('scale', key)]: {
				transform: [
					{
						scale: theme.scale[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [x, y, xy].reduce(StyleUtils.merge, {});
};
