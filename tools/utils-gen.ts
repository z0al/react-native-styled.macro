// Packages
import { camelCase } from 'camel-case';

// Ours
import generateConfigs from '../src/configs/base';
import * as backgrounds from '../src/styles/backgrounds';
import * as borders from '../src/styles/borders';
import * as effects from '../src/styles/effects';
import * as flex from '../src/styles/flex';
import * as layout from '../src/styles/layout';
import * as sizing from '../src/styles/sizing';
import * as spacing from '../src/styles/spacing';
import * as transforms from '../src/styles/transforms';
import * as typography from '../src/styles/typography';
import {
	formatTableData,
	generateDetailsTag,
	generateTable,
	writeToReadMe,
	rem,
} from './helpers';

const Data = [
	{
		title: 'Backgrounds',
		module: backgrounds,
		sections: ['Background Color'],
	},
	{
		title: 'Borders',
		module: borders,
		sections: [
			'Border Color',
			'Border Radius',
			'Border Style',
			'Border Width',
		],
	},
	{
		title: 'Effects',
		module: effects,
		sections: ['Opacity'],
	},
	{
		title: 'Flex',
		module: flex,
		sections: [
			'Align Content',
			'Align Items',
			'Align Self',
			'Flex Direction',
			'Flex Grow',
			'Flex Shrink',
			'Flex Wrap',
			'Flex',
			'Justify Content',
		],
	},
	{
		title: 'Layout',
		module: layout,
		sections: [
			'Container',
			'Display',
			'Overflow',
			'Position',
			'Top / Right / Bottom / Left',
			'Z-Index',
		],
	},
	{
		title: 'Sizing',
		module: sizing,
		sections: [
			'Height',
			'Max-Height',
			'Max-Width',
			'Min-Height',
			'Min-Width',
			'Width',
		],
	},
	{
		title: 'Spacing',
		module: spacing,

		sections: ['Margin', 'Padding'],
	},
	{
		title: 'Typography',
		module: typography,
		sections: [
			'Font Family',
			'Font Size',
			'Font Style',
			'Font Variant',
			'Font Weight',
			'Letter Spacing',
			'Line Height',
			'Text Alignment',
			'Text Color',
			'Text Decoration',
		],
	},
	{
		title: 'Transforms',
		module: transforms,
		sections: ['Rotate', 'Scale', 'Skew', 'Translate'],
	},
];

const MARK_START = '<!-- UTILS-GEN-START -->';
const MARK_END = '<!-- UTILS-GEN-END -->';

const { theme } = generateConfigs(rem);

const doc = Data.map((utility) => {
	const title = `### ${utility.title}`;

	const sections = utility.sections
		.filter((name) => {
			const exportName = camelCase(name);
			if (!utility.module[exportName]) {
				console.warn('not found', exportName);
				return false;
			}

			return true;
		})
		.sort()
		.map((section) => {
			const styles = utility.module[camelCase(section)](theme);
			const values = Object.keys(styles)
				.sort()
				.map((key) => [key, formatTableData(styles[key])]);

			const table = generateTable(['Style', 'Properties'], values);

			return generateDetailsTag(section, table);
		})
		.join('\n');

	return [title, sections].join('\n\n');
}).join('\n');

writeToReadMe(MARK_START, MARK_END, doc);
