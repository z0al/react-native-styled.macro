// Ours
import { getOrderedTokens } from '../getOrderedTokens';

test('getOrderedTokens', () => {
	const Tests = [
		{
			input: ['bg-white'],
			expected: ['bg-white'],
		},
		{
			input: ['sm:bg-white', 'text-black'],
			expected: ['text-black', 'sm:bg-white'],
		},
		{
			input: ['sm:bg-white', 'dark:sm:bg-black'],
			expected: ['sm:bg-white', 'dark:sm:bg-black'],
		},
		{
			input: [
				'sm:bg-white',
				'rounded',
				'dark:sm:bg-black',
				'bg-orange',
				'lg:w-full',
			],
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
		expect(getOrderedTokens(t.input)).toEqual(t.expected);
	});
});
