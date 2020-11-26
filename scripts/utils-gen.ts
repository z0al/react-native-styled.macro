// Packages
import { camelCase } from 'camel-case';

// Ours
import theme from '../src/styling/theme';
import {
	formatTableData,
	generateDetailsTag,
	generateTable,
	writeToReadMe,
} from './helpers';

const Data = [
	{ name: 'Display' },

	{ name: 'Flex', theme: true },
	{ name: 'Flex Direction' },
	{ name: 'Flex Grow', theme: true },
	{ name: 'Flex Shrink', theme: true },
	{ name: 'Flex Wrap' },
	{ name: 'Align Self' },
	{ name: 'Align Items' },
	{ name: 'Align Content' },
	{ name: 'Justify Content' },

	{ name: 'Font Size', theme: true },
	{ name: 'Font Style' },
	{ name: 'Font Variant' },
	{ name: 'Font Weight', theme: true },

	{ name: 'Height', theme: true },
	{ name: 'Width', theme: true },
	{ name: 'Max-Height', theme: true },
	{ name: 'Max-Width', theme: true },
	{ name: 'Min-Height', theme: true },
	{ name: 'Min-Width', theme: true },

	{ name: 'Border Color', theme: true },
	{ name: 'Border Radius', theme: true },
	{ name: 'Border Style' },
	{ name: 'Border Width', theme: true },

	{ name: 'Background Color', theme: true },

	{ name: 'Letter Spacing', theme: true },

	{ name: 'Text Align' },
	{ name: 'Text Align (Vertical)' },
	{ name: 'Text Color', theme: true },
	{ name: 'Text Decoration' },
	{ name: 'Text Transform' },

	{ name: 'Margin', theme: true, variant: true },
	{ name: 'Padding', theme: true, variant: true },

	{ name: 'Overflow' },

	{ name: 'Opacity', theme: true },

	{ name: 'Rotate', theme: true },
	{ name: 'Scale', theme: true },
	{ name: 'Skew', theme: true },
	{ name: 'Translate', theme: true },

	{ name: 'Position' },
	{ name: 'Resize Mode' },
	{ name: 'Top / Right / Bottom / Left' },
	{ name: 'Z-Index', theme: true },

	{ name: 'Number  of lines', theme: true, prop: true },
	{ name: 'Selectable', prop: true },
];

const MARK_START = '<!-- UTILS-GEN-START -->';
const MARK_END = '<!-- UTILS-GEN-END -->';

const themeNote = (key: string) =>
	`\n\n> _Tip:_ The following styles are generated based on \`theme.${key}\` values.\n\n`;

const doc = Data.map((row) => {
	const { name, theme: basedOnTheme } = row;

	const title = `### ${name} ${row.prop ? '( prop )' : ''}\n\n`;
	const moduleName = camelCase(name);

	const { [moduleName]: styleOf } = require(`../src/styling/style/${
		row.prop ? 'props/' : ''
	}${moduleName}`);

	const styles = styleOf(theme);

	const columns = row.prop ? ['Name', 'Prop(s)'] : ['Name', 'Style(s)'];

	const values = Object.keys(styles)
		.sort()
		.map((key) => [key, formatTableData(styles[key])]);

	const table = generateTable(columns, values);

	const content =
		values.length > 10
			? generateDetailsTag('Show all styles', table)
			: table;

	return basedOnTheme
		? title + themeNote(moduleName) + content
		: title + content;
}).join('\n\n');

writeToReadMe(MARK_START, MARK_END, doc);
