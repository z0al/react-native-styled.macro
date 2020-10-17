// Ours
import configs from './configs';

export const ThemeUtils = {
	getColor(name: string) {
		return configs.theme.colors[name];
	},

	getOpacity(name: string) {
		return configs.theme.opacity[name];
	},
};
