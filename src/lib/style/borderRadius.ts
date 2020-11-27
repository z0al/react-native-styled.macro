// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Sizes = keyof Theme['borderRadius'];

type BorderRadiusStyle = Record<
	| StyleName<'rounded', Sizes>
	| StyleName<'rounded-t', Sizes>
	| StyleName<'rounded-r', Sizes>
	| StyleName<'rounded-b', Sizes>
	| StyleName<'rounded-l', Sizes>
	| StyleName<'rounded-ts', Sizes>
	| StyleName<'rounded-te', Sizes>
	| StyleName<'rounded-tl', Sizes>
	| StyleName<'rounded-tr', Sizes>
	| StyleName<'rounded-br', Sizes>
	| StyleName<'rounded-bl', Sizes>,
	{
		borderRadius?: number;
		borderTopLeftRadius?: number;
		borderTopRightRadius?: number;
		borderBottomRightRadius?: number;
		borderBottomLeftRadius?: number;
		borderTopStartRadius?: number;
		borderTopEndRadius?: number;
	}
>;

export const borderRadius = (theme: Theme) => {
	const sizes = Object.keys(theme.borderRadius);

	const rounded = sizes
		.map((key) => ({
			[id('rounded', key)]: {
				borderRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedT = sizes
		.map((key) => ({
			[id('rounded-t', key)]: {
				borderTopLeftRadius: theme.borderRadius[key] as number,
				borderTopRightRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedR = sizes
		.map((key) => ({
			[id('rounded-r', key)]: {
				borderTopRightRadius: theme.borderRadius[key] as number,
				borderBottomRightRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedB = sizes
		.map((key) => ({
			[id('rounded-b', key)]: {
				borderBottomRightRadius: theme.borderRadius[key] as number,
				borderBottomLeftRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedL = sizes
		.map((key) => ({
			[id('rounded-l', key)]: {
				borderTopLeftRadius: theme.borderRadius[key] as number,
				borderBottomLeftRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedTS = sizes
		.map((key) => ({
			[id('rounded-ts', key)]: {
				borderTopStartRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedTE = sizes
		.map((key) => ({
			[id('rounded-te', key)]: {
				borderTopEndRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedTL = sizes
		.map((key) => ({
			[id('rounded-tl', key)]: {
				borderTopLeftRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedTR = sizes
		.map((key) => ({
			[id('rounded-tr', key)]: {
				borderTopRightRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedBR = sizes
		.map((key) => ({
			[id('rounded-br', key)]: {
				borderBottomRightRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	const roundedBL = sizes
		.map((key) => ({
			[id('rounded-bl', key)]: {
				borderBottomLeftRadius: theme.borderRadius[key] as number,
			},
		}))
		.reduce(merge, {});

	return [
		rounded,
		roundedT,
		roundedB,
		roundedL,
		roundedR,
		roundedTL,
		roundedTR,
		roundedBL,
		roundedBR,
		roundedTS,
		roundedTE,
	].reduce(merge, {}) as BorderRadiusStyle;
};
