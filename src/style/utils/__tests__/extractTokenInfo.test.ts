// Ours
import { extractTokenInfo } from '../extractTokenInfo';

test('extractTokenInfo', () => {
	const Tests = [
		{
			input: 'bg-white',
			expected: {
				styleId: 'bg-white',
				variant: 'default',
			},
		},
		{
			input: 'sm:bg-white',
			expected: {
				styleId: 'bg-white',
				variant: 'sm',
			},
		},
		{
			input: 'dark:sm:focus:bg-black',
			expected: {
				styleId: 'bg-black',
				variant: 'dark:sm:focus',
			},
		},
	];

	Tests.forEach((t) => {
		expect(extractTokenInfo(t.input)).toEqual(t.expected);
	});
});
