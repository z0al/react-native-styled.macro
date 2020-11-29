// Ours
import { layout } from './layout';
import { platform } from './platform';
import { merge } from '../utils/merge';

export const builtinVariants = [layout(), platform()].reduce(merge);
