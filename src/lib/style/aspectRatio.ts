// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type AspectRatioStyle = Record<
	StyleName<'aspect', keyof Theme['aspectRatio']>,
	{
		aspectRatio: number;
	}
>;

export const aspectRatio = (theme: Theme) =>
	Object.keys(theme.aspectRatio)
		.map((key) => ({
			[id('aspect', key)]: {
				aspectRatio: theme.aspectRatio[key],
			},
		}))
		.reduce(merge, {}) as AspectRatioStyle;
