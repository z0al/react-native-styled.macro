// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Spacing = keyof Theme['margin'];

type MarginStyle = Record<
	| StyleName<'m', Spacing>
	| StyleName<'mt', Spacing>
	| StyleName<'ml', Spacing>
	| StyleName<'mr', Spacing>
	| StyleName<'mb', Spacing>
	| StyleName<'ms', Spacing>
	| StyleName<'me', Spacing>
	| StyleName<'mx', Spacing>
	| StyleName<'my', Spacing>,
	{
		margin?: any;
		marginTop?: any;
		marginLeft?: any;
		marginRight?: any;
		marginBottom?: any;
		marginStart?: any;
		marginEnd?: any;
		marginHorizontal?: any;
		marginVertical?: any;
	}
>;

export const margin = (theme: Theme) => {
	const sizes = Object.keys(theme.margin);

	const m = sizes
		.map((size) => ({
			[id('m', size)]: {
				margin: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mt = sizes
		.map((size) => ({
			[id('mt', size)]: {
				marginTop: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const ml = sizes
		.map((size) => ({
			[id('ml', size)]: {
				marginLeft: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mr = sizes
		.map((size) => ({
			[id('mr', size)]: {
				marginRight: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mb = sizes
		.map((size) => ({
			[id('mb', size)]: {
				marginBottom: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const ms = sizes
		.map((size) => ({
			[id('ms', size)]: {
				marginStart: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const me = sizes
		.map((size) => ({
			[id('me', size)]: {
				marginEnd: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mx = sizes
		.map((size) => ({
			[id('mx', size)]: {
				marginHorizontal: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const my = sizes
		.map((size) => ({
			[id('my', size)]: {
				marginVertical: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	return [m, mt, ml, mr, mb, ms, me, mx, my].reduce(
		merge,
		{}
	) as MarginStyle;
};
