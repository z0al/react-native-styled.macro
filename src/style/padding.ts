// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const padding = (theme: Theme): Record<string, FlexStyle> => {
	const sizes = Object.keys(theme.padding);

	const p = sizes
		.map((size) => ({
			[StyleUtils.id('p', size)]: {
				padding: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const pt = sizes
		.map((size) => ({
			[StyleUtils.id('pt', size)]: {
				paddingTop: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const pl = sizes
		.map((size) => ({
			[StyleUtils.id('pl', size)]: {
				paddingLeft: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const pr = sizes
		.map((size) => ({
			[StyleUtils.id('pr', size)]: {
				paddingRight: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const pb = sizes
		.map((size) => ({
			[StyleUtils.id('pb', size)]: {
				paddingBottom: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const ps = sizes
		.map((size) => ({
			[StyleUtils.id('ps', size)]: {
				paddingStart: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const pe = sizes
		.map((size) => ({
			[StyleUtils.id('pe', size)]: {
				paddingEnd: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const px = sizes
		.map((size) => ({
			[StyleUtils.id('px', size)]: {
				paddingHorizontal: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const py = sizes
		.map((size) => ({
			[StyleUtils.id('py', size)]: {
				paddingVertical: theme.padding[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [p, pt, pl, pr, pb, ps, pe, px, py].reduce(
		StyleUtils.merge,
		{}
	);
};
