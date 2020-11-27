// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Sizes = keyof Theme['translate'];
type TranslateStyle = Record<
	StyleName<'translate-x', Sizes> | StyleName<'translate-y', Sizes>,
	{
		transform: ViewStyle['transform'];
	}
>;

export const translate = (theme: Theme) => {
	const sizes = Object.keys(theme.translate);

	const x = sizes
		.map((key) => ({
			[id('translate-x', key)]: {
				transform: [
					{
						translateX: theme.translate[key] as number,
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('translate-y', key)]: {
				transform: [
					{
						translateY: theme.translate[key] as number,
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y].reduce(merge, {}) as TranslateStyle;
};
