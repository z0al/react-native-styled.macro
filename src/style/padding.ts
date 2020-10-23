// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const padding = (theme: Theme): Record<string, FlexStyle> => {
	const sizes = Object.keys(theme.padding);

	const p = sizes
		.map((size) => ({
			[id('p', size)]: {
				padding: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pt = sizes
		.map((size) => ({
			[id('pt', size)]: {
				paddingTop: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pl = sizes
		.map((size) => ({
			[id('pl', size)]: {
				paddingLeft: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pr = sizes
		.map((size) => ({
			[id('pr', size)]: {
				paddingRight: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pb = sizes
		.map((size) => ({
			[id('pb', size)]: {
				paddingBottom: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const ps = sizes
		.map((size) => ({
			[id('ps', size)]: {
				paddingStart: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pe = sizes
		.map((size) => ({
			[id('pe', size)]: {
				paddingEnd: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const px = sizes
		.map((size) => ({
			[id('px', size)]: {
				paddingHorizontal: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const py = sizes
		.map((size) => ({
			[id('py', size)]: {
				paddingVertical: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	return [p, pt, pl, pr, pb, ps, pe, px, py].reduce(merge, {});
};
