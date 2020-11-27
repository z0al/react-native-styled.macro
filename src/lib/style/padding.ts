// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Spacing = keyof Theme['padding'];

type PaddingStyle = Record<
	| StyleName<'p', Spacing>
	| StyleName<'pt', Spacing>
	| StyleName<'pl', Spacing>
	| StyleName<'pr', Spacing>
	| StyleName<'pb', Spacing>
	| StyleName<'ps', Spacing>
	| StyleName<'pe', Spacing>
	| StyleName<'px', Spacing>
	| StyleName<'py', Spacing>,
	{
		padding?: any;
		paddingTop?: any;
		paddingLeft?: any;
		paddingRight?: any;
		paddingBottom?: any;
		paddingStart?: any;
		paddingEnd?: any;
		paddingHorizontal?: any;
		paddingVertical?: any;
	}
>;

export const padding = (theme: Theme) => {
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

	return [p, pt, pl, pr, pb, ps, pe, px, py].reduce(
		merge,
		{}
	) as PaddingStyle;
};
