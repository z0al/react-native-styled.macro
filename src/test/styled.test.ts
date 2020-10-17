// Ours
import configs from '../configs';
import { createStyledVariants } from '../styled';
import { StyledVariant } from '../types';

describe('createStyledVariants', () => {
	it('should map style names to relevant styles', () => {
		expect(
			createStyledVariants('bg-white text-black', configs)
		).toEqual([
			{
				variant: 'default',
				style: configs.styles['bg-white'],
			},
			{
				variant: 'default',
				style: configs.styles['text-black'],
			},
		] as StyledVariant[]);
	});

	it('should resolve & group variant styles together', () => {
		expect(
			createStyledVariants(
				'sm:bg-white sm:text-black dark:bg-black dark:text-white sm:-m-2',
				configs
			)
		).toEqual([
			{
				variant: 'sm',
				style: configs.styles['bg-white'],
			},
			{
				variant: 'sm',
				style: configs.styles['text-black'],
			},
			{
				variant: 'dark',
				style: configs.styles['bg-black'],
			},
			{
				variant: 'dark',
				style: configs.styles['text-white'],
			},
			{
				variant: 'sm',
				style: configs.styles['-m-2'],
			},
		] as StyledVariant[]);
	});

	it('should ignore the order of nested variants', () => {
		expect(
			createStyledVariants(
				'bg-white active:rounded dark:active:text-black text-lg active:dark:bg-black',
				configs
			)
		).toEqual([
			{
				variant: 'default',
				style: configs.styles['bg-white'],
			},
			{
				variant: 'default',
				style: configs.styles['text-lg'],
			},
			{
				variant: 'active',
				style: configs.styles['rounded'],
			},

			{
				variant: 'dark:active',
				style: configs.styles['text-black'],
			},
			{
				variant: 'active:dark',
				style: configs.styles['bg-black'],
			},
		] as StyledVariant[]);
	});
});
