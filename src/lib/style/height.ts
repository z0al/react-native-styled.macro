// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type HeightStyle = Record<
	StyleName<'h', keyof Theme['height']>,
	{
		height: string;
	}
>;

export const height = (theme: Theme) =>
	Object.keys(theme.height)
		.map((key) => ({
			[id('h', key)]: {
				height: theme.height[key],
			},
		}))
		.reduce(merge, {}) as HeightStyle;
