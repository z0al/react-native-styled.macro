// Ours
import { layout } from './layout';
import { platform } from './platform';
import { merge } from '../utils/merge';

export const builtin = [layout(), platform()].reduce(merge);
