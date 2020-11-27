// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type OpacityStyle = Record<
	StyleName<'opacity', keyof Theme['opacity']>,
	{ opacity: number }
>;

export const opacity = (theme: Theme) =>
	Object.keys(theme.opacity)
		.map((key) => ({
			[id('opacity', key)]: {
				opacity: theme.opacity[key],
			},
		}))
		.reduce(merge, {}) as OpacityStyle;
