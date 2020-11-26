// Packages
import { StyleSheet } from 'react-native';

// Ours
import theme from '../../theme';
import getStyles from '../index';
import { rem } from '../../utils/rem';

// Convert Rem values to numbers for the sake of testing
function handleRemValues(styles: Record<string, any>) {
	const replacer = (_: string, value: any) => {
		if (typeof value === 'string') {
			if (value.match(/rem/)) {
				return rem(parseFloat(value.replace(/rem|\(|\)/g, '')));
			}
		}

		return value;
	};

	return JSON.parse(JSON.stringify(styles, replacer));
}

test('[styles] snapshot', () => {
	const styles = handleRemValues(getStyles(theme));

	expect(StyleSheet.create(styles)).toMatchSnapshot();
});
