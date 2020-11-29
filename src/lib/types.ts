// Packages
import { UnionToIntersection, ValueOf, LiteralUnion } from 'type-fest';

// Ours
import { Theme } from './theme';
import createStyles from './style';
import createProps from './style/props';
import { builtinVariants } from './variants';

export type TokenInfo = {
	variant: string;
	style: Record<string, any>;
	[props: string]: unknown;
};

export type VariantFlags = Record<string, boolean | undefined>;

export type Configuration = {
	theme: Theme;
};

type Styles = UnionToIntersection<ReturnType<typeof createStyles>>;
type Props = UnionToIntersection<ReturnType<typeof createProps>>;

type Variant = LiteralUnion<
	keyof UnionToIntersection<typeof builtinVariants>,
	string
>;

type Token = keyof UnionToIntersection<Styles | Props>;

type TokenWithVariant =
	| Token
	| `${Variant}:${Token}`
	| `${Variant}:${Variant}:${Token}`;

type ExtractToken<T extends string> = T extends `${string}:${infer V}`
	? V extends Token
		? V
		: ExtractToken<V>
	: T extends Token
	? T
	: never;

type ComputedStyle<T extends Token> = UnionToIntersection<
	T extends keyof Styles
		? { style: ValueOf<Styles, T>[] }
		: never | T extends keyof Props
		? ValueOf<Props, T>
		: never
>;

export type Macro = <T extends TokenWithVariant>(
	tokens: T[],
	variants?: VariantFlags
) => ComputedStyle<ExtractToken<T>>;
