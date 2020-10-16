// Packages
import tw from 'tailwind-rn';

// Ours
import { StyledVariant } from '../types';
import { defaultConfigs } from '../configs';
import { createStyledVariants } from '../styled';

describe('createStyledVariants', () => {
	it('should map style names to relevant styles', () => {
		expect(
			createStyledVariants('bg-white text-black', defaultConfigs)
		).toEqual([
			{
				variant: 'default',
				style: tw('bg-white'),
			},
			{
				variant: 'default',
				style: tw('text-black'),
			},
		] as StyledVariant[]);
	});

	it('should resolve & group variant styles together', () => {
		expect(
			createStyledVariants(
				'sm:bg-white sm:text-black dark:bg-black dark:text-white',
				defaultConfigs
			)
		).toEqual([
			{
				variant: 'sm',
				style: tw('bg-white'),
			},
			{
				variant: 'sm',
				style: tw('text-black'),
			},
			{
				variant: 'dark',
				style: tw('bg-black'),
			},
			{
				variant: 'dark',
				style: tw('text-white'),
			},
		] as StyledVariant[]);
	});

	it('should ignore the order of nested variants', () => {
		expect(
			createStyledVariants(
				'bg-white active:rounded dark:active:text-black text-lg active:dark:bg-black',
				defaultConfigs
			)
		).toEqual([
			{
				variant: 'default',
				style: tw('bg-white'),
			},
			{
				variant: 'default',
				style: tw('text-lg'),
			},
			{
				variant: 'active',
				style: tw('rounded'),
			},

			{
				variant: 'dark:active',
				style: tw('text-black'),
			},
			{
				variant: 'active:dark',
				style: tw('bg-black'),
			},
		] as StyledVariant[]);
	});
});
