import { useMemo } from 'react';

import styled from 'react-native-styled.macro';
import { useWindowVariant } from 'react-native-styled.macro/lib';

export function useStyles() {
	const variants = useWindowVariant();

	const styles = useMemo(() => {
		return {
			button: {
				...styled(
					[
						'mx-2',
						'my-4',
						'border',
						'rounded-full',
						'border-teal-600',
						'bg-teal-600',
						'sm:bg-green-600',
						'md:bg-teal-600',
						'lg:bg-yellow-600',
						'xl:bg-orange-600',
					],
					variants
				),
			},
			buttonText: {
				...styled(
					['px-2', 'py-1', 'text-base', 'text-white'],
					variants
				),
			},
			container: {
				...styled(['flex-1', 'items-center'], variants),
			},
		};
	}, [variants]);

	return styles;
}
