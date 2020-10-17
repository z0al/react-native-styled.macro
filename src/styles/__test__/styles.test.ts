// Ours
import configs from '../../configs';

test('Styles Snapshot', () => {
	expect(configs.styles).toMatchSnapshot();
});
