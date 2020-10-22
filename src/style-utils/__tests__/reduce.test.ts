// Ours
import { reduce } from '../reduce';

test('[style-utils] reduce', () => {
	const variantStyles = [
		{ variant: 'dark', style: { color: 'white', bgColor: 'black' } },
		{
			variant: 'default',
			style: { color: 'black' },
			colorShouldBeBlack: true,
		},
		{
			variant: 'default',
			style: { bgColor: 'white' },
			bgShouldBeWhite: true,
		},
		{ variant: 'green', style: { color: 'green' } },
		{ variant: 'orange', style: { color: 'orange' }, green: false },
		{ variant: 'green', style: { bgColor: 'black' } },
	];

	expect(reduce(variantStyles)).toEqual([
		{ variant: 'dark', style: { color: 'white', bgColor: 'black' } },
		{
			variant: 'default',
			style: { color: 'black', bgColor: 'white' },
			colorShouldBeBlack: true,
			bgShouldBeWhite: true,
		},
		{ variant: 'green', style: { color: 'green' } },
		{ variant: 'orange', style: { color: 'orange' }, green: false },
		{ variant: 'green', style: { bgColor: 'black' } },
	]);
});
