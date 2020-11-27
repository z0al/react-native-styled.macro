export type StyleName<
	P extends string,
	K extends string
> = K extends 'default'
	? P
	: K extends `-${string}`
	? `${P}${K}`
	: `${P}-${K}`;

export function id<P extends string, K extends string>(
	prefix: P,
	key: K
) {
	return (key === 'default'
		? prefix
		: key.startsWith('-')
		? '-' + prefix + key
		: prefix + '-' + key) as StyleName<P, K>;
}
