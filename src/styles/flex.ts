// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';
import { styleName } from './utils/styleName';

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
			[styleName('flex', value)]: {
				flexWrap: value,
			},
		}))
		.reduce(merge, baseStyles);
};

const flex = (theme: Theme) => {
	return Object.keys(theme.flex)
		.map((key) => ({
			[styleName('flex', key)]: {
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

const justifyContent = () => {
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
		.reduce(merge, {});

	const space = ['between', 'around', 'evenly']
		.map((value) => ({
			[styleName('justify', value)]: {
				justifyContent: 'space-' + value,
			},
		}))
		.reduce(merge, {});

	return [center, startEnd, space].reduce(merge, {});
};

const alignContent = () => {
	const centerStretch = ['stretch', 'center']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: value,
			},
		}))
		.reduce(merge, {});

	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	const space = ['between', 'around']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: 'space-' + value,
			},
		}))
		.reduce(merge, {});

	return [centerStretch, startEnd, space].reduce(merge, {});
};

const alignItems = () => {
	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('items', value)]: {
				alignItems: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	return ['baseline', 'stretch', 'center']
		.map((value) => ({
			[styleName('items', value)]: {
				alignItems: value,
			},
		}))
		.reduce(merge, startEnd);
};

const alignSelf = () => {
	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('self', value)]: {
				alignSelf: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	return ['auto', 'stretch', 'center']
		.map((value) => ({
			[styleName('self', value)]: {
				alignSelf: value,
			},
		}))
		.reduce(merge, startEnd);
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
