// Packages
import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';

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
		import styled from '../../build/macro'

		const Button = ()=> <View {...styled(['bg-white', 'text-xl'])} />
		`,
		`
		import styled from '../../build/macro'

		styled(['web:-m-2'], {dark: false})
		`,
		`
		import styled from '../../build/macro'

		console.log(styled(['-m-2', 'p-4']))
		`,
		`
		import styled from '../../build/macro'

		console.log(styled([]))
		`,
		`
		import { Text } from 'react-native'
		import styled from '../../build/macro';

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
	],
});
