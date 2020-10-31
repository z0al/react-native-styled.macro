// Ours
import { Theme } from '../../types';
import { numberOfLines } from './numberOfLines';
import { selectable } from './selectable';

export default (theme: Theme): Record<string, any> => ({
	...numberOfLines(theme),
	...selectable(),
});
