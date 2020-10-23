// Packages
import { Platform, PixelRatio } from 'react-native';

export const rem = (value: number) =>
	Platform.select<number>({
		// Force TS to think it's a number to avoid conflicts with RN
		// types later.
		web: (`${value}rem` as unknown) as number,
		default: PixelRatio.getFontScale() * 16 * value,
	});
