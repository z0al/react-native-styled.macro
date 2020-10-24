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
	],
});
