import React from 'react';
import { Alert, Text, Pressable } from 'react-native';
import {
	SafeAreaProvider,
	SafeAreaView,
} from 'react-native-safe-area-context';
import styled from 'react-native-styled.macro';
import { useWindowVariant } from 'react-native-styled.macro/lib';

import { useStyles } from './styles';

export default function App() {
	const variants = useWindowVariant();
	const styles = useStyles();

	function handlePress() {
		Alert.alert(
			'Button Pressed',
			'You pressed a button',
			[{ text: 'OK' }],
			{
				cancelable: false,
			}
		);
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView {...styled(['flex-1', 'items-center'])}>
				{/* Inline Styling */}
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
					onPress={handlePress}
				>
					<Text
						{...styled(['px-2', 'py-1', 'text-base', 'text-white'])}
					>
						Press me
					</Text>
				</Pressable>

				{/* Imported Styling */}
				<Pressable {...styles.button} onPress={handlePress}>
					<Text {...styles.buttonText}>Press me too</Text>
				</Pressable>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
