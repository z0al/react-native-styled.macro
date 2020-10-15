// Packages
import tw from 'tailwind-rn';

// Ours
import defaultConfigs from '../configs';
import { createStyledVariants } from '../styling';

describe('createStyledVariants', () => {
	it('should map style names to relevant styles', () => {
		expect(
			createStyledVariants('bg-white text-black', defaultConfigs)
		).toEqual({
			default: [tw('bg-white'), tw('text-black')],
		});
	});

	it('should resolve & group variant styles together', () => {
		expect(
			createStyledVariants(
				'sm:bg-white sm:text-black dark:bg-black dark:text-white',
				defaultConfigs
			)
		).toEqual({
			default: [],
			sm: [tw('bg-white'), tw('text-black')],
			dark: [tw('bg-black'), tw('text-white')],
		});
	});

	it('should ignore the order of nested variants', () => {
		expect(
			createStyledVariants(
				'bg-white active:rounded dark:active:text-black active:dark:bg-black',
				defaultConfigs
			)
		).toEqual({
			default: [tw('bg-white')],
			active: [tw('rounded')],
			'active:dark': [tw('text-black'), tw('bg-black')],
		});
	});
});
