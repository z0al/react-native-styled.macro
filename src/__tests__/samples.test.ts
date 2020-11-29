// Packages
import * as path from 'path';
import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';

pluginTester({
	plugin,
	pluginName: 'babel-plugin-macros',
	snapshot: true,
	fixtures: path.join(__dirname, '__fixtures__'),
	babelOptions: {
		filename: __filename,
		parserOpts: { plugins: ['jsx'] },
	},
});
