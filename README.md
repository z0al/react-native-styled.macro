> **Disclaimer**: This library is only a few days/weeks old. While it works, it's considered to be in Beta.

<h3 align="center">💅 styled.macro</h3>

<p align="center">
A Utility-first Styling Library for React Native.
</p>

## Features

- ⚡ **Zero-overhead:** Styles get injected via the [StyleSheet][stylesheet] API during compilation.
- 🍂 **Minimal footprint:** Styles that are never used won't make it to the final App bundle.
- 🎲 **Variants support:** Conditionally style based on Platform, Layout or Screen size ... etc.
- 💅 **Style props:** Supports common style-related Component props e.g. `numberOfLines`.
- 🔌 **Customizable (Coming soon):** Optionally override the default theme by adding `styled.config.js` file

## Table of Contents

- [Getting started](#getting-started)
- [Available Styles](#available-styles)
- [Variants](#variants)
	- [Platform (Built-in)](#platform-built-in)
	- [Layout (Built-in)](#layout-built-in)
	- [Responsive](#responsive)
	- [Dark mode](#dark-mode)
- [Best Practices](#best-practices)
	- [Group variant styles together](#group-variant-styles-together)
- [Prior Art](#prior-art)
- [License](#license)

## Getting started

> _Compatible with React Native v0.62.0 or later_

```
yarn add react-native-styled.macro babel-plugin-macros
```

Add `babel-plugin-macros` to your Babel config (if you haven't already)

```javascript
// babel.config.js
module.exports = function (api) {
	return {
		plugins: ['macros'],
		// ... other stuff
	};
};
```

To use the library simply import the macro as follows:

```jsx
import styled from 'react-native-styled.macro';

const Heading = ({ text }) => (
	<Text
		{...styled([
			'my-4',
			'text-2xl',
			'text-gray-900',
			'font-semibold',
			'letter-wide',
		])}
	>
		{text}
	</Text>
);
```

The compiled output for the above code will look something like the following:

```diff
import { Text } from 'react-native';
+import { StyleSheet } from 'react-native';
+import { rem } from 'react-native-styled.macro/path/not/relevant';
-import styled from 'react-native-styled.macro';

+const styles = StyleSheet.create({
+	_default: {
+		marginVertical: rem(1),
+		fontSize: rem(1.5),
+		color: '#1a202c',
+		fontWeight: '600',
+		letterSpacing: rem(0.025),
+	},
+});

const Heading = ({ text }) => (
	<Text
-		{...styled([
-			'my-4',
-			'text-2xl',
-			'text-gray-900',
-			'font-semibold',
-			'letter-wide',
-		])}
+		{...{
+			style: styles._default,
+		}}
	>
		{text}
	</Text>
);
```

How does it work?

- `styled` (you can name it anything) is a [Babel Macro][macro] which means it will be executed during compilation.
- It will map the given styles and resolve the necessary style attributes/props.
- It will try to [merge styles of the same variant if possible](#group-variant-styles-together) so we don't end up creating an object for every style e.g. `text-2xl`.
- For the best performance, it will then use the good/old `StyleSheet.create` to create the styles as you should normally do by yourself in a React Native app.

The output for any code you write will look more or less the same as above. The only exception is a style with multiple variants because we need to add logic to switch styles at runtime (same as you would do e.g. using `Platform.select()`)

## Available Styles

See [docs/styles.md](./docs/styles.md)

## Variants

### Platform (Built-in)

Enables Platform-specific style. Based on the value of [Platform.OS][platform-os].

**Possible values:** `android`, `ios`, `web` or whatever the value of `Platform.OS`.

**Example:**

```javascript
styled([
	'bg-white',
	'web:bg-purple-600',
	'android:bg-green-600',
	'ios:bg-blue-600',
]);
```

### Layout (Built-in)

Enables Layout-specific style. Based on the value of `I18nManager.isRTL`.

Possible keys: `ltr` or `rtl`.

**Example:**

```javascript
styled(['text-auto', 'rtl:text-right', 'ltr:text-left']);
```

### Responsive

Built on the top of React Native's [useWindowDimensions][usewindowdimensions] hook. Possible keys: `sm`, `md`, `lg`, `xl` or custom values (see below).

**Example**

```javascript
import styled from 'react-native-styled.macro';
import { useWindowVariant } from 'react-native-styled.macro/lib';

const MyComponent = () => {
	const windowVariant = useWindowVariant();

	return (
		<Text
			{...styled(['w-full', 'md:w-64'], {
				...windowVariant /* other variants */,
			})}
		>
			My text
		</Text>
	);
};
```

You can also pass custom breakpoints as follows:

```javascript
// Note: passing a custom object will remove the default breakpoints e.g. `sm`.
useWindowVariant({
	tablet: 640,
	laptop: 768,
	// .. anything really
});

// use it later
styled(['tablet:w-full', 'laptop:w-64']);
```

### Dark mode

Since `styled` accepts arbitrary keys as variants supporting Dark mode can be easily acheived as follows:

```javascript
import { useColorScheme } from 'react-native';
import styled from 'react-native-styled.macro';

const MyComponent = () => {
	// Can either be 'dark' or 'light'
	const colorScheme = useColorScheme();

	return (
		<Text
			{...styled(['text-black', 'dark:text-white'], {
				dark: colorScheme === 'dark',
			})}
		>
			My text
		</Text>
	);
};
```

## Best Practices

### Group variant styles together

**Do NOT**

```javascript
styled(['web:bg-gray-100', 'bg-white', 'text-black', 'web:rounded']);
```

**Do**

```javascript
styled(['bg-white', 'text-black', 'web:rounded', 'web:bg-gray-100']);
```

In addition to the readability concern, it also enables some compile-time optimizations.

## Prior Art

- **Tailwind CSS** ([website][tw]): Tailwind is a great utility-first CSS framework. We borrowed the utility-first approach from there and re-imagined how it can be used in React Native apps to build user interfaces faster without additional Runtime overhead.

## License

MIT © Ahmed T. Ali

[rn]: https://reactnative.dev
[tw]: https://tailwindcss.com/
[tw-rn]: https://github.com/vadimdemedes/tailwind-rn
[platform-os]: https://reactnative.dev/docs/platform-specific-code#platform-module
[macro]: https://github.com/kentcdodds/babel-plugin-macros
[stylesheet]: https://reactnative.dev/docs/stylesheet#create
[usewindowdimensions]: https://reactnative.dev/docs/usewindowdimensions#docsNav
