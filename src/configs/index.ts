// Ours
import { StyleUtils } from '../style-utils';
import createStyles from '../styles';
import generateDefaultConfigs from './default';

const defaultConfigs = generateDefaultConfigs(StyleUtils.rem);

// TODO: support custom config
export default {
	...defaultConfigs,
	styles: createStyles(defaultConfigs.theme),
};
