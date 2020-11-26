// Packages
import React from 'react';
import { Text, Dimensions } from 'react-native';
import { render, act } from '@testing-library/react-native';
import * as nativeMatchers from '@testing-library/jest-native';

expect.extend(nativeMatchers);

// Ours
import { useWindowVariant, BREAKPOINTS } from '../useWindowVariant';

const TestComponent = () => {
	const variant = useWindowVariant();

	return <Text testID="text">{JSON.stringify(variant)}</Text>;
};

const setWidth = (width: number) =>
	Dimensions.set({ window: { width } });

test('useWindowVariant', () => {
	const { getByTestId, rerender } = render(<TestComponent />);

	// xs
	act(() => {
		setWidth(BREAKPOINTS.sm - 1);
	});

	rerender(<TestComponent />);

	expect(getByTestId('text')).toHaveTextContent('{}');

	// sm
	act(() => {
		setWidth(BREAKPOINTS.md - 1);
	});

	rerender(<TestComponent />);

	expect(getByTestId('text')).toHaveTextContent('{"sm":true}');

	// md
	act(() => {
		setWidth(BREAKPOINTS.lg - 1);
	});

	rerender(<TestComponent />);

	expect(getByTestId('text')).toHaveTextContent('{"md":true}');

	// lg
	act(() => {
		setWidth(BREAKPOINTS.xl - 1);
	});

	rerender(<TestComponent />);

	expect(getByTestId('text')).toHaveTextContent('{"lg":true}');

	// xl
	act(() => {
		setWidth(BREAKPOINTS.xl);
	});

	rerender(<TestComponent />);

	expect(getByTestId('text')).toHaveTextContent('{"xl":true}');
});
