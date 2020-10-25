// Ours
import { layout } from './layout';
import { platform } from './platform';

export const builtin = {
	...layout(),
	...platform(),
};
