// Ours
import { Theme } from '../../theme';
import { merge } from '../../utils/merge';
import { id, StyleName } from '../../utils/id';

type NumberOfLinesStyle = Record<
	StyleName<'lines', keyof Theme['numberOfLines']>,
	{
		numberOfLines: number;
	}
>;

export const numberOfLines = (theme: Theme) =>
	Object.keys(theme.numberOfLines)
		.map((key) => ({
			[id('lines', key)]: {
				numberOfLines: theme.numberOfLines[key],
			},
		}))
		.reduce(merge) as NumberOfLinesStyle;
