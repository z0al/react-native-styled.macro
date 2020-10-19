// Ours
import { isDefaultVariant } from './defaultVariant';
import { extractTokenInfo } from './extractTokenInfo';

/**
 * Transform given `tokens` string to a list of tokens. The list of
 * tokens is ordered such that default variant styles always applied
 * first.
 */
export function getOrderedTokens(tokens: string) {
	const getTokens = (tokens: string) => {
		return tokens.trim().replace(/\s+/g, ' ').split(' ');
	};

	const compareByVariant = (a: string, b: string) => {
		const isDefaultA = isDefaultVariant(extractTokenInfo(a).variant);
		const isDefaultB = isDefaultVariant(extractTokenInfo(b).variant);

		return isDefaultA && !isDefaultB
			? -1 // A comes first
			: !isDefaultA && isDefaultB
			? 1 // B comes first
			: 0; // Keep the same order
	};

	return getTokens(tokens).sort(compareByVariant);
}
