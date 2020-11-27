// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type MinHeightStyle = Record<
	StyleName<'min-h', keyof Theme['minHeight']>,
	{ minHeight: any }
>;

export const minHeight = (theme: Theme) =>
	Object.keys(theme.minHeight)
		.map((key) => ({
			[id('min-h', key)]: {
				minHeight: theme.minHeight[key],
			},
		}))
		.reduce(merge, {}) as MinHeightStyle;
