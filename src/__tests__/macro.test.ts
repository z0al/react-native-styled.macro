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
		import styled from '../../lib/macro'

		const Button = ()=> <View {...styled(['bg-white', 'text-xl'])} />
		`,
		`
		import styled from '../../lib/macro'

		styled(['web:-m-2'], {dark: false})
		`,
		`
		import styled from '../../lib/macro'

		console.log(styled(['-m-2', 'p-4']))
		`,
		`
		import styled from '../../lib/macro'

		console.log(styled([]))
		`,
	],
});
