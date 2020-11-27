// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type TextColorStyle = Record<
	StyleName<'text', keyof Theme['textColor']>,
	{
		color: string;
	}
>;

export const textColor = (theme: Theme) =>
	Object.keys(theme.textColor)
		.map((key) => ({
			[id('text', key)]: {
				color: theme.textColor[key] as string,
			},
		}))
		.reduce(merge, {}) as TextColorStyle;
