// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type FlexShrinkStyle = Record<
	StyleName<'flex-shrink', keyof Theme['flexShrink']>,
	{ flexShrink: number }
>;

export const flexShrink = (theme: Theme) =>
	Object.keys(theme.flexShrink)
		.map((key) => ({
			[id('flex-shrink', key)]: {
				flexShrink: theme.flexShrink[key],
			},
		}))
		.reduce(merge, {}) as FlexShrinkStyle;
