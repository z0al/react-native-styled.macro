export const id = (prefix: string, key: string) => {
	return key === 'default'
		? prefix
		: key.startsWith('-')
		? '-' + prefix + key
		: prefix + '-' + key;
};
