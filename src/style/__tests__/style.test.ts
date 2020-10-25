// Ours
import theme from '../../theme';
import getStyles from '../index';

test('[styles] snapshot', () => {
	expect(getStyles(theme)).toMatchSnapshot();
});
