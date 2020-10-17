// Packages
import merge from 'lodash.merge';

// Ours
import { Theme } from '../types';
import { styleName } from './utils/styleName';

const opacity = (theme: Theme) => {
	return Object.keys(theme.opacity)
		.map((key) => ({
			[styleName('opacity', key)]: {
				opacity: theme.opacity[key],
			},
		}))
		.reduce(merge, {});
};

export default (theme: Theme) => ({
	...opacity(theme),
});
