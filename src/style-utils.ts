// Packages
import { Platform, PixelRatio } from 'react-native';

// Ours
import configs from './configs';

export const StyleUtils = {
	getColor(name: string) {
		return configs.theme.colors[name];
	},

	getOpacity(name: string) {
		return configs.theme.opacity[name];
	},

	rem: (value: number) =>
		Platform.select<number>({
			web: (`${value}rem` as unknown) as number,
			default: PixelRatio.getFontScale() * 16 * value,
		}),
};
