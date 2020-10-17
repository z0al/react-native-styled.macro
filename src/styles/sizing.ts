// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';
import { styleName } from './utils/styleName';

export const width = (theme: Theme) => {
	return Object.keys(theme.width)
		.map((key) => ({
			[styleName('w', key)]: {
				width: theme.width[key],
			},
		}))
		.reduce(merge, {});
};

export const minWidth = (theme: Theme) => {
	return Object.keys(theme.minWidth)
		.map((key) => ({
			[styleName('min-w', key)]: {
				minWidth: theme.minWidth[key],
			},
		}))
		.reduce(merge, {});
};

export const maxWidth = (theme: Theme) => {
	return Object.keys(theme.maxWidth)
		.map((key) => ({
			[styleName('max-w', key)]: {
				maxWidth: theme.maxWidth[key],
			},
		}))
		.reduce(merge, {});
};

export const height = (theme: Theme) => {
	return Object.keys(theme.height)
		.map((key) => ({
			[styleName('h', key)]: {
				height: theme.height[key],
			},
		}))
		.reduce(merge, {});
};

export const minHeight = (theme: Theme) => {
	return Object.keys(theme.minHeight)
		.map((key) => ({
			[styleName('min-h', key)]: {
				minHeight: theme.minHeight[key],
			},
		}))
		.reduce(merge, {});
};

export const maxHeight = (theme: Theme) => {
	return Object.keys(theme.maxHeight)
		.map((key) => ({
			[styleName('max-h', key)]: {
				maxHeight: theme.maxHeight[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...width(theme),
	...minWidth(theme),
	...maxWidth(theme),
	...height(theme),
	...minHeight(theme),
	...maxHeight(theme),
});
