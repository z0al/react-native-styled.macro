import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';

pluginTester({
	plugin,
	snapshot: true,
	babelOptions: { filename: __filename },
	tests: [
		`
		import styled from '../../lib/macro'

		const Button = ()=> {
			return styled(['bg-white', 'text-xl'])
		}
		`,
		`
		import styled from '../../lib/macro'

		styled(['web:-m-2'], {dark: false})
		`,
	],
});
