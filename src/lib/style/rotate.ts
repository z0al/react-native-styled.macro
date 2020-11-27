// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../theme';
import { merge } from '../utils/merge';
import { id, StyleName } from '../utils/id';

type Sizes = keyof Theme['rotate'];
type RotateStyle = Record<
	| StyleName<'rotate', Sizes>
	| StyleName<'rotate-x', Sizes>
	| StyleName<'rotate-y', Sizes>
	| StyleName<'rotate-z', Sizes>,
	{
		transform: ViewStyle['transform'];
	}
>;

export const rotate = (theme: Theme) => {
	const sizes = Object.keys(theme.rotate);

	const x = sizes
		.map((key) => ({
			[id('rotate-x', key)]: {
				transform: [
					{
						rotateX: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const y = sizes
		.map((key) => ({
			[id('rotate-y', key)]: {
				transform: [
					{
						rotateY: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const z = sizes
		.map((key) => ({
			[id('rotate-z', key)]: {
				transform: [
					{
						rotateZ: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	const xy = sizes
		.map((key) => ({
			[id('rotate', key)]: {
				transform: [
					{
						rotate: theme.rotate[key],
					},
				],
			},
		}))
		.reduce(merge, {});

	return [x, y, z, xy].reduce(merge, {}) as RotateStyle;
};
