// Packages
import { StyleSheet } from 'react-native';

// Ours
import { Theme } from '../types';
import backgrounds from './backgrounds';
import borders from './borders';
import effects from './effects';
import flex from './flex';
import layout from './layout';
import sizing from './sizing';
import spacing from './spacing';
import transforms from './transforms';
import typography from './typography';

export default (theme: Theme) =>
	StyleSheet.create({
		...(layout(theme) as any),
		...(flex(theme) as any),
		...spacing(theme),
		...sizing(theme),
		...backgrounds(theme),
		...borders(theme),
		...effects(theme),
		...typography(theme),
		...transforms(theme),
	});
