// Ours
import * as utils from '../utils';

test('formatTokens', () => {
	const Tests = [
		{
			input: 'bg-white',
			expected: 'bg-white',
		},
		{
			input: '    sm:bg-white  ',
			expected: 'sm:bg-white',
		},
		{
			input: 'sm:bg-white   \t  dark:sm:bg-black ',
			expected: 'sm:bg-white dark:sm:bg-black',
		},
	];

	Tests.forEach((t) => {
		expect(utils.formatTokens(t.input)).toEqual(t.expected);
	});
});

test('getUniqueVariant', () => {
	const sep = ':';

	// It sorts the values
	expect(utils.getUniqueVariant(['dark', 'active'], sep)).toEqual(
		'active:dark'
	);

	const SameVariants = [
		'sm:dark:active',
		'sm:active:dark',
		'dark:sm:active',
		'active:sm:dark',
	];

	SameVariants.forEach((v) => {
		expect(utils.getUniqueVariant(v, sep)).toEqual('active:dark:sm');
	});
});
