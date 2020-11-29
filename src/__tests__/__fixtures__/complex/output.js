import { rem as _rem3 } from 'react-native-styled.macro/build/module/lib/utils/rem';
import { rem as _rem2 } from 'react-native-styled.macro/build/module/lib/utils/rem';
import { rem as _rem } from 'react-native-styled.macro/build/module/lib/utils/rem';
import { StyleSheet as _StyleSheet } from 'react-native';
import { select as _select } from 'react-native-styled.macro/build/module/lib/utils/select';

const _styles = _StyleSheet.create({
	_default: {
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: '0%',
		alignItems: 'center',
	},
	_default2: {
		marginHorizontal: _rem(0.5),
		borderWidth: 1,
		borderRadius: _rem2(0.5),
		borderColor: '#5a67d8',
		backgroundColor: '#5a67d8',
	},
	_sm: {
		backgroundColor: '#38a169',
	},
	_md: {
		backgroundColor: '#319795',
	},
	_lg: {
		backgroundColor: '#d69e2e',
	},
	_xl: {
		backgroundColor: '#dd6b20',
	},
	_default3: {
		fontSize: _rem3(1),
		color: 'white',
	},
});

import React from 'react';
import { Text, Pressable, SafeAreaView } from 'react-native';
import { useWindowVariant } from 'react-native-styled.macro/lib';
export default function App() {
	const variants = useWindowVariant();
	return (
		<SafeAreaView
			{...{
				style: [_styles._default],
			}}
		>
			<Pressable
				{..._select(
					[
						{
							variant: 'default',
							style: _styles._default2,
						},
						{
							variant: 'sm',
							style: _styles._sm,
						},
						{
							variant: 'md',
							style: _styles._md,
						},
						{
							variant: 'lg',
							style: _styles._lg,
						},
						{
							variant: 'xl',
							style: _styles._xl,
						},
					],
					variants
				)}
			>
				<Text
					{...{
						style: [_styles._default3],
					}}
				>
					Press me
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}
