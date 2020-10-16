// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';

const backgroundColor = (theme: Theme) => {
	return Object.keys(theme.backgroundColor)
		.map((key) => ({
			['bg-' + key]: {
				backgroundColor: theme.backgroundColor[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...backgroundColor(theme),
});
