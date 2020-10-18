// Ours
import { StyleUtils } from '../style-utils';
import createStyles from '../styles';
import generateBaseConfigs from './base';

const baseConfigs = generateBaseConfigs(StyleUtils.rem);

// TODO: support custom config
export default {
	...baseConfigs,
	styles: createStyles(baseConfigs.theme),
};
