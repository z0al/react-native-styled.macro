// Ours
import { Theme } from '../../types';
import { id } from '../../utils/id';
import { merge } from '../../utils/merge';

export const numberOfLines = (theme: Theme) =>
	Object.keys(theme.numberOfLines)
		.map((key) => ({
			[id('lines', key)]: {
				numberOfLines: theme.numberOfLines[key],
			},
		}))
		.reduce(merge);
