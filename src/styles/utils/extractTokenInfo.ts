// Ours
import { DEFAULT_VARIANT } from './defaultVariant';

export function extractTokenInfo(token: string, separator: string) {
	const sepIndex = token.lastIndexOf(separator);

	const styleName = token.slice(sepIndex + 1);
	const variant =
		sepIndex > 0 ? token.slice(0, sepIndex) : DEFAULT_VARIANT;

	return { styleName, variant };
}
