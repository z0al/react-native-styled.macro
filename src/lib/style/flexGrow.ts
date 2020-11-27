// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type FlexGrowStyle = Record<
	StyleName<'flex-grow', keyof Theme['flexGrow']>,
	{ flexGrow: number }
>;

export const flexGrow = (theme: Theme) =>
	Object.keys(theme.flexGrow)
		.map((key) => ({
			[id('flex-grow', key)]: {
				flexGrow: theme.flexGrow[key],
			},
		}))
		.reduce(merge, {}) as FlexGrowStyle;
