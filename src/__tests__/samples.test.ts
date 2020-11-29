// Packages
import * as path from 'path';
import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';
import { loadPackageJson } from 'json.macro';

const macroPath = path.join('..', '..', loadPackageJson().module);

pluginTester({
	plugin,
	pluginName: 'babel-plugin-macros',
	snapshot: true,
	babelOptions: {
		filename: __filename,
		parserOpts: { plugins: ['jsx'] },
	},
	tests: [
		`
		import React from 'react'
		import { View } from 'react-native'
		import styled from '${macroPath}'

		const Button = ()=> <View {...styled(['bg-white', 'text-xl'])} />
		`,
		`
		import styled from '${macroPath}'

		styled(['web:-m-2'], {dark: false})
		`,
		`
		import styled from '${macroPath}'

		console.log(styled(['-m-2', 'p-4']))
		`,
		`
		import styled from '${macroPath}'

		console.log(styled([]))
		`,
		`
		import { Text } from 'react-native'
		import styled from '${macroPath}';

		const Heading = ({ text }) => (
			<Text
				{...styled([
					'my-4',
					'text-2xl',
					'text-gray-900',
					'font-semibold',
					'letter-wide',
				])}
			>
				{text}
			</Text>
		);
		`,
		`
		import React from 'react';
		import { Text, Pressable, SafeAreaView } from 'react-native';

		import styled from '${macroPath}';

		export default function App() {
			const variants = useWindowVariant();

			return (
				<SafeAreaView {...styled(['flex-1', 'items-center'])}>
					<Pressable
						{...styled(
							[
								'mx-2',
								'px-4',
								'border',
								'rounded-lg',
								'border-indigo-600',
								'bg-indigo-600',
							],
							variants
						)}
					>
						<Text {...styled(['text-base', 'text-white'])}>Press me</Text>
					</Pressable>
				</SafeAreaView>
			);
		}
		`,
		`
		import styled from '${macroPath}';

		const bgWhite = 'bg-white'

	  const buttonStyle = [bgWhite, 'text-black']
		const inputStyle =  [bgWhite, 'text-black']

		console.log(styled(buttonStyle))
		console.log(styled(inputStyle))
		`,
		`
		import styled from '${macroPath}';

		console.log(styled(['bg-black', 'selectable']))
		`,
	],
});
