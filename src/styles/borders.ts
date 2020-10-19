// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const borderRadius = (theme: Theme) => {
	const sizes = Object.keys(theme.borderRadius);
	const rounded = sizes
		.map((key) => ({
			[styleName('rounded', key)]: {
				borderRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedT = sizes
		.map((key) => ({
			[styleName('rounded-t', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedR = sizes
		.map((key) => ({
			[styleName('rounded-r', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedB = sizes
		.map((key) => ({
			[styleName('rounded-b', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedL = sizes
		.map((key) => ({
			[styleName('rounded-l', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedTS = sizes
		.map((key) => ({
			[styleName('rounded-ts', key)]: {
				borderTopStartRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedTE = sizes
		.map((key) => ({
			[styleName('rounded-te', key)]: {
				borderTopEndRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedTL = sizes
		.map((key) => ({
			[styleName('rounded-tl', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedTR = sizes
		.map((key) => ({
			[styleName('rounded-tr', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedBR = sizes
		.map((key) => ({
			[styleName('rounded-br', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

	const roundedBL = sizes
		.map((key) => ({
			[styleName('rounded-bl', key)]: {
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(mergeStyles, {});

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
	].reduce(mergeStyles, {});
};

export const borderWidth = (theme: Theme) => {
	const sizes = Object.keys(theme.borderWidth);

	const border = sizes
		.map((key) => ({
			[styleName('border', key)]: {
				borderWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	const borderT = sizes
		.map((key) => ({
			[styleName('border-t', key)]: {
				borderTopWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	const borderL = sizes
		.map((key) => ({
			[styleName('border-l', key)]: {
				borderLeftWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	const borderR = sizes
		.map((key) => ({
			[styleName('border-r', key)]: {
				borderRightWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	const borderB = sizes
		.map((key) => ({
			[styleName('border-b', key)]: {
				borderBottomWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	const borderS = sizes
		.map((key) => ({
			[styleName('border-s', key)]: {
				borderStartWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	const borderE = sizes
		.map((key) => ({
			[styleName('border-e', key)]: {
				borderEndWidth: theme.borderWidth[key],
			},
		}))
		.reduce(mergeStyles, {});

	return [
		border,
		borderT,
		borderL,
		borderR,
		borderB,
		borderS,
		borderE,
	].reduce(mergeStyles, {});
};

export const borderStyle = () => {
	return ['solid', 'dotted', 'dashed']
		.map((value) => ({
			[styleName('border', value)]: {
				borderStyle: value,
			},
		}))
		.reduce(mergeStyles, {});
};

export const borderColor = (theme: Theme) => {
	return Object.keys(theme.borderColor)
		.map((key) => ({
			[styleName('border', key)]: {
				borderColor: theme.borderColor[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export default (theme: Theme) => ({
	...borderStyle(),
	...borderRadius(theme),
	...borderWidth(theme),
	...borderColor(theme),
});
