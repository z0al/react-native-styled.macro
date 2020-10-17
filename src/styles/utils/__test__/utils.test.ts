// Ours
import { StyleUtils } from '..';

const separator = ':';

test('extractTokenInfo', () => {
	const Tests = [
		{
			input: 'bg-white',
			expected: {
				styleName: 'bg-white',
				variant: 'default',
			},
		},
		{
			input: 'sm:bg-white',
			expected: {
				styleName: 'bg-white',
				variant: 'sm',
			},
		},
		{
			input: 'dark:sm:focus:bg-black',
			expected: {
				styleName: 'bg-black',
				variant: 'dark:sm:focus',
			},
		},
	];

	Tests.forEach((t) => {
		expect(StyleUtils.extractTokenInfo(t.input, separator)).toEqual(
			t.expected
		);
	});
});

test('getOrderedTokens', () => {
	const Tests = [
		{
			input: 'bg-white',
			expected: ['bg-white'],
		},
		{
			input: '    sm:bg-white text-black ',
			expected: ['text-black', 'sm:bg-white'],
		},
		{
			input: 'sm:bg-white   \t  dark:sm:bg-black ',
			expected: ['sm:bg-white', 'dark:sm:bg-black'],
		},
		{
			input: `
			sm:bg-white
			rounded
			dark:sm:bg-black
			bg-orange
			lg:w-full
			`,
			expected: [
				'rounded',
				'bg-orange',
				'sm:bg-white',
				'dark:sm:bg-black',
				'lg:w-full',
			],
		},
	];

	Tests.forEach((t) => {
		expect(StyleUtils.getOrderedTokens(t.input, separator)).toEqual(
			t.expected
		);
	});
});
