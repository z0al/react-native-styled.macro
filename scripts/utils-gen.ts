// // Packages
// import { camelCase } from 'camel-case';

// // Ours
// import theme from "../src/theme";

// import {
// 	formatTableData,
// 	generateDetailsTag,
// 	generateTable,
// 	writeToReadMe,
// 	rem,
// } from './helpers';

const Data = [
	'Display',
	'Flex',
	'Flex Direction',
	'Flex Grow',
	'Flex Shrink',
	'Flex Wrap',
	'Align Self',
	'Align Items',
	'Align Content',
	'Justify Content',
	'Font Family',
	'Font Size',
	'Font Style',
	'Font Variant',
	'Font Weight',
	'Height',
	'Width',
	'Max-Height',
	'Max-Width',
	'Min-Height',
	'Min-Width',
	'Border Color',
	'Border Radius',
	'Border Style',
	'Border Width',
	'Background Color',
	'Letter Spacing',
	'Text Align',
	'Text Align (Vertical)',
	'Text Color',
	'Text Decoration',
	'Text Transform',
	'Line Height',
	'Margin',
	'Padding',
	'Overflow',
	'Opacity',
	'Rotate',
	'Scale',
	'Skew',
	'Translate',
	'Position',
	'Top / Right / Bottom / Left',
	'Z-Index',
];

// const MARK_START = '<!-- UTILS-GEN-START -->';
// const MARK_END = '<!-- UTILS-GEN-END -->';

// const { theme } = generateConfigs(rem);

// const doc = Data.map((utility) => {
// 	const title = `### ${utility.title}`;

// 	const sections = utility.sections
// 		.filter((name) => {
// 			const exportName = camelCase(name);
// 			if (!utility.module[exportName]) {
// 				console.warn('not found', exportName);
// 				return false;
// 			}

// 			return true;
// 		})
// 		.sort()
// 		.map((section) => {
// 			const styles = utility.module[camelCase(section)](theme);
// 			const values = Object.keys(styles)
// 				.sort()
// 				.map((key) => [key, formatTableData(styles[key])]);
// 			const table = generateTable(['Style', 'Properties'], values);
// 			return generateDetailsTag(section, table);
// 		})
// 		.join('\n');

// 	return [title, sections].join('\n\n');
// }).join('\n');

// writeToReadMe(MARK_START, MARK_END, doc);
