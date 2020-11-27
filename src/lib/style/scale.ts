// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Sizes = keyof Theme['scale'];
type ScaleStyle = Record<
	| StyleName<'scale', Sizes>
	| StyleName<'scale-x', Sizes>
	| StyleName<'scale-y', Sizes>,
	{
		transform: ViewStyle['transform'];
	}
>;

export const scale = (theme: Theme) => {
	const sizes = Object.keys(theme.scale);

	const x = sizes
		.map((key) => ({
			[id('scale-x', key)]: {
				transform: [
					{
						scaleX: theme.scale[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('scale-y', key)]: {
				transform: [
					{
						scaleY: theme.scale[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const xy = sizes
		.map((key) => ({
			[id('scale', key)]: {
				transform: [
					{
						scale: theme.scale[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y, xy].reduce(merge, {}) as ScaleStyle;
};
