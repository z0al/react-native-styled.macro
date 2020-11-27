// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type FontSizeStyle = Record<
	StyleName<'text', keyof Theme['fontSize']>,
	{ fontSize: number }
>;

export const fontSize = (theme: Theme) =>
	Object.keys(theme.fontSize)
		.map((key) => ({
			[id('text', key)]: {
				fontSize: theme.fontSize[key],
			},
		}))
		.reduce(merge, {}) as FontSizeStyle;
