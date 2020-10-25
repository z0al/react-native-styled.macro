export const negative = (styles: Record<string, number>) => {
	const newStyles: Record<string, number> = {};

	Object.keys(styles).forEach((key) => {
		const unit = styles[key];

		// The value always a number except when using rem on Web.
		// @ts-expect-error
		newStyles['-' + key] =
			typeof unit === 'string' ? '-' + unit : -1 * unit;
	});

	return newStyles;
};

// All rem strings will be replaced with a function call during build
// We need to force TS to beleive it's a number for now.
export const rem = (num: number) =>
	(`rem(${num})` as unknown) as number;
