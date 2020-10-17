export const styleName = (prefix: string, key: string) => {
	return key === 'default'
		? prefix
		: key.startsWith('-')
		? '-' + prefix + key
		: prefix + '-' + key;
};
