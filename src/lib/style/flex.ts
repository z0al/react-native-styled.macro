// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type FlexStyle = Record<
	StyleName<'flex', keyof Theme['flex']>,
	{ flex: ViewStyle['flex'] }
>;

export const flex = (theme: Theme) =>
	Object.keys(theme.flex)
		.map((key) => {
			const value = theme.flex[key] || {};

			return {
				[id('flex', key)]: {
					...(typeof value === 'number' ? { flex: value } : value),
				},
			};
		})
		.reduce(merge, {}) as FlexStyle;
