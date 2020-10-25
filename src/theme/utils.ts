export const negative = (styles: Record<string, string | number>) => {
	const newStyles: Record<string, string | number> = {};

	Object.keys(styles).forEach((key) => {
		const unit = styles[key];

		// The value always a number except when using rem on Web.
		newStyles['-' + key] =
			typeof unit === 'string' ? '-' + unit : -1 * unit;
	});

	return newStyles;
};

// All Rem values will be replaced with a function call during build
export const rem = (num: number) => `rem(${num})`;
