// Packages
import tw from 'tailwind-rn';

// Ours
import { Configuration, StyledVariants } from './types';
import { DEFAULT_KEY, formatTokens, getUniqueVariant } from './utils';

function getStyle(stylename: string) {
	return tw(stylename);
}

function getTokenStyle(token: string, sep: string) {
	const sepIndex = token.lastIndexOf(sep);

	const style = getStyle(token.slice(sepIndex + 1));
	const styleKey =
		sepIndex > 0
			? getUniqueVariant(token.slice(0, sepIndex), sep)
			: DEFAULT_KEY;

	return { styleKey, style };
}

/**
 * Resolve styles for given token(s) e.g. "dark:bg-white".
 */
export function createStyledVariants(
	tokens: string,
	config: Configuration
): StyledVariants {
	const { separator } = config;

	return formatTokens(tokens)
		.split(' ')
		.reduce(
			(stylesByKey: StyledVariants, token: string) => {
				// Style Key is either the DEFAULT_KEY or a variant e.g. "sm"
				const { styleKey, style } = getTokenStyle(token, separator);

				return {
					...stylesByKey,
					[styleKey]: [...(stylesByKey[styleKey] || []), style],
				};
			},
			{ default: [] }
		);
}
