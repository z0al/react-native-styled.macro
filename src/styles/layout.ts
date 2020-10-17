// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';
import { styleName } from './utils/styleName';

const container = (theme: Theme) => {
	const baseStyle: Record<string, any> = {
		container: {
			width: theme.width.full,
		},
	};

	return Object.keys(theme.screens)
		.map((screen) => ({
			[styleName('container', screen)]: {
				width: theme.width.full,
				maxWidth: theme.screens[screen],
			},
		}))
		.reduce(merge, baseStyle);
};

const display = () => ({
	flex: {
		display: 'flex',
	},
	hidden: {
		display: 'none',
	},
});

const overflow = () => {
	return ['hidden', 'scroll', 'visible']
		.map((value) => ({
			[styleName('overflow', value)]: {
				overflow: value,
			},
		}))
		.reduce(merge, {});
};

const zIndex = (theme: Theme) => {
	return ['0', '10', '20', '30', '40', '50']
		.map((key) => ({
			[styleName('z', key)]: {
				zIndex: theme.zIndex[key],
			},
		}))
		.reduce(merge, {});
};

const position = () => ({
	absolute: { position: 'absolute' },
	relative: { position: 'relative' },
});

const topRightBottomLeft = () => ({
	'inset-0': { top: 0, right: 0, bottom: 0, left: 0 },
	'inset-y-0': { top: 0, bottom: 0 },
	'inset-x-0': { right: 0, left: 0 },
	'top-0': { top: 0 },
	'right-0': { right: 0 },
	'bottom-0': { bottom: 0 },
	'left-0': { left: 0 },
});

export default (theme: Theme) => ({
	...container(theme),
	...display(),
	...overflow(),
	...position(),
	...topRightBottomLeft(),
	...zIndex(theme),
});
