// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const padding = (theme: Theme) => {
	const sizes = Object.keys(theme.padding);

	const p = sizes
		.map((size) => ({
			[styleName('p', size)]: {
				padding: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const pt = sizes
		.map((size) => ({
			[styleName('pt', size)]: {
				paddingTop: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const pl = sizes
		.map((size) => ({
			[styleName('pl', size)]: {
				paddingLeft: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const pr = sizes
		.map((size) => ({
			[styleName('pr', size)]: {
				paddingRight: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const pb = sizes
		.map((size) => ({
			[styleName('pb', size)]: {
				paddingBottom: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const ps = sizes
		.map((size) => ({
			[styleName('ps', size)]: {
				paddingStart: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const pe = sizes
		.map((size) => ({
			[styleName('pe', size)]: {
				paddingEnd: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const px = sizes
		.map((size) => ({
			[styleName('px', size)]: {
				paddingHorizontal: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	const py = sizes
		.map((size) => ({
			[styleName('py', size)]: {
				paddingVertical: theme.padding[size],
			},
		}))
		.reduce(mergeStyles, {});

	return [p, pt, pl, pr, pb, ps, pe, px, py].reduce(mergeStyles, {});
};

export const margin = (theme: Theme) => {
	const sizes = Object.keys(theme.margin);

	const m = sizes
		.map((size) => ({
			[styleName('m', size)]: {
				margin: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const mt = sizes
		.map((size) => ({
			[styleName('mt', size)]: {
				marginTop: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const ml = sizes
		.map((size) => ({
			[styleName('ml', size)]: {
				marginLeft: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const mr = sizes
		.map((size) => ({
			[styleName('mr', size)]: {
				marginRight: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const mb = sizes
		.map((size) => ({
			[styleName('mb', size)]: {
				marginBottom: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const ms = sizes
		.map((size) => ({
			[styleName('ms', size)]: {
				marginStart: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const me = sizes
		.map((size) => ({
			[styleName('me', size)]: {
				marginEnd: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const mx = sizes
		.map((size) => ({
			[styleName('mx', size)]: {
				marginHorizontal: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	const my = sizes
		.map((size) => ({
			[styleName('my', size)]: {
				marginVertical: theme.margin[size],
			},
		}))
		.reduce(mergeStyles, {});

	return [m, mt, ml, mr, mb, ms, me, mx, my].reduce(mergeStyles, {});
};

export default (theme: Theme) => ({
	...padding(theme),
	...margin(theme),
});
