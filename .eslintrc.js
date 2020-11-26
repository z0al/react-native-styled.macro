module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['@react-native-community', 'prettier'],
	env: {
		node: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				quoteProps: 'consistent',
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'es5',
				useTabs: true,
				printWidth: 72,
			},
		],
	},
};
