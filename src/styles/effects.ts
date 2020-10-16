// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';

const opacity = (theme: Theme) => {
	return Object.keys(theme.opacity)
		.map((key) => ({
			['opacity-' + key]: {
				opacity: theme.opacity[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...opacity(theme),
});
