// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type MaxWidthStyle = Record<
	StyleName<'max-w', keyof Theme['maxWidth']>,
	{ maxWidth: any }
>;

export const maxWidth = (theme: Theme) =>
	Object.keys(theme.maxWidth)
		.map((key) => ({
			[id('max-w', key)]: {
				maxWidth: theme.maxWidth[key],
			},
		}))
		.reduce(merge, {}) as MaxWidthStyle;
