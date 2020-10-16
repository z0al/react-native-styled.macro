// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';

const styleName = (prefix: string, key: string) => {
	return key === 'default' ? prefix : prefix + '-' + key;
};

const flexDirection = () => ({
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

const flexWrap = () => {
	const baseStyles = {
		'flex-no-wrap': {
			flexWrap: 'nowrap',
		},
	};

	return ['wrap', 'wrap-reverse']
		.map((value) => ({
			['flex-' + value]: {
				flexWrap: value,
			},
		}))
		.reduce(merge, baseStyles);
};

const flex = (theme: Theme) => {
	return Object.keys(theme.flex)
		.map((key) => ({
			['flex-' + key]: {
				...theme.flex[key],
			},
		}))
		.reduce(merge, {});
};

const flexGrow = (theme: Theme) => {
	return Object.keys(theme.flexGrow)
		.map((key) => ({
			[styleName('flex-grow', key)]: {
				flexGrow: theme.flexGrow[key],
			},
		}))
		.reduce(merge, {});
};

const flexShrink = (theme: Theme) => {
	return Object.keys(theme.flexShrink)
		.map((key) => ({
			[styleName('flex-shrink', key)]: {
				flexShrink: theme.flexShrink[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...flex(theme),
	...flexWrap(),
	...flexDirection(),
	...flexGrow(theme),
	...flexShrink(theme),
});
