// Packages
import { StyleSheet } from 'react-native';

// Ours
import theme from '../../theme';
import getStyles from '../index';

test('[styles] snapshot', () => {
	const styles = StyleSheet.create(getStyles(theme));

	expect(styles).toMatchSnapshot();
});
