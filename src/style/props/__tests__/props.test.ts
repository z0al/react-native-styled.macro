// Ours
import theme from '../../../theme';
import getProps from '../index';

test('[props] snapshot', () => {
	expect(getProps(theme)).toMatchSnapshot();
});
