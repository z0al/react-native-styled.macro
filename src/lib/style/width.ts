// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type WidthStyle = Record<
	StyleName<'w', keyof Theme['width']>,
	{
		width: string;
	}
>;

export const width = (theme: Theme) =>
	Object.keys(theme.width)
		.map((key) => ({
			[id('w', key)]: {
				width: theme.width[key],
			},
		}))
		.reduce(merge, {}) as WidthStyle;
