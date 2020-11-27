// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type BorderColorStyle = Record<
	StyleName<'border', keyof Theme['borderColor']>,
	{ borderColor: string }
>;

export const borderColor = (theme: Theme) =>
	Object.keys(theme.borderColor)
		.map((key) => ({
			[id('border', key)]: {
				borderColor: theme.borderColor[key] as string,
			},
		}))
		.reduce(merge, {}) as BorderColorStyle;
