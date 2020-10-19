// @noflow
// Packages
import { StyleSheet } from 'react-native';

// Ours
import configs from './configs';
import { StyleUtils } from './styles/utils';
// import { Configuration, StyledVariant, ToggleVariants } from './types';

function getStyle(styleName: string) {
	return configs.styles[styleName];
}

function getStyleProps(styleName: string) {
	return {};
}

// TODO: use TS v4.1 Template Literal types
export type StyleTokens = string[];
export type StyledToken = {
	variant: string;
	style?: any; // TODO
	props?: any; // TODO
};

export function toStyledArray(tokens: StyleTokens) {
	return StyleUtils.getOrderedTokens(tokens)
		.map((token) => {
			const { styleName, variant } = StyleUtils.extractTokenInfo(token);

			const style = getStyle(styleName);
			const props = getStyleProps(styleName);

			// TODO: if both style and props are empty then raise an error
			return { variant, style, props };
		})
		.reduce((styles: StyledToken[], next: StyledToken) => {
			const current = styles.slice(-1)[0];

			// Merge styles if possible
			if (current?.variant === next.variant) {
				styles = styles.slice(0, -1);
				next.style = StyleSheet.flatten([current.style, next.style]);
				next.props = { ...current.props, ...next.props };
			}

			return [...styles, next];
		}, []);
}
