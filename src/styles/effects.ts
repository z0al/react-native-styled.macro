// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const opacity = (theme: Theme) => {
	return Object.keys(theme.opacity)
		.map((key) => ({
			[styleName('opacity', key)]: {
				opacity: theme.opacity[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export default (theme: Theme) => ({
	...opacity(theme),
});
