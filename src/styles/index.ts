// Packages
import { StyleSheet } from 'react-native';

// Ours
import { Theme } from '../types';
import backgrounds from './backgrounds';
import borders from './borders';
import box from './box';
import effects from './effects';
import flexbox from './flexbox';
import layout from './layout';
import sizing from './sizing';
import spacing from './spacing';
import typography from './typography';

export default (theme: Theme) =>
	StyleSheet.create({
		...box(),
		...layout(theme),
		...flexbox(theme),
		...spacing(theme),
		...sizing(theme),
		...backgrounds(theme),
		...borders(theme),
		...effects(theme),
		...typography(theme),
	});
