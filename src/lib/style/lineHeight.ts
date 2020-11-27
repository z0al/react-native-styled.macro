// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type LineHeightStyle = Record<
	StyleName<'line-h', keyof Theme['lineHeight']>,
	{ lineHeight: number }
>;

export const lineHeight = (theme: Theme) =>
	Object.keys(theme.lineHeight)
		.map((key) => ({
			[id('line-h', key)]: {
				lineHeight: theme.lineHeight[key] as number,
			},
		}))
		.reduce(merge, {}) as LineHeightStyle;
