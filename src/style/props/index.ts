// Ours
import { Theme } from '../../types';
import { numberOfLines } from './numberOfLines';

export default (theme: Theme) => ({
	...numberOfLines(theme),
});
