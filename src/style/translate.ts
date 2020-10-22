// Packages
import { TransformsStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { StyleUtils } from './utils';

export const translate = (
	theme: Theme
): Record<string, TransformsStyle> => {
	const sizes = Object.keys(theme.translate);

	const x = sizes
		.map((key) => ({
			[StyleUtils.id('translate-x', key)]: {
				transform: [
					{
						translateX: theme.translate[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	const y = sizes
		.map((key) => ({
			[StyleUtils.id('translate-y', key)]: {
				transform: [
					{
						translateY: theme.translate[key],
					},
				],
			},
		}))
		.reduce(StyleUtils.merge, {});

	return [x, y].reduce(StyleUtils.merge, {});
};
