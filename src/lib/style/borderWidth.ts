// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Sizes = keyof Theme['borderWidth'];

type BorderWidthStyle = Record<
	| StyleName<'border', Sizes>
	| StyleName<'border-t', Sizes>
	| StyleName<'border-r', Sizes>
	| StyleName<'border-b', Sizes>
	| StyleName<'border-l', Sizes>
	| StyleName<'border-s', Sizes>
	| StyleName<'border-e', Sizes>,
	{
		borderWidth?: number;
		borderTopWidth?: number;
		borderLeftWidth?: number;
		borderRightWidth?: number;
		borderBottomWidth?: number;
		borderStartWidth?: number;
		borderEndWidth?: number;
	}
>;

export const borderWidth = (theme: Theme) => {
	const sizes = Object.keys(theme.borderWidth);

	const border = sizes
		.map((key) => ({
			[id('border', key)]: {
				borderWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderT = sizes
		.map((key) => ({
			[id('border-t', key)]: {
				borderTopWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderL = sizes
		.map((key) => ({
			[id('border-l', key)]: {
				borderLeftWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderR = sizes
		.map((key) => ({
			[id('border-r', key)]: {
				borderRightWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderB = sizes
		.map((key) => ({
			[id('border-b', key)]: {
				borderBottomWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderS = sizes
		.map((key) => ({
			[id('border-s', key)]: {
				borderStartWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderE = sizes
		.map((key) => ({
			[id('border-e', key)]: {
				borderEndWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	return [
		border,
		borderT,
		borderL,
		borderR,
		borderB,
		borderS,
		borderE,
	].reduce(merge, {}) as BorderWidthStyle;
};
