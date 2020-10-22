// Ours
import { select } from '../select';

describe('[style-utils] select', () => {
	const styles = {
		white: {
			color: 'white',
		},
		black: {
			color: 'black',
		},
		green: {
			color: 'green',
		},
		orange: {
			color: 'orange',
		},
	};

	const variantStyles = [
		{ variant: 'default', style: styles.white, shouldBeWhite: true },
		{ variant: 'dark', style: styles.black },
		{ variant: 'green', style: styles.green },
		{ variant: 'orange', style: styles.orange, green: false },
		{ variant: 'green', style: styles.green },
	];

	test('should always include the "default" variant', () => {
		const expected = [{ style: styles.white, shouldBeWhite: true }];

		expect(select(variantStyles)).toEqual(expected);
		expect(select(variantStyles, { default: false })).toEqual(expected);
	});

	test('should select enabled variants only', () => {
		const expected = [
			{ style: styles.white, shouldBeWhite: true },
			{ style: styles.orange, green: false },
		];

		expect(select(variantStyles, { orange: true })).toEqual(expected);
	});

	test('should keep the same order', () => {
		const expected = [
			{ style: styles.white, shouldBeWhite: true },
			{ style: styles.green },
			{ style: styles.orange, green: false },
			{ style: styles.green },
		];

		expect(
			select(variantStyles, { orange: true, green: true })
		).toEqual(expected);
	});
});
