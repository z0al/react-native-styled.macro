// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type LetterSpacingStyle = Record<
	StyleName<'letter', keyof Theme['letterSpacing']>,
	{
		letterSpacing: number;
	}
>;

export const letterSpacing = (theme: Theme) =>
	Object.keys(theme.letterSpacing)
		.map((key) => ({
			[id('letter', key)]: {
				letterSpacing: theme.letterSpacing[key],
			},
		}))
		.reduce(merge, {}) as LetterSpacingStyle;
