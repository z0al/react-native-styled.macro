// Ours
import { resolveTokens } from '../tokens';

describe('resolveTokens', () => {
	it('should resolve token styles', () => {
		expect(resolveTokens(['bg-white'])).toEqual([
			{
				variant: 'default',
				style: {
					backgroundColor: 'white',
				},
			},
		]);
	});

	it('should resolve token style props', () => {
		expect(resolveTokens(['bg-white', 'lines-1'])).toEqual([
			{
				variant: 'default',
				style: {
					backgroundColor: 'white',
				},
				numberOfLines: 1,
			},
		]);
	});

	it('should throw if style is unknown', () => {
		// Style doesn't exist
		expect(() => resolveTokens(['unknown'])).toThrow(/unknown style/i);

		// No style but there is a prop
		expect(() => resolveTokens(['lines-1'])).not.toThrow();
	});

	it('should throw if ordering is incorrect', () => {
		expect(() => resolveTokens(['web:border', 'border'])).toThrow(
			/Incorrect order/i
		);
	});
});
