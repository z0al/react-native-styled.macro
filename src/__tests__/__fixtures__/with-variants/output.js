import { StyleSheet as _StyleSheet } from 'react-native';
import { select as _select } from 'react-native-styled.macro/build/module/utils/select';

const _styles = _StyleSheet.create({
	_default: {
		backgroundColor: 'white',
	},
	_web: undefined,
	_dark: {
		backgroundColor: 'black',
	},
});

console.log(
	_select(
		[
			{
				variant: 'default',
				selectable: true,
				style: _styles._default,
			},
			{
				variant: 'web',
				selectable: false,
				style: _styles._web,
			},
			{
				variant: 'dark',
				style: _styles._dark,
			},
		],
		{
			dark: false,
		}
	)
);
