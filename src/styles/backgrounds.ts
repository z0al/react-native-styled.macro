// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';
import { styleName } from './utils/styleName';

export const backgroundColor = (theme: Theme) => {
	return Object.keys(theme.backgroundColor)
		.map((key) => ({
			[styleName('bg', key)]: {
				backgroundColor: theme.backgroundColor[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...backgroundColor(theme),
});
