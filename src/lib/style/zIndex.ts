// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type ZIndexStyle = Record<
	StyleName<'z', keyof Theme['zIndex']>,
	{
		zIndex: string;
	}
>;

export const zIndex = (theme: Theme) =>
	Object.keys(theme.zIndex)
		.map((key) => ({
			[id('z', key)]: {
				zIndex: theme.zIndex[key],
			},
		}))
		.reduce(merge, {}) as ZIndexStyle;
