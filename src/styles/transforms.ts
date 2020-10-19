// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const scale = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.scale);

	const x = sizes
		.map((key) => ({
			[styleName('scale-x', key)]: {
				transform: [
					{
						scaleX: theme.scale[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const y = sizes
		.map((key) => ({
			[styleName('scale-y', key)]: {
				transform: [
					{
						scaleY: theme.scale[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const xy = sizes
		.map((key) => ({
			[styleName('scale', key)]: {
				transform: [
					{
						scale: theme.scale[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	return [x, y, xy].reduce(mergeStyles, {});
};

export const rotate = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.rotate);

	const x = sizes
		.map((key) => ({
			[styleName('rotate-x', key)]: {
				transform: [
					{
						rotateX: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const y = sizes
		.map((key) => ({
			[styleName('rotate-y', key)]: {
				transform: [
					{
						rotateY: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const z = sizes
		.map((key) => ({
			[styleName('rotate-z', key)]: {
				transform: [
					{
						rotateZ: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const xy = sizes
		.map((key) => ({
			[styleName('rotate', key)]: {
				transform: [
					{
						rotate: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	return [x, y, z, xy].reduce(mergeStyles, {});
};

export const translate = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.translate);

	const x = sizes
		.map((key) => ({
			[styleName('translate-x', key)]: {
				transform: [
					{
						translateX: theme.translate[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const y = sizes
		.map((key) => ({
			[styleName('translate-y', key)]: {
				transform: [
					{
						translateY: theme.translate[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	return [x, y].reduce(mergeStyles, {});
};

export const skew = (theme: Theme): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.skew);

	const x = sizes
		.map((key) => ({
			[styleName('skew-x', key)]: {
				transform: [
					{
						skewX: theme.skew[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	const y = sizes
		.map((key) => ({
			[styleName('skew-y', key)]: {
				transform: [
					{
						skewY: theme.skew[key],
					},
				],
			},
		}))
		.reduce(mergeStyles, {});

	return [x, y].reduce(mergeStyles, {});
};

export default (theme: Theme) => ({
	...scale(theme),
	...rotate(theme),
	...translate(theme),
	...skew(theme),
});
