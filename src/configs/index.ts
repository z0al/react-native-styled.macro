// Ours
import createStyles from '../styles';
import defaultConfigs from './default';

// TODO: support custom config
export default {
	...defaultConfigs,
	styles: createStyles(defaultConfigs.theme),
};
