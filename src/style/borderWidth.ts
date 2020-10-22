// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const borderWidth = (
	theme: Theme
): Record<string, ViewStyle> => {
	const sizes = Object.keys(theme.borderWidth);

	const border = sizes
		.map((key) => ({
			[StyleUtils.id('border', key)]: {
				borderWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const borderT = sizes
		.map((key) => ({
			[StyleUtils.id('border-t', key)]: {
				borderTopWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const borderL = sizes
		.map((key) => ({
			[StyleUtils.id('border-l', key)]: {
				borderLeftWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const borderR = sizes
		.map((key) => ({
			[StyleUtils.id('border-r', key)]: {
				borderRightWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const borderB = sizes
		.map((key) => ({
			[StyleUtils.id('border-b', key)]: {
				borderBottomWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const borderS = sizes
		.map((key) => ({
			[StyleUtils.id('border-s', key)]: {
				borderStartWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const borderE = sizes
		.map((key) => ({
			[StyleUtils.id('border-e', key)]: {
				borderEndWidth: theme.borderWidth[key],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [
		border,
		borderT,
		borderL,
		borderR,
		borderB,
		borderS,
		borderE,
	].reduce(StyleUtils.merge, {});
};
