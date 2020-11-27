// Packages
import { TextStyle } from 'react-native';

// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type FontWeightStyle = Record<
	StyleName<'font', keyof Theme['fontWeight']>,
	{ fontWeight: TextStyle['fontWeight'] }
>;

export const fontWeight = (theme: Theme) =>
	Object.keys(theme.fontWeight)
		.map((key) => ({
			[id('font', key)]: {
				fontWeight: theme.fontWeight[key],
			},
		}))
		.reduce(merge, {}) as FontWeightStyle;
