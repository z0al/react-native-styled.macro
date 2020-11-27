// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type MinWidthStyle = Record<
	StyleName<'min-w', keyof Theme['minWidth']>,
	{ minWidth: any }
>;

export const minWidth = (theme: Theme) =>
	Object.keys(theme.minWidth)
		.map((key) => ({
			[id('min-w', key)]: {
				minWidth: theme.minWidth[key],
			},
		}))
		.reduce(merge, {}) as MinWidthStyle;
