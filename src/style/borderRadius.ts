// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const borderRadius = (
	theme: Theme
): Record<string, ViewStyle> => {
	const sizes = Object.keys(theme.borderRadius);
	const rounded = sizes
		.map((key) => ({
			[StyleUtils.id('rounded', key)]: {
				borderRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedT = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-t', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedR = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-r', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedB = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-b', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedL = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-l', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedTS = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-ts', key)]: {
				borderTopStartRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedTE = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-te', key)]: {
				borderTopEndRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedTL = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-tl', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedTR = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-tr', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedBR = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-br', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const roundedBL = sizes
		.map((key) => ({
			[StyleUtils.id('rounded-bl', key)]: {
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

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
	].reduce(StyleUtils.merge, {});
};
