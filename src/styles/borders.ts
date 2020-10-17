// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';
import { styleName } from './utils/styleName';

export const borderRadius = (theme: Theme) => {
	const sizes = Object.keys(theme.borderRadius);
	const rounded = sizes
		.map((key) => ({
			[styleName('rounded', key)]: {
				borderRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedT = sizes
		.map((key) => ({
			[styleName('rounded-t', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedR = sizes
		.map((key) => ({
			[styleName('rounded-r', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedB = sizes
		.map((key) => ({
			[styleName('rounded-b', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedL = sizes
		.map((key) => ({
			[styleName('rounded-l', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTS = sizes
		.map((key) => ({
			[styleName('rounded-ts', key)]: {
				borderTopStartRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTE = sizes
		.map((key) => ({
			[styleName('rounded-te', key)]: {
				borderTopEndRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTL = sizes
		.map((key) => ({
			[styleName('rounded-tl', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTR = sizes
		.map((key) => ({
			[styleName('rounded-tr', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedBR = sizes
		.map((key) => ({
			[styleName('rounded-br', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedBL = sizes
		.map((key) => ({
			[styleName('rounded-bl', key)]: {
				borderBottomLeftRadius: theme.borderRadius[key],
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
	].reduce(merge, {});
};

export const borderWidth = (theme: Theme) => {
	const sizes = Object.keys(theme.borderWidth);

	const border = sizes
		.map((key) => ({
			[styleName('border', key)]: {
				borderWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderT = sizes
		.map((key) => ({
			[styleName('border-t', key)]: {
				borderTopWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderL = sizes
		.map((key) => ({
			[styleName('border-l', key)]: {
				borderLeftWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderR = sizes
		.map((key) => ({
			[styleName('border-r', key)]: {
				borderRightWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderB = sizes
		.map((key) => ({
			[styleName('border-b', key)]: {
				borderBottomWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderS = sizes
		.map((key) => ({
			[styleName('border-s', key)]: {
				borderStartWidth: theme.borderWidth[key],
			},
		}))
		.reduce(merge, {});

	const borderE = sizes
		.map((key) => ({
			[styleName('border-e', key)]: {
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
	].reduce(merge, {});
};

export const borderStyle = () => {
	return ['solid', 'dotted', 'dashed']
		.map((value) => ({
			[styleName('border', value)]: {
				borderStyle: value,
			},
		}))
		.reduce(merge, {});
};

export const borderColor = (theme: Theme) => {
	return Object.keys(theme.borderColor)
		.map((key) => ({
			[styleName('border', key)]: {
				borderColor: theme.borderColor[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...borderStyle(),
	...borderRadius(theme),
	...borderWidth(theme),
	...borderColor(theme),
});
