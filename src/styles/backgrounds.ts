// Ours
import { Theme } from '../types';
import { mergeStyles } from './utils/mergeStyles';
import { styleName } from './utils/styleName';

export const backgroundColor = (theme: Theme) => {
	return Object.keys(theme.backgroundColor)
		.map((key) => ({
			[styleName('bg', key)]: {
				backgroundColor: theme.backgroundColor[key],
			},
		}))
		.reduce(mergeStyles, {});
};

export default (theme: Theme) => ({
	...backgroundColor(theme),
});
