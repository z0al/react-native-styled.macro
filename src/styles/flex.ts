// Packages
import { FlexStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const flexDirection = (): Record<string, FlexStyle> => ({
	'flex-row': {
		flexDirection: 'row',
	},
	'flex-row-reverse': {
		flexDirection: 'row-reverse',
	},
	'flex-col': {
		flexDirection: 'column',
	},
	'flex-col-reverse': {
		flexDirection: 'column-reverse',
	},
});

export const flexWrap = (): Record<string, FlexStyle> => ({
	'flex-no-wrap': {
		flexWrap: 'nowrap',
	},
	'flex-wrap': {
		flexWrap: 'wrap',
	},
	'flex-wrap-reverse': {
		flexWrap: 'wrap-reverse',
	},
});

export const flex = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flex)
		.map((key) => {
			const value = theme.flex[key] || {};

			return {
				[styleName('flex', key)]: {
					...(typeof value === 'number' ? { flex: value } : value),
				},
			};
		})
		.reduce(mergeStyles, {});
};

export const flexGrow = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flexGrow)
		.map((key) => ({
			[styleName('flex-grow', key)]: {
				flexGrow: theme.flexGrow[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const flexShrink = (theme: Theme): Record<string, FlexStyle> => {
	return Object.keys(theme.flexShrink)
		.map((key) => ({
			[styleName('flex-shrink', key)]: {
				flexShrink: theme.flexShrink[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const justifyContent = () => {
	const center = {
		'justify-center': {
			justifyContent: 'center',
		},
	};

	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('justify', value)]: {
				justifyContent: 'flex-' + value,
			},
		}))
		.reduce(mergeStyles, {});

	const space = ['between', 'around', 'evenly']
		.map((value) => ({
			[styleName('justify', value)]: {
				justifyContent: 'space-' + value,
			},
		}))
		.reduce(mergeStyles, {});

	return [center, startEnd, space].reduce(mergeStyles, {});
};

export const alignContent = () => {
	const centerStretch = ['stretch', 'center']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: value,
			},
		}))
		.reduce(mergeStyles, {});

	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: 'flex-' + value,
			},
		}))
		.reduce(mergeStyles, {});

	const space = ['between', 'around']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: 'space-' + value,
			},
		}))
		.reduce(mergeStyles, {});

	return [centerStretch, startEnd, space].reduce(mergeStyles, {});
};

export const alignItems = () => {
	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('items', value)]: {
				alignItems: 'flex-' + value,
			},
		}))
		.reduce(mergeStyles, {});

	return ['baseline', 'stretch', 'center']
		.map((value) => ({
			[styleName('items', value)]: {
				alignItems: value,
			},
		}))
		.reduce(mergeStyles, startEnd);
};

export const alignSelf = () => {
	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('self', value)]: {
				alignSelf: 'flex-' + value,
			},
		}))
		.reduce(mergeStyles, {});

	return ['auto', 'stretch', 'center']
		.map((value) => ({
			[styleName('self', value)]: {
				alignSelf: value,
			},
		}))
		.reduce(mergeStyles, startEnd);
};

export default (theme: Theme) => ({
	...flex(theme),
	...flexWrap(),
	...flexDirection(),
	...flexGrow(theme),
	...flexShrink(theme),
	...justifyContent(),
	...alignContent(),
	...alignItems(),
	...alignSelf(),
});
