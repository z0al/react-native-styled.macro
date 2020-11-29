// Ours
import { TokenInfo } from '../types';
import { merge } from './merge';

/**
 * Merging two or more consecutive styles/props into one if they
 * belong to the same variant
 */
export const reduce = (TokenInfos: TokenInfo[]) =>
	TokenInfos.reduce((combined: TokenInfo[], next: TokenInfo) => {
		const current = combined.pop();

		// Flattening is not possible
		if (current && current.variant !== next.variant) {
			return [...combined, current, next];
		}

		next = {
			...current,
			...next,
			style: merge(current?.style, next.style),
		};

		return [...combined, next];
	}, []);
