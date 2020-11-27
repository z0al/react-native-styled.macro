// Ours
import { Theme } from '../../theme';
import { selectable } from './selectable';
import { merge } from '../../utils/merge';
import { numberOfLines } from './numberOfLines';

export default (theme: Theme) =>
	[numberOfLines(theme), selectable()].reduce(merge);
