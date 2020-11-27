// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Sizes = keyof Theme['skew'];
type SkewStyle = Record<
	StyleName<'skew-x', Sizes> | StyleName<'skew-y', Sizes>,
	{
		transform: ViewStyle['transform'];
	}
>;

export const skew = (theme: Theme) => {
	const sizes = Object.keys(theme.skew);

	const x = sizes
		.map((key) => ({
			[id('skew-x', key)]: {
				transform: [
					{
						skewX: theme.skew[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('skew-y', key)]: {
				transform: [
					{
						skewY: theme.skew[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y].reduce(merge, {}) as SkewStyle;
};
