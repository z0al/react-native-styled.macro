// Packages
import { Merge } from 'type-fest';

export function merge<S1, S2>(style1: S1, style2: S2): Merge<S1, S2> {
	return {
		...style1,
		...style2,
	};
}
