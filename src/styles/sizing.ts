// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';

const width = (theme: Theme) => {
	return Object.keys(theme.width)
		.map((key) => ({
			['w-' + key]: {
				width: theme.width[key],
			},
		}))
		.reduce(merge, {});
};

const minWidth = (theme: Theme) => {
	return Object.keys(theme.minWidth)
		.map((key) => ({
			['min-w-' + key]: {
				minWidth: theme.minWidth[key],
			},
		}))
		.reduce(merge, {});
};

const maxWidth = (theme: Theme) => {
	return Object.keys(theme.maxWidth)
		.map((key) => ({
			['max-w-' + key]: {
				maxWidth: theme.maxWidth[key],
			},
		}))
		.reduce(merge, {});
};

const height = (theme: Theme) => {
	return Object.keys(theme.height)
		.map((key) => ({
			['h-' + key]: {
				height: theme.height[key],
			},
		}))
		.reduce(merge, {});
};

const minHeight = (theme: Theme) => {
	return Object.keys(theme.minHeight)
		.map((key) => ({
			['min-h-' + key]: {
				minHeight: theme.minHeight[key],
			},
		}))
		.reduce(merge, {});
};

const maxHeight = (theme: Theme) => {
	return Object.keys(theme.maxHeight)
		.map((key) => ({
			['max-h-' + key]: {
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
