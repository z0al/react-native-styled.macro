// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type MaxHeightStyle = Record<
	StyleName<'max-h', keyof Theme['maxHeight']>,
	{ maxHeight: any }
>;

export const maxHeight = (theme: Theme) =>
	Object.keys(theme.maxHeight)
		.map((key) => ({
			[id('max-h', key)]: {
				maxHeight: theme.maxHeight[key],
			},
		}))
		.reduce(merge, {}) as MaxHeightStyle;
