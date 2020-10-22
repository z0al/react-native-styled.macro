// Packages
import { StyleSheet } from 'react-native';

// Ours
import { VariantStyle } from '../types';

/**
 * Merging two or more consecutive styles/props into one if they
 * belong to the same variant
 */
export const reduce = (variantStyles: VariantStyle[]) =>
	variantStyles.reduce(
		(combined: VariantStyle[], next: VariantStyle) => {
			const current = combined.pop();

			// Flattening is not possible
			if (current && current.variant !== next.variant) {
				return [...combined, current, next];
			}

			next = {
				...current,
				...next,
				style: StyleSheet.flatten([current?.style, next.style]),
			};

			return [...combined, next];
		},
		[]
	);
