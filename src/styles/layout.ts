// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const container = (theme: Theme) => {
	return {
		container: {
			width: theme.width.full,
		},
	};
};

export const display = () => ({
	flex: {
		display: 'flex',
	},
	hidden: {
		display: 'none',
	},
});

export const overflow = () => {
	return ['hidden', 'scroll', 'visible']
		.map((value) => ({
			[styleName('overflow', value)]: {
				overflow: value,
			},
		}))
		.reduce(mergeStyles, {});
};

export const zIndex = (theme: Theme) => {
	return ['0', '10', '20', '30', '40', '50']
		.map((key) => ({
			[styleName('z', key)]: {
				zIndex: theme.zIndex[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export const position = () => ({
	absolute: { position: 'absolute' },
	relative: { position: 'relative' },
});

export const topRightBottomLeft = () => ({
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
