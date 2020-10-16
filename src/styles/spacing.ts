// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';

const padding = (theme: Theme) => {
	const sizes = Object.keys(theme.padding);

	const p = sizes
		.map((size) => ({
			['p-' + size]: {
				padding: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pt = sizes
		.map((size) => ({
			['pt-' + size]: {
				paddingTop: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pl = sizes
		.map((size) => ({
			['pl-' + size]: {
				paddingLeft: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pr = sizes
		.map((size) => ({
			['pr-' + size]: {
				paddingRight: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pb = sizes
		.map((size) => ({
			['pb-' + size]: {
				paddingBottom: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const ps = sizes
		.map((size) => ({
			['ps-' + size]: {
				paddingStart: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const pe = sizes
		.map((size) => ({
			['pe-' + size]: {
				paddingEnd: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const px = sizes
		.map((size) => ({
			['px-' + size]: {
				paddingHorizontal: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	const py = sizes
		.map((size) => ({
			['py-' + size]: {
				paddingVertical: theme.padding[size],
			},
		}))
		.reduce(merge, {});

	return [p, pt, pl, pr, pb, ps, pe, px, py].reduce(merge, {});
};

const margin = (theme: Theme) => {
	const sizes = Object.keys(theme.margin);

	const styleName = (prefix: string, size: string) => {
		return size.startsWith('-')
			? '-' + prefix + size
			: prefix + '-' + size;
	};

	const m = sizes
		.map((size) => ({
			[styleName('m', size)]: {
				margin: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mt = sizes
		.map((size) => ({
			[styleName('mt', size)]: {
				marginTop: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const ml = sizes
		.map((size) => ({
			[styleName('ml', size)]: {
				marginLeft: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mr = sizes
		.map((size) => ({
			[styleName('mr', size)]: {
				marginRight: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mb = sizes
		.map((size) => ({
			[styleName('mb', size)]: {
				marginBottom: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const ms = sizes
		.map((size) => ({
			[styleName('ms', size)]: {
				marginStart: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const me = sizes
		.map((size) => ({
			[styleName('me', size)]: {
				marginEnd: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const mx = sizes
		.map((size) => ({
			[styleName('mx', size)]: {
				marginHorizontal: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	const my = sizes
		.map((size) => ({
			[styleName('my', size)]: {
				marginVertical: theme.margin[size],
			},
		}))
		.reduce(merge, {});

	return [m, mt, ml, mr, mb, ms, me, mx, my].reduce(merge, {});
};

export default (theme: Theme) => ({
	...padding(theme),
	...margin(theme),
});
