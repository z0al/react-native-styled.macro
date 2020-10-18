// Packages
import * as fs from 'fs';
import * as path from 'path';

declare var __dirname: string;

export function generateTable(cols: string[], rows: any[][]) {
	const row = (data: any[]) => `| ${data.join(' | ')} |`;

	const header = row(cols);
	const headerLine = row(cols.map(() => '-----'));
	const data = rows.map(row).join('\n');

	return [header, headerLine, data].join('\n');
}

export function writeToReadMe(
	start: string,
	end: string,
	value: string
) {
	const filePath = path.join(__dirname, '..', 'README.md');
	const ReadMe = fs.readFileSync(filePath, 'utf8');

	const contentBefore = ReadMe.slice(
		0,
		ReadMe.indexOf(start) + start.length
	);

	const contentAfter = ReadMe.slice(ReadMe.indexOf(end));

	fs.writeFileSync(
		filePath,
		`${contentBefore}\n${value}\n${contentAfter}`
	);
}

export function rem(value: number) {
	return (`rem(${value})` as unknown) as number;
}

export function formatTableData(value: any, root = true) {
	if (Array.isArray(value)) {
		return `[${value
			.map((val) => formatTableData(val, false))
			.join(', ')}]`;
	}

	if (typeof value === 'string' && value.startsWith('rem')) {
		return value;
	}

	if (typeof value !== 'object') {
		return JSON.stringify(value);
	}

	const data = `{ ${Object.keys(value)
		.map((k) => `${k}: ${formatTableData(value[k], false)}`)
		.join(', ')} }`;

	return root ? `\`${data}\`` : data;
}

export function generateDetailsTag(summary: string, details: string) {
	return `<details><summary>${summary}</summary>\n\n${details}\n\n</details>\n`;
}
