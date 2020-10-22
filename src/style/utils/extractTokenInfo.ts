// Ours
import { DEFAULT_VARIANT } from './defaultVariant';

export function extractTokenInfo(token: string) {
	const sepIndex = token.lastIndexOf(':');

	const styleName = token.slice(sepIndex + 1);
	const variant =
		sepIndex > 0 ? token.slice(0, sepIndex) : DEFAULT_VARIANT;

	return { styleName, variant };
}
