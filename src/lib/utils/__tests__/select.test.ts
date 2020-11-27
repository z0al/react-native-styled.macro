// Ours
import { select } from '../select';

describe('[style-utils] select', () => {
	const defaultVariant = {
		variant: 'default',
		style: {
			color: 'white',
		},
		selectable: true,
	};

	const darkVariant = {
		variant: 'dark',
		style: {
			color: 'black',
		},
	};

	const focusVariant = {
		variant: 'focus',
		style: {
			color: 'grey',
		},
		numberOfLines: 3,
	};

	const leftVariant = {
		variant: 'left',
		style: {
			textAlign: 'left',
		},
	};

	const rightVariant = {
		variant: 'right',
		style: {
			textAlign: 'right',
		},
		resizeMode: 'stretch',
	};

	const focusDarkVariant = {
		variant: 'focus:dark',
		style: {
			borderWidth: 2,
		},
	};

	const variantStyles = [
		defaultVariant,
		darkVariant,
		focusVariant,
		leftVariant,
		rightVariant,
		focusDarkVariant,
	];

	test('should always include the "default" variant', () => {
		const expected = {
			style: [defaultVariant.style],
			selectable: true,
		};

		expect(select(variantStyles)).toEqual(expected);
		expect(select(variantStyles, { default: false })).toEqual(expected);
	});

	test('should select enabled variants only', () => {
		const expected = {
			style: [
				defaultVariant.style,
				darkVariant.style,
				rightVariant.style,
			],
			selectable: true,
			resizeMode: 'stretch',
		};

		expect(
			select(variantStyles, { dark: true, right: true, focus: false })
		).toEqual(expected);
	});

	test('supports nested variants', () => {
		const expected = {
			style: [
				defaultVariant.style,
				darkVariant.style,
				focusVariant.style,
				rightVariant.style,
				focusDarkVariant.style,
			],
			selectable: true,
			numberOfLines: 3,
			resizeMode: 'stretch',
		};

		expect(
			select(variantStyles, { dark: true, focus: true, right: true })
		).toEqual(expected);
	});
});
