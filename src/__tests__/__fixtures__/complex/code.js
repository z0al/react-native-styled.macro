import React from 'react';
import styled from '../../../../build/module/macro';
import { Text, Pressable, SafeAreaView } from 'react-native';
import { useWindowVariant } from 'react-native-styled.macro/lib';

export default function App() {
	const variants = useWindowVariant();

	return (
		<SafeAreaView {...styled(['flex-1', 'items-center'])}>
			<Pressable
				{...styled(
					[
						'mx-2',
						'border',
						'rounded-lg',
						'border-indigo-600',
						'bg-indigo-600',
						'sm:bg-green-600',
						'md:bg-teal-600',
						'lg:bg-yellow-600',
						'xl:bg-orange-600',
					],
					variants
				)}
			>
				<Text {...styled(['text-base', 'text-white'])}>Press me</Text>
			</Pressable>
		</SafeAreaView>
	);
}
