import React from 'react';
import { Text, Pressable } from 'react-native';
import {
	SafeAreaProvider,
	SafeAreaView,
} from 'react-native-safe-area-context';

import styled from 'react-native-styled.macro';
import { useWindowVariant } from 'react-native-styled.macro/lib';

export default function App() {
	const variants = useWindowVariant();

	return (
		<SafeAreaProvider>
			<SafeAreaView {...styled(['flex-1', 'items-center'])}>
				<Pressable
					{...styled(
						[
							// 'mx-2',
							// 'px-4',
							'border',
							// 'rounded-lg',
							'border-indigo-600',
							'bg-black',
							'md:bg-indigo-600',
							'sm:bg-green-600',
							'lg:bg-yellow-600',
						],
						variants
					)}
				>
					<Text {...styled(['text-base', 'text-white'])}>Press me</Text>
				</Pressable>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
