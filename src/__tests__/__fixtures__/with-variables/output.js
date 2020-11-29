import { StyleSheet as _StyleSheet } from 'react-native';

const _styles = _StyleSheet.create({
	_default: {
		backgroundColor: 'white',
		color: 'black',
	},
	_default2: {
		backgroundColor: 'white',
		color: 'black',
	},
});

const bgWhite = 'bg-white';
const buttonStyle = [bgWhite, 'text-black'];
const inputStyle = [bgWhite, 'text-black'];
console.log({
	style: [_styles._default],
});
console.log({
	style: [_styles._default2],
});
