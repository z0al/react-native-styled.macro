# React Native Restyled

> A Utility-first Styling Library for [React Native][rn].

![](./docs/demo.png)

## Features

- **Rich Styling support:** There is a utility for almost everything.
- **Variants:** Built-in support for Responsive layout, Dark mode, and more.
- **Customization:** You can optionally add `styled.config.js` and override theme and/or variants.

## Usage

> _Compatible with React Native v0.62.0 or higher_

```
yarn add react-native-restyled
```

## How it works

TODO

## Best Practices

1. Define default styles first

   **Do**

   ```javascript
   styled('bg-white text-black dark:bg-black dark:text-white');
   ```

   **Do NOT**

   ```javascript
   styled('dark:bg-black dark:text-white bg-white text-black');
   ```

   Since the default variant styles will _**always**_ get applied first, the code above is misleading, which in turn can be a source of bugs.

2. Group variant styles together

   **Do**

   ```javascript
   styled('bg-white text-black web:rounded web:bg-gray-100');
   ```

   **Do NOT**

   ```javascript
   styled('web:bg-gray-100 bg-white text-black web:rounded');
   ```

   In addition to the readability concern, it also enables compile-time optimizations in the future to be added.

## Prior Art

- **Tailwind CSS** ([website][tw]): Tailwind is a great utility-first CSS framework. We borrowed the utility-first approach from there and re-imagined how it can be used in React Native apps to build user interfaces faster without additional Runtime overhead.

## Utilities

> _Note:_ The output of `rem(value)` is calculated as follows:
>
> ```javascript
> Platform.select({
> 	web: `${value}rem`,
> 	default: PixelRatio.getFontScale() * 16 * value,
> });
> ```

<!-- UTILS-GEN-START -->

<!-- UTILS-GEN-END -->

## Variants

TODO

## License

MIT © Ahmed T. Ali

[rn]: https://reactnative.dev
[tw]: https://tailwindcss.com/
[tw-rn]: https://github.com/vadimdemedes/tailwind-rn
