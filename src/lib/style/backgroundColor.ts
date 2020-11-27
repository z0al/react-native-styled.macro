// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type BackgroundColorStyle = Record<
	StyleName<'bg', keyof Theme['backgroundColor']>,
	{ backgroundColor: string }
>;

export const backgroundColor = (theme: Theme) =>
	Object.keys(theme.backgroundColor)
		.map((key) => ({
			[id('bg', key)]: {
				backgroundColor: theme.backgroundColor[key] as string,
			},
		}))
		.reduce(merge, {}) as BackgroundColorStyle;
