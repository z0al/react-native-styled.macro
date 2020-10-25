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

	it('should throw if style is unknown', () => {
		expect(() => resolveTokens(['unknown'])).toThrow(/unknown style/i);
	});

	it('should throw if ordering is incorrect', () => {
		expect(() => resolveTokens(['web:border', 'border'])).toThrow(
			/Incorrect order/i
		);
	});
});
