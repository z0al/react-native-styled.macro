// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const margin = (theme: Theme): Record<string, FlexStyle> => {
	const sizes = Object.keys(theme.margin);

	const m = sizes
		.map((size) => ({
			[StyleUtils.id('m', size)]: {
				margin: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const mt = sizes
		.map((size) => ({
			[StyleUtils.id('mt', size)]: {
				marginTop: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const ml = sizes
		.map((size) => ({
			[StyleUtils.id('ml', size)]: {
				marginLeft: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const mr = sizes
		.map((size) => ({
			[StyleUtils.id('mr', size)]: {
				marginRight: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const mb = sizes
		.map((size) => ({
			[StyleUtils.id('mb', size)]: {
				marginBottom: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const ms = sizes
		.map((size) => ({
			[StyleUtils.id('ms', size)]: {
				marginStart: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const me = sizes
		.map((size) => ({
			[StyleUtils.id('me', size)]: {
				marginEnd: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const mx = sizes
		.map((size) => ({
			[StyleUtils.id('mx', size)]: {
				marginHorizontal: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const my = sizes
		.map((size) => ({
			[StyleUtils.id('my', size)]: {
				marginVertical: theme.margin[size],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [m, mt, ml, mr, mb, ms, me, mx, my].reduce(
		StyleUtils.merge,
		{}
	);
};
