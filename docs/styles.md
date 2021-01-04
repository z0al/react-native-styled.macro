**Table of Contents**

- [Display](#display)
- [Flex](#flex)
- [Flex Direction](#flex-direction)
- [Flex Grow](#flex-grow)
- [Flex Shrink](#flex-shrink)
- [Flex Wrap](#flex-wrap)
- [Align Self](#align-self)
- [Align Items](#align-items)
- [Align Content](#align-content)
- [Justify Content](#justify-content)
- [Font Size](#font-size)
- [Font Style](#font-style)
- [Font Variant](#font-variant)
- [Font Weight](#font-weight)
- [Line Height](#line-height)
- [Height](#height)
- [Width](#width)
- [Max-Height](#max-height)
- [Max-Width](#max-width)
- [Min-Height](#min-height)
- [Min-Width](#min-width)
- [Border Color](#border-color)
- [Border Radius](#border-radius)
- [Border Style](#border-style)
- [Border Width](#border-width)
- [Background Color](#background-color)
- [Letter Spacing](#letter-spacing)
- [Text Align](#text-align)
- [Text Align (Vertical)](#text-align-vertical)
- [Text Color](#text-color)
- [Text Decoration](#text-decoration)
- [Text Transform](#text-transform)
- [Margin](#margin)
- [Padding](#padding)
- [Overflow](#overflow)
- [Opacity](#opacity)
- [Rotate](#rotate)
- [Scale](#scale)
- [Skew](#skew)
- [Translate](#translate)
- [Position](#position)
- [Resize Mode](#resize-mode)
- [Top / Right / Bottom / Left](#top--right--bottom--left)
- [Z-Index](#z-index)
- [Number of lines ( prop )](#number-of-lines--prop-)
- [Selectable ( prop )](#selectable--prop-)

<!-- UTILS-GEN-START -->

### Display

| Name   | Style(s)              |
| ------ | --------------------- |
| flex   | `{ display: "flex" }` |
| hidden | `{ display: "none" }` |

### Flex

> _Tip:_ The following styles are generated based on `theme.flex` values.

| Name         | Style(s)                                            |
| ------------ | --------------------------------------------------- |
| flex-1       | `{ flexGrow: 1, flexShrink: 1, flexBasis: "0%" }`   |
| flex-auto    | `{ flexGrow: 1, flexShrink: 1, flexBasis: "auto" }` |
| flex-initial | `{ flexGrow: 0, flexShrink: 1, flexBasis: "auto" }` |
| flex-none    | `{ flexGrow: 0, flexShrink: 0, flexBasis: "auto" }` |

### Flex Direction

| Name             | Style(s)                              |
| ---------------- | ------------------------------------- |
| flex-col         | `{ flexDirection: "column" }`         |
| flex-col-reverse | `{ flexDirection: "column-reverse" }` |
| flex-row         | `{ flexDirection: "row" }`            |
| flex-row-reverse | `{ flexDirection: "row-reverse" }`    |

### Flex Grow

> _Tip:_ The following styles are generated based on `theme.flexGrow` values.

| Name        | Style(s)          |
| ----------- | ----------------- |
| flex-grow   | `{ flexGrow: 1 }` |
| flex-grow-0 | `{ flexGrow: 0 }` |

### Flex Shrink

> _Tip:_ The following styles are generated based on `theme.flexShrink` values.

| Name          | Style(s)            |
| ------------- | ------------------- |
| flex-shrink   | `{ flexShrink: 1 }` |
| flex-shrink-0 | `{ flexShrink: 0 }` |

### Flex Wrap

| Name              | Style(s)                       |
| ----------------- | ------------------------------ |
| flex-no-wrap      | `{ flexWrap: "nowrap" }`       |
| flex-wrap         | `{ flexWrap: "wrap" }`         |
| flex-wrap-reverse | `{ flexWrap: "wrap-reverse" }` |

### Align Self

| Name         | Style(s)                      |
| ------------ | ----------------------------- |
| self-auto    | `{ alignSelf: "auto" }`       |
| self-center  | `{ alignSelf: "center" }`     |
| self-end     | `{ alignSelf: "flex-end" }`   |
| self-start   | `{ alignSelf: "flex-start" }` |
| self-stretch | `{ alignSelf: "stretch" }`    |

### Align Items

| Name           | Style(s)                       |
| -------------- | ------------------------------ |
| items-baseline | `{ alignItems: "baseline" }`   |
| items-center   | `{ alignItems: "center" }`     |
| items-end      | `{ alignItems: "flex-end" }`   |
| items-start    | `{ alignItems: "flex-start" }` |
| items-stretch  | `{ alignItems: "stretch" }`    |

### Align Content

| Name            | Style(s)                            |
| --------------- | ----------------------------------- |
| content-around  | `{ alignContent: "space-around" }`  |
| content-between | `{ alignContent: "space-between" }` |
| content-center  | `{ alignContent: "center" }`        |
| content-end     | `{ alignContent: "flex-end" }`      |
| content-start   | `{ alignContent: "flex-start" }`    |
| content-stretch | `{ alignContent: "stretch" }`       |

### Justify Content

| Name            | Style(s)                              |
| --------------- | ------------------------------------- |
| justify-around  | `{ justifyContent: "space-around" }`  |
| justify-between | `{ justifyContent: "space-between" }` |
| justify-center  | `{ justifyContent: "center" }`        |
| justify-end     | `{ justifyContent: "flex-end" }`      |
| justify-evenly  | `{ justifyContent: "space-evenly" }`  |
| justify-start   | `{ justifyContent: "flex-start" }`    |

### Font Size

> _Tip:_ The following styles are generated based on `theme.fontSize` values.

| Name      | Style(s)                   |
| --------- | -------------------------- |
| text-2xl  | `{ fontSize: rem(1.5) }`   |
| text-3xl  | `{ fontSize: rem(1.875) }` |
| text-4xl  | `{ fontSize: rem(2.25) }`  |
| text-5xl  | `{ fontSize: rem(3) }`     |
| text-6xl  | `{ fontSize: rem(4) }`     |
| text-base | `{ fontSize: rem(1) }`     |
| text-lg   | `{ fontSize: rem(1.125) }` |
| text-sm   | `{ fontSize: rem(0.875) }` |
| text-xl   | `{ fontSize: rem(1.25) }`  |
| text-xs   | `{ fontSize: rem(0.75) }`  |

### Font Style

| Name       | Style(s)                  |
| ---------- | ------------------------- |
| italic     | `{ fontStyle: "italic" }` |
| not-italic | `{ fontStyle: "normal" }` |

### Font Variant

| Name              | Style(s)                                 |
| ----------------- | ---------------------------------------- |
| lining-nums       | `{ fontVariant: ["lining-nums"] }`       |
| oldstyle-nums     | `{ fontVariant: ["oldstyle-nums"] }`     |
| proportional-nums | `{ fontVariant: ["proportional-nums"] }` |
| small-caps        | `{ fontVariant: ["small-caps"] }`        |
| tabular-nums      | `{ fontVariant: ["tabular-nums"] }`      |

### Font Weight

> _Tip:_ The following styles are generated based on `theme.fontWeight` values.

| Name           | Style(s)                |
| -------------- | ----------------------- |
| font-black     | `{ fontWeight: "900" }` |
| font-bold      | `{ fontWeight: "700" }` |
| font-extrabold | `{ fontWeight: "800" }` |
| font-hairline  | `{ fontWeight: "100" }` |
| font-light     | `{ fontWeight: "300" }` |
| font-medium    | `{ fontWeight: "500" }` |
| font-normal    | `{ fontWeight: "400" }` |
| font-semibold  | `{ fontWeight: "600" }` |
| font-thin      | `{ fontWeight: "200" }` |

### Line Height

> _Tip:_ The following styles are generated based on `theme.lineHeight` values.

<details><summary>Show all styles</summary>

| Name           | Style(s)                    |
| -------------- | --------------------------- |
| line-h-10      | `{ lineHeight: rem(2.5) }`  |
| line-h-3       | `{ lineHeight: rem(0.75) }` |
| line-h-4       | `{ lineHeight: rem(1) }`    |
| line-h-5       | `{ lineHeight: rem(1.25) }` |
| line-h-6       | `{ lineHeight: rem(1.5) }`  |
| line-h-7       | `{ lineHeight: rem(1.75) }` |
| line-h-8       | `{ lineHeight: rem(2) }`    |
| line-h-9       | `{ lineHeight: rem(2.25) }` |
| line-h-loose   | `{ lineHeight: 2 }`         |
| line-h-none    | `{ lineHeight: 1 }`         |
| line-h-normal  | `{ lineHeight: 1.5 }`       |
| line-h-relaxed | `{ lineHeight: 1.625 }`     |
| line-h-snug    | `{ lineHeight: 1.375 }`     |
| line-h-tight   | `{ lineHeight: 1.25 }`      |

</details>

### Height

> _Tip:_ The following styles are generated based on `theme.height` values.

<details><summary>Show all styles</summary>

| Name   | Style(s)                |
| ------ | ----------------------- |
| h-auto | `{ height: "auto" }`    |
| h-0    | `{ height: 0 }`         |
| h-1    | `{ height: rem(0.25) }` |
| h-10   | `{ height: rem(2.5) }`  |
| h-12   | `{ height: rem(3) }`    |
| h-16   | `{ height: rem(4) }`    |
| h-2    | `{ height: rem(0.5) }`  |
| h-20   | `{ height: rem(5) }`    |
| h-24   | `{ height: rem(6) }`    |
| h-3    | `{ height: rem(0.75) }` |
| h-32   | `{ height: rem(8) }`    |
| h-4    | `{ height: rem(1) }`    |
| h-40   | `{ height: rem(10) }`   |
| h-48   | `{ height: rem(12) }`   |
| h-5    | `{ height: rem(1.25) }` |
| h-56   | `{ height: rem(14) }`   |
| h-6    | `{ height: rem(1.5) }`  |
| h-64   | `{ height: rem(16) }`   |
| h-8    | `{ height: rem(2) }`    |
| h-full | `{ height: "100%" }`    |
| h-px   | `{ height: 1 }`         |

</details>

### Width

> _Tip:_ The following styles are generated based on `theme.width` values.

<details><summary>Show all styles</summary>

| Name    | Style(s)                  |
| ------- | ------------------------- |
| w-auto  | `{ width: "auto" }`       |
| w-0     | `{ width: 0 }`            |
| w-1     | `{ width: rem(0.25) }`    |
| w-1/12  | `{ width: "8.333333%" }`  |
| w-1/2   | `{ width: "50%" }`        |
| w-1/3   | `{ width: "33.333333%" }` |
| w-1/4   | `{ width: "25%" }`        |
| w-1/5   | `{ width: "20%" }`        |
| w-1/6   | `{ width: "16.666667%" }` |
| w-10    | `{ width: rem(2.5) }`     |
| w-10/12 | `{ width: "83.333333%" }` |
| w-11/12 | `{ width: "91.666667%" }` |
| w-12    | `{ width: rem(3) }`       |
| w-16    | `{ width: rem(4) }`       |
| w-2     | `{ width: rem(0.5) }`     |
| w-2/12  | `{ width: "16.666667%" }` |
| w-2/3   | `{ width: "66.666667%" }` |
| w-2/4   | `{ width: "50%" }`        |
| w-2/5   | `{ width: "40%" }`        |
| w-2/6   | `{ width: "33.333333%" }` |
| w-20    | `{ width: rem(5) }`       |
| w-24    | `{ width: rem(6) }`       |
| w-3     | `{ width: rem(0.75) }`    |
| w-3/12  | `{ width: "25%" }`        |
| w-3/4   | `{ width: "75%" }`        |
| w-3/5   | `{ width: "60%" }`        |
| w-3/6   | `{ width: "50%" }`        |
| w-32    | `{ width: rem(8) }`       |
| w-4     | `{ width: rem(1) }`       |
| w-4/12  | `{ width: "33.333333%" }` |
| w-4/5   | `{ width: "80%" }`        |
| w-4/6   | `{ width: "66.666667%" }` |
| w-40    | `{ width: rem(10) }`      |
| w-48    | `{ width: rem(12) }`      |
| w-5     | `{ width: rem(1.25) }`    |
| w-5/12  | `{ width: "41.666667%" }` |
| w-5/6   | `{ width: "83.333333%" }` |
| w-56    | `{ width: rem(14) }`      |
| w-6     | `{ width: rem(1.5) }`     |
| w-6/12  | `{ width: "50%" }`        |
| w-64    | `{ width: rem(16) }`      |
| w-7/12  | `{ width: "58.333333%" }` |
| w-8     | `{ width: rem(2) }`       |
| w-8/12  | `{ width: "66.666667%" }` |
| w-9/12  | `{ width: "75%" }`        |
| w-full  | `{ width: "100%" }`       |
| w-px    | `{ width: 1 }`            |

</details>

### Max-Height

> _Tip:_ The following styles are generated based on `theme.maxHeight` values.

| Name       | Style(s)                |
| ---------- | ----------------------- |
| max-h-full | `{ maxHeight: "100%" }` |

### Max-Width

> _Tip:_ The following styles are generated based on `theme.maxWidth` values.

<details><summary>Show all styles</summary>

| Name       | Style(s)                |
| ---------- | ----------------------- |
| max-w-2xl  | `{ maxWidth: rem(42) }` |
| max-w-3xl  | `{ maxWidth: rem(48) }` |
| max-w-4xl  | `{ maxWidth: rem(56) }` |
| max-w-5xl  | `{ maxWidth: rem(64) }` |
| max-w-6xl  | `{ maxWidth: rem(72) }` |
| max-w-full | `{ maxWidth: "100%" }`  |
| max-w-lg   | `{ maxWidth: rem(32) }` |
| max-w-md   | `{ maxWidth: rem(28) }` |
| max-w-none | `{ maxWidth: "none" }`  |
| max-w-sm   | `{ maxWidth: rem(24) }` |
| max-w-xl   | `{ maxWidth: rem(36) }` |
| max-w-xs   | `{ maxWidth: rem(20) }` |

</details>

### Min-Height

> _Tip:_ The following styles are generated based on `theme.minHeight` values.

| Name       | Style(s)                |
| ---------- | ----------------------- |
| min-h-0    | `{ minHeight: 0 }`      |
| min-h-full | `{ minHeight: "100%" }` |

### Min-Width

> _Tip:_ The following styles are generated based on `theme.minWidth` values.

| Name       | Style(s)               |
| ---------- | ---------------------- |
| min-w-0    | `{ minWidth: 0 }`      |
| min-w-full | `{ minWidth: "100%" }` |

### Border Color

> _Tip:_ The following styles are generated based on `theme.borderColor` values.

<details><summary>Show all styles</summary>

| Name               | Style(s)                         |
| ------------------ | -------------------------------- |
| border-black       | `{ borderColor: "black" }`       |
| border-blue-100    | `{ borderColor: "#ebf8ff" }`     |
| border-blue-200    | `{ borderColor: "#bee3f8" }`     |
| border-blue-300    | `{ borderColor: "#90cdf4" }`     |
| border-blue-400    | `{ borderColor: "#63b3ed" }`     |
| border-blue-500    | `{ borderColor: "#4299e1" }`     |
| border-blue-600    | `{ borderColor: "#3182ce" }`     |
| border-blue-700    | `{ borderColor: "#2b6cb0" }`     |
| border-blue-800    | `{ borderColor: "#2c5282" }`     |
| border-blue-900    | `{ borderColor: "#2a4365" }`     |
| border-gray-100    | `{ borderColor: "#f7fafc" }`     |
| border-gray-200    | `{ borderColor: "#edf2f7" }`     |
| border-gray-300    | `{ borderColor: "#e2e8f0" }`     |
| border-gray-400    | `{ borderColor: "#cbd5e0" }`     |
| border-gray-500    | `{ borderColor: "#a0aec0" }`     |
| border-gray-600    | `{ borderColor: "#718096" }`     |
| border-gray-700    | `{ borderColor: "#4a5568" }`     |
| border-gray-800    | `{ borderColor: "#2d3748" }`     |
| border-gray-900    | `{ borderColor: "#1a202c" }`     |
| border-green-100   | `{ borderColor: "#f0fff4" }`     |
| border-green-200   | `{ borderColor: "#c6f6d5" }`     |
| border-green-300   | `{ borderColor: "#9ae6b4" }`     |
| border-green-400   | `{ borderColor: "#68d391" }`     |
| border-green-500   | `{ borderColor: "#48bb78" }`     |
| border-green-600   | `{ borderColor: "#38a169" }`     |
| border-green-700   | `{ borderColor: "#2f855a" }`     |
| border-green-800   | `{ borderColor: "#276749" }`     |
| border-green-900   | `{ borderColor: "#22543d" }`     |
| border-indigo-100  | `{ borderColor: "#ebf4ff" }`     |
| border-indigo-200  | `{ borderColor: "#c3dafe" }`     |
| border-indigo-300  | `{ borderColor: "#a3bffa" }`     |
| border-indigo-400  | `{ borderColor: "#7f9cf5" }`     |
| border-indigo-500  | `{ borderColor: "#667eea" }`     |
| border-indigo-600  | `{ borderColor: "#5a67d8" }`     |
| border-indigo-700  | `{ borderColor: "#4c51bf" }`     |
| border-indigo-800  | `{ borderColor: "#434190" }`     |
| border-indigo-900  | `{ borderColor: "#3c366b" }`     |
| border-orange-100  | `{ borderColor: "#fffaf0" }`     |
| border-orange-200  | `{ borderColor: "#feebc8" }`     |
| border-orange-300  | `{ borderColor: "#fbd38d" }`     |
| border-orange-400  | `{ borderColor: "#f6ad55" }`     |
| border-orange-500  | `{ borderColor: "#ed8936" }`     |
| border-orange-600  | `{ borderColor: "#dd6b20" }`     |
| border-orange-700  | `{ borderColor: "#c05621" }`     |
| border-orange-800  | `{ borderColor: "#9c4221" }`     |
| border-orange-900  | `{ borderColor: "#7b341e" }`     |
| border-pink-100    | `{ borderColor: "#fff5f7" }`     |
| border-pink-200    | `{ borderColor: "#fed7e2" }`     |
| border-pink-300    | `{ borderColor: "#fbb6ce" }`     |
| border-pink-400    | `{ borderColor: "#f687b3" }`     |
| border-pink-500    | `{ borderColor: "#ed64a6" }`     |
| border-pink-600    | `{ borderColor: "#d53f8c" }`     |
| border-pink-700    | `{ borderColor: "#b83280" }`     |
| border-pink-800    | `{ borderColor: "#97266d" }`     |
| border-pink-900    | `{ borderColor: "#702459" }`     |
| border-purple-100  | `{ borderColor: "#faf5ff" }`     |
| border-purple-200  | `{ borderColor: "#e9d8fd" }`     |
| border-purple-300  | `{ borderColor: "#d6bcfa" }`     |
| border-purple-400  | `{ borderColor: "#b794f4" }`     |
| border-purple-500  | `{ borderColor: "#9f7aea" }`     |
| border-purple-600  | `{ borderColor: "#805ad5" }`     |
| border-purple-700  | `{ borderColor: "#6b46c1" }`     |
| border-purple-800  | `{ borderColor: "#553c9a" }`     |
| border-purple-900  | `{ borderColor: "#44337a" }`     |
| border-red-100     | `{ borderColor: "#fff5f5" }`     |
| border-red-200     | `{ borderColor: "#fed7d7" }`     |
| border-red-300     | `{ borderColor: "#feb2b2" }`     |
| border-red-400     | `{ borderColor: "#fc8181" }`     |
| border-red-500     | `{ borderColor: "#f56565" }`     |
| border-red-600     | `{ borderColor: "#e53e3e" }`     |
| border-red-700     | `{ borderColor: "#c53030" }`     |
| border-red-800     | `{ borderColor: "#9b2c2c" }`     |
| border-red-900     | `{ borderColor: "#742a2a" }`     |
| border-teal-100    | `{ borderColor: "#e6fffa" }`     |
| border-teal-200    | `{ borderColor: "#b2f5ea" }`     |
| border-teal-300    | `{ borderColor: "#81e6d9" }`     |
| border-teal-400    | `{ borderColor: "#4fd1c5" }`     |
| border-teal-500    | `{ borderColor: "#38b2ac" }`     |
| border-teal-600    | `{ borderColor: "#319795" }`     |
| border-teal-700    | `{ borderColor: "#2c7a7b" }`     |
| border-teal-800    | `{ borderColor: "#285e61" }`     |
| border-teal-900    | `{ borderColor: "#234e52" }`     |
| border-transparent | `{ borderColor: "transparent" }` |
| border-white       | `{ borderColor: "white" }`       |
| border-yellow-100  | `{ borderColor: "#fffff0" }`     |
| border-yellow-200  | `{ borderColor: "#fefcbf" }`     |
| border-yellow-300  | `{ borderColor: "#faf089" }`     |
| border-yellow-400  | `{ borderColor: "#f6e05e" }`     |
| border-yellow-500  | `{ borderColor: "#ecc94b" }`     |
| border-yellow-600  | `{ borderColor: "#d69e2e" }`     |
| border-yellow-700  | `{ borderColor: "#b7791f" }`     |
| border-yellow-800  | `{ borderColor: "#975a16" }`     |
| border-yellow-900  | `{ borderColor: "#744210" }`     |

</details>

### Border Radius

> _Tip:_ The following styles are generated based on `theme.borderRadius` values.

<details><summary>Show all styles</summary>

| Name            | Style(s)                                                                      |
| --------------- | ----------------------------------------------------------------------------- |
| rounded         | `{ borderRadius: rem(0.25) }`                                                 |
| rounded-2xl     | `{ borderRadius: rem(1) }`                                                    |
| rounded-3xl     | `{ borderRadius: rem(1.5) }`                                                  |
| rounded-b       | `{ borderBottomRightRadius: rem(0.25), borderBottomLeftRadius: rem(0.25) }`   |
| rounded-b-2xl   | `{ borderBottomRightRadius: rem(1), borderBottomLeftRadius: rem(1) }`         |
| rounded-b-3xl   | `{ borderBottomRightRadius: rem(1.5), borderBottomLeftRadius: rem(1.5) }`     |
| rounded-b-full  | `{ borderBottomRightRadius: 9999, borderBottomLeftRadius: 9999 }`             |
| rounded-b-lg    | `{ borderBottomRightRadius: rem(0.5), borderBottomLeftRadius: rem(0.5) }`     |
| rounded-b-md    | `{ borderBottomRightRadius: rem(0.375), borderBottomLeftRadius: rem(0.375) }` |
| rounded-b-none  | `{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }`                   |
| rounded-b-sm    | `{ borderBottomRightRadius: rem(0.125), borderBottomLeftRadius: rem(0.125) }` |
| rounded-b-xl    | `{ borderBottomRightRadius: rem(0.75), borderBottomLeftRadius: rem(0.75) }`   |
| rounded-bl      | `{ borderBottomLeftRadius: rem(0.25) }`                                       |
| rounded-bl-2xl  | `{ borderBottomLeftRadius: rem(1) }`                                          |
| rounded-bl-3xl  | `{ borderBottomLeftRadius: rem(1.5) }`                                        |
| rounded-bl-full | `{ borderBottomLeftRadius: 9999 }`                                            |
| rounded-bl-lg   | `{ borderBottomLeftRadius: rem(0.5) }`                                        |
| rounded-bl-md   | `{ borderBottomLeftRadius: rem(0.375) }`                                      |
| rounded-bl-none | `{ borderBottomLeftRadius: 0 }`                                               |
| rounded-bl-sm   | `{ borderBottomLeftRadius: rem(0.125) }`                                      |
| rounded-bl-xl   | `{ borderBottomLeftRadius: rem(0.75) }`                                       |
| rounded-br      | `{ borderBottomRightRadius: rem(0.25) }`                                      |
| rounded-br-2xl  | `{ borderBottomRightRadius: rem(1) }`                                         |
| rounded-br-3xl  | `{ borderBottomRightRadius: rem(1.5) }`                                       |
| rounded-br-full | `{ borderBottomRightRadius: 9999 }`                                           |
| rounded-br-lg   | `{ borderBottomRightRadius: rem(0.5) }`                                       |
| rounded-br-md   | `{ borderBottomRightRadius: rem(0.375) }`                                     |
| rounded-br-none | `{ borderBottomRightRadius: 0 }`                                              |
| rounded-br-sm   | `{ borderBottomRightRadius: rem(0.125) }`                                     |
| rounded-br-xl   | `{ borderBottomRightRadius: rem(0.75) }`                                      |
| rounded-full    | `{ borderRadius: 9999 }`                                                      |
| rounded-l       | `{ borderTopLeftRadius: rem(0.25), borderBottomLeftRadius: rem(0.25) }`       |
| rounded-l-2xl   | `{ borderTopLeftRadius: rem(1), borderBottomLeftRadius: rem(1) }`             |
| rounded-l-3xl   | `{ borderTopLeftRadius: rem(1.5), borderBottomLeftRadius: rem(1.5) }`         |
| rounded-l-full  | `{ borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 }`                 |
| rounded-l-lg    | `{ borderTopLeftRadius: rem(0.5), borderBottomLeftRadius: rem(0.5) }`         |
| rounded-l-md    | `{ borderTopLeftRadius: rem(0.375), borderBottomLeftRadius: rem(0.375) }`     |
| rounded-l-none  | `{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }`                       |
| rounded-l-sm    | `{ borderTopLeftRadius: rem(0.125), borderBottomLeftRadius: rem(0.125) }`     |
| rounded-l-xl    | `{ borderTopLeftRadius: rem(0.75), borderBottomLeftRadius: rem(0.75) }`       |
| rounded-lg      | `{ borderRadius: rem(0.5) }`                                                  |
| rounded-md      | `{ borderRadius: rem(0.375) }`                                                |
| rounded-none    | `{ borderRadius: 0 }`                                                         |
| rounded-r       | `{ borderTopRightRadius: rem(0.25), borderBottomRightRadius: rem(0.25) }`     |
| rounded-r-2xl   | `{ borderTopRightRadius: rem(1), borderBottomRightRadius: rem(1) }`           |
| rounded-r-3xl   | `{ borderTopRightRadius: rem(1.5), borderBottomRightRadius: rem(1.5) }`       |
| rounded-r-full  | `{ borderTopRightRadius: 9999, borderBottomRightRadius: 9999 }`               |
| rounded-r-lg    | `{ borderTopRightRadius: rem(0.5), borderBottomRightRadius: rem(0.5) }`       |
| rounded-r-md    | `{ borderTopRightRadius: rem(0.375), borderBottomRightRadius: rem(0.375) }`   |
| rounded-r-none  | `{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }`                     |
| rounded-r-sm    | `{ borderTopRightRadius: rem(0.125), borderBottomRightRadius: rem(0.125) }`   |
| rounded-r-xl    | `{ borderTopRightRadius: rem(0.75), borderBottomRightRadius: rem(0.75) }`     |
| rounded-sm      | `{ borderRadius: rem(0.125) }`                                                |
| rounded-t       | `{ borderTopLeftRadius: rem(0.25), borderTopRightRadius: rem(0.25) }`         |
| rounded-t-2xl   | `{ borderTopLeftRadius: rem(1), borderTopRightRadius: rem(1) }`               |
| rounded-t-3xl   | `{ borderTopLeftRadius: rem(1.5), borderTopRightRadius: rem(1.5) }`           |
| rounded-t-full  | `{ borderTopLeftRadius: 9999, borderTopRightRadius: 9999 }`                   |
| rounded-t-lg    | `{ borderTopLeftRadius: rem(0.5), borderTopRightRadius: rem(0.5) }`           |
| rounded-t-md    | `{ borderTopLeftRadius: rem(0.375), borderTopRightRadius: rem(0.375) }`       |
| rounded-t-none  | `{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }`                         |
| rounded-t-sm    | `{ borderTopLeftRadius: rem(0.125), borderTopRightRadius: rem(0.125) }`       |
| rounded-t-xl    | `{ borderTopLeftRadius: rem(0.75), borderTopRightRadius: rem(0.75) }`         |
| rounded-te      | `{ borderTopEndRadius: rem(0.25) }`                                           |
| rounded-te-2xl  | `{ borderTopEndRadius: rem(1) }`                                              |
| rounded-te-3xl  | `{ borderTopEndRadius: rem(1.5) }`                                            |
| rounded-te-full | `{ borderTopEndRadius: 9999 }`                                                |
| rounded-te-lg   | `{ borderTopEndRadius: rem(0.5) }`                                            |
| rounded-te-md   | `{ borderTopEndRadius: rem(0.375) }`                                          |
| rounded-te-none | `{ borderTopEndRadius: 0 }`                                                   |
| rounded-te-sm   | `{ borderTopEndRadius: rem(0.125) }`                                          |
| rounded-te-xl   | `{ borderTopEndRadius: rem(0.75) }`                                           |
| rounded-tl      | `{ borderTopLeftRadius: rem(0.25) }`                                          |
| rounded-tl-2xl  | `{ borderTopLeftRadius: rem(1) }`                                             |
| rounded-tl-3xl  | `{ borderTopLeftRadius: rem(1.5) }`                                           |
| rounded-tl-full | `{ borderTopLeftRadius: 9999 }`                                               |
| rounded-tl-lg   | `{ borderTopLeftRadius: rem(0.5) }`                                           |
| rounded-tl-md   | `{ borderTopLeftRadius: rem(0.375) }`                                         |
| rounded-tl-none | `{ borderTopLeftRadius: 0 }`                                                  |
| rounded-tl-sm   | `{ borderTopLeftRadius: rem(0.125) }`                                         |
| rounded-tl-xl   | `{ borderTopLeftRadius: rem(0.75) }`                                          |
| rounded-tr      | `{ borderTopRightRadius: rem(0.25) }`                                         |
| rounded-tr-2xl  | `{ borderTopRightRadius: rem(1) }`                                            |
| rounded-tr-3xl  | `{ borderTopRightRadius: rem(1.5) }`                                          |
| rounded-tr-full | `{ borderTopRightRadius: 9999 }`                                              |
| rounded-tr-lg   | `{ borderTopRightRadius: rem(0.5) }`                                          |
| rounded-tr-md   | `{ borderTopRightRadius: rem(0.375) }`                                        |
| rounded-tr-none | `{ borderTopRightRadius: 0 }`                                                 |
| rounded-tr-sm   | `{ borderTopRightRadius: rem(0.125) }`                                        |
| rounded-tr-xl   | `{ borderTopRightRadius: rem(0.75) }`                                         |
| rounded-ts      | `{ borderTopStartRadius: rem(0.25) }`                                         |
| rounded-ts-2xl  | `{ borderTopStartRadius: rem(1) }`                                            |
| rounded-ts-3xl  | `{ borderTopStartRadius: rem(1.5) }`                                          |
| rounded-ts-full | `{ borderTopStartRadius: 9999 }`                                              |
| rounded-ts-lg   | `{ borderTopStartRadius: rem(0.5) }`                                          |
| rounded-ts-md   | `{ borderTopStartRadius: rem(0.375) }`                                        |
| rounded-ts-none | `{ borderTopStartRadius: 0 }`                                                 |
| rounded-ts-sm   | `{ borderTopStartRadius: rem(0.125) }`                                        |
| rounded-ts-xl   | `{ borderTopStartRadius: rem(0.75) }`                                         |
| rounded-xl      | `{ borderRadius: rem(0.75) }`                                                 |

</details>

### Border Style

| Name          | Style(s)                    |
| ------------- | --------------------------- |
| border-dashed | `{ borderStyle: "dashed" }` |
| border-dotted | `{ borderStyle: "dotted" }` |
| border-solid  | `{ borderStyle: "solid" }`  |

### Border Width

> _Tip:_ The following styles are generated based on `theme.borderWidth` values.

<details><summary>Show all styles</summary>

| Name       | Style(s)                   |
| ---------- | -------------------------- |
| border     | `{ borderWidth: 1 }`       |
| border-0   | `{ borderWidth: 0 }`       |
| border-2   | `{ borderWidth: 2 }`       |
| border-4   | `{ borderWidth: 4 }`       |
| border-8   | `{ borderWidth: 8 }`       |
| border-b   | `{ borderBottomWidth: 1 }` |
| border-b-0 | `{ borderBottomWidth: 0 }` |
| border-b-2 | `{ borderBottomWidth: 2 }` |
| border-b-4 | `{ borderBottomWidth: 4 }` |
| border-b-8 | `{ borderBottomWidth: 8 }` |
| border-e   | `{ borderEndWidth: 1 }`    |
| border-e-0 | `{ borderEndWidth: 0 }`    |
| border-e-2 | `{ borderEndWidth: 2 }`    |
| border-e-4 | `{ borderEndWidth: 4 }`    |
| border-e-8 | `{ borderEndWidth: 8 }`    |
| border-l   | `{ borderLeftWidth: 1 }`   |
| border-l-0 | `{ borderLeftWidth: 0 }`   |
| border-l-2 | `{ borderLeftWidth: 2 }`   |
| border-l-4 | `{ borderLeftWidth: 4 }`   |
| border-l-8 | `{ borderLeftWidth: 8 }`   |
| border-r   | `{ borderRightWidth: 1 }`  |
| border-r-0 | `{ borderRightWidth: 0 }`  |
| border-r-2 | `{ borderRightWidth: 2 }`  |
| border-r-4 | `{ borderRightWidth: 4 }`  |
| border-r-8 | `{ borderRightWidth: 8 }`  |
| border-s   | `{ borderStartWidth: 1 }`  |
| border-s-0 | `{ borderStartWidth: 0 }`  |
| border-s-2 | `{ borderStartWidth: 2 }`  |
| border-s-4 | `{ borderStartWidth: 4 }`  |
| border-s-8 | `{ borderStartWidth: 8 }`  |
| border-t   | `{ borderTopWidth: 1 }`    |
| border-t-0 | `{ borderTopWidth: 0 }`    |
| border-t-2 | `{ borderTopWidth: 2 }`    |
| border-t-4 | `{ borderTopWidth: 4 }`    |
| border-t-8 | `{ borderTopWidth: 8 }`    |

</details>

### Background Color

> _Tip:_ The following styles are generated based on `theme.backgroundColor` values.

<details><summary>Show all styles</summary>

| Name           | Style(s)                             |
| -------------- | ------------------------------------ |
| bg-black       | `{ backgroundColor: "black" }`       |
| bg-blue-100    | `{ backgroundColor: "#ebf8ff" }`     |
| bg-blue-200    | `{ backgroundColor: "#bee3f8" }`     |
| bg-blue-300    | `{ backgroundColor: "#90cdf4" }`     |
| bg-blue-400    | `{ backgroundColor: "#63b3ed" }`     |
| bg-blue-500    | `{ backgroundColor: "#4299e1" }`     |
| bg-blue-600    | `{ backgroundColor: "#3182ce" }`     |
| bg-blue-700    | `{ backgroundColor: "#2b6cb0" }`     |
| bg-blue-800    | `{ backgroundColor: "#2c5282" }`     |
| bg-blue-900    | `{ backgroundColor: "#2a4365" }`     |
| bg-gray-100    | `{ backgroundColor: "#f7fafc" }`     |
| bg-gray-200    | `{ backgroundColor: "#edf2f7" }`     |
| bg-gray-300    | `{ backgroundColor: "#e2e8f0" }`     |
| bg-gray-400    | `{ backgroundColor: "#cbd5e0" }`     |
| bg-gray-500    | `{ backgroundColor: "#a0aec0" }`     |
| bg-gray-600    | `{ backgroundColor: "#718096" }`     |
| bg-gray-700    | `{ backgroundColor: "#4a5568" }`     |
| bg-gray-800    | `{ backgroundColor: "#2d3748" }`     |
| bg-gray-900    | `{ backgroundColor: "#1a202c" }`     |
| bg-green-100   | `{ backgroundColor: "#f0fff4" }`     |
| bg-green-200   | `{ backgroundColor: "#c6f6d5" }`     |
| bg-green-300   | `{ backgroundColor: "#9ae6b4" }`     |
| bg-green-400   | `{ backgroundColor: "#68d391" }`     |
| bg-green-500   | `{ backgroundColor: "#48bb78" }`     |
| bg-green-600   | `{ backgroundColor: "#38a169" }`     |
| bg-green-700   | `{ backgroundColor: "#2f855a" }`     |
| bg-green-800   | `{ backgroundColor: "#276749" }`     |
| bg-green-900   | `{ backgroundColor: "#22543d" }`     |
| bg-indigo-100  | `{ backgroundColor: "#ebf4ff" }`     |
| bg-indigo-200  | `{ backgroundColor: "#c3dafe" }`     |
| bg-indigo-300  | `{ backgroundColor: "#a3bffa" }`     |
| bg-indigo-400  | `{ backgroundColor: "#7f9cf5" }`     |
| bg-indigo-500  | `{ backgroundColor: "#667eea" }`     |
| bg-indigo-600  | `{ backgroundColor: "#5a67d8" }`     |
| bg-indigo-700  | `{ backgroundColor: "#4c51bf" }`     |
| bg-indigo-800  | `{ backgroundColor: "#434190" }`     |
| bg-indigo-900  | `{ backgroundColor: "#3c366b" }`     |
| bg-orange-100  | `{ backgroundColor: "#fffaf0" }`     |
| bg-orange-200  | `{ backgroundColor: "#feebc8" }`     |
| bg-orange-300  | `{ backgroundColor: "#fbd38d" }`     |
| bg-orange-400  | `{ backgroundColor: "#f6ad55" }`     |
| bg-orange-500  | `{ backgroundColor: "#ed8936" }`     |
| bg-orange-600  | `{ backgroundColor: "#dd6b20" }`     |
| bg-orange-700  | `{ backgroundColor: "#c05621" }`     |
| bg-orange-800  | `{ backgroundColor: "#9c4221" }`     |
| bg-orange-900  | `{ backgroundColor: "#7b341e" }`     |
| bg-pink-100    | `{ backgroundColor: "#fff5f7" }`     |
| bg-pink-200    | `{ backgroundColor: "#fed7e2" }`     |
| bg-pink-300    | `{ backgroundColor: "#fbb6ce" }`     |
| bg-pink-400    | `{ backgroundColor: "#f687b3" }`     |
| bg-pink-500    | `{ backgroundColor: "#ed64a6" }`     |
| bg-pink-600    | `{ backgroundColor: "#d53f8c" }`     |
| bg-pink-700    | `{ backgroundColor: "#b83280" }`     |
| bg-pink-800    | `{ backgroundColor: "#97266d" }`     |
| bg-pink-900    | `{ backgroundColor: "#702459" }`     |
| bg-purple-100  | `{ backgroundColor: "#faf5ff" }`     |
| bg-purple-200  | `{ backgroundColor: "#e9d8fd" }`     |
| bg-purple-300  | `{ backgroundColor: "#d6bcfa" }`     |
| bg-purple-400  | `{ backgroundColor: "#b794f4" }`     |
| bg-purple-500  | `{ backgroundColor: "#9f7aea" }`     |
| bg-purple-600  | `{ backgroundColor: "#805ad5" }`     |
| bg-purple-700  | `{ backgroundColor: "#6b46c1" }`     |
| bg-purple-800  | `{ backgroundColor: "#553c9a" }`     |
| bg-purple-900  | `{ backgroundColor: "#44337a" }`     |
| bg-red-100     | `{ backgroundColor: "#fff5f5" }`     |
| bg-red-200     | `{ backgroundColor: "#fed7d7" }`     |
| bg-red-300     | `{ backgroundColor: "#feb2b2" }`     |
| bg-red-400     | `{ backgroundColor: "#fc8181" }`     |
| bg-red-500     | `{ backgroundColor: "#f56565" }`     |
| bg-red-600     | `{ backgroundColor: "#e53e3e" }`     |
| bg-red-700     | `{ backgroundColor: "#c53030" }`     |
| bg-red-800     | `{ backgroundColor: "#9b2c2c" }`     |
| bg-red-900     | `{ backgroundColor: "#742a2a" }`     |
| bg-teal-100    | `{ backgroundColor: "#e6fffa" }`     |
| bg-teal-200    | `{ backgroundColor: "#b2f5ea" }`     |
| bg-teal-300    | `{ backgroundColor: "#81e6d9" }`     |
| bg-teal-400    | `{ backgroundColor: "#4fd1c5" }`     |
| bg-teal-500    | `{ backgroundColor: "#38b2ac" }`     |
| bg-teal-600    | `{ backgroundColor: "#319795" }`     |
| bg-teal-700    | `{ backgroundColor: "#2c7a7b" }`     |
| bg-teal-800    | `{ backgroundColor: "#285e61" }`     |
| bg-teal-900    | `{ backgroundColor: "#234e52" }`     |
| bg-transparent | `{ backgroundColor: "transparent" }` |
| bg-white       | `{ backgroundColor: "white" }`       |
| bg-yellow-100  | `{ backgroundColor: "#fffff0" }`     |
| bg-yellow-200  | `{ backgroundColor: "#fefcbf" }`     |
| bg-yellow-300  | `{ backgroundColor: "#faf089" }`     |
| bg-yellow-400  | `{ backgroundColor: "#f6e05e" }`     |
| bg-yellow-500  | `{ backgroundColor: "#ecc94b" }`     |
| bg-yellow-600  | `{ backgroundColor: "#d69e2e" }`     |
| bg-yellow-700  | `{ backgroundColor: "#b7791f" }`     |
| bg-yellow-800  | `{ backgroundColor: "#975a16" }`     |
| bg-yellow-900  | `{ backgroundColor: "#744210" }`     |

</details>

### Letter Spacing

> _Tip:_ The following styles are generated based on `theme.letterSpacing` values.

| Name           | Style(s)                         |
| -------------- | -------------------------------- |
| letter-normal  | `{ letterSpacing: 0 }`           |
| letter-tight   | `{ letterSpacing: rem(-0.025) }` |
| letter-tighter | `{ letterSpacing: rem(-0.05) }`  |
| letter-wide    | `{ letterSpacing: rem(0.025) }`  |
| letter-wider   | `{ letterSpacing: rem(0.05) }`   |
| letter-widest  | `{ letterSpacing: rem(0.1) }`    |

### Text Align

| Name         | Style(s)                   |
| ------------ | -------------------------- |
| text-auto    | `{ textAlign: "auto" }`    |
| text-center  | `{ textAlign: "center" }`  |
| text-justify | `{ textAlign: "justify" }` |
| text-left    | `{ textAlign: "left" }`    |
| text-right   | `{ textAlign: "right" }`   |

### Text Align (Vertical)

| Name          | Style(s)                          |
| ------------- | --------------------------------- |
| text-v-auto   | `{ textAlignVertical: "auto" }`   |
| text-v-bottom | `{ textAlignVertical: "bottom" }` |
| text-v-center | `{ textAlignVertical: "center" }` |
| text-v-top    | `{ textAlignVertical: "top" }`    |

### Text Color

> _Tip:_ The following styles are generated based on `theme.textColor` values.

<details><summary>Show all styles</summary>

| Name             | Style(s)                   |
| ---------------- | -------------------------- |
| text-black       | `{ color: "black" }`       |
| text-blue-100    | `{ color: "#ebf8ff" }`     |
| text-blue-200    | `{ color: "#bee3f8" }`     |
| text-blue-300    | `{ color: "#90cdf4" }`     |
| text-blue-400    | `{ color: "#63b3ed" }`     |
| text-blue-500    | `{ color: "#4299e1" }`     |
| text-blue-600    | `{ color: "#3182ce" }`     |
| text-blue-700    | `{ color: "#2b6cb0" }`     |
| text-blue-800    | `{ color: "#2c5282" }`     |
| text-blue-900    | `{ color: "#2a4365" }`     |
| text-gray-100    | `{ color: "#f7fafc" }`     |
| text-gray-200    | `{ color: "#edf2f7" }`     |
| text-gray-300    | `{ color: "#e2e8f0" }`     |
| text-gray-400    | `{ color: "#cbd5e0" }`     |
| text-gray-500    | `{ color: "#a0aec0" }`     |
| text-gray-600    | `{ color: "#718096" }`     |
| text-gray-700    | `{ color: "#4a5568" }`     |
| text-gray-800    | `{ color: "#2d3748" }`     |
| text-gray-900    | `{ color: "#1a202c" }`     |
| text-green-100   | `{ color: "#f0fff4" }`     |
| text-green-200   | `{ color: "#c6f6d5" }`     |
| text-green-300   | `{ color: "#9ae6b4" }`     |
| text-green-400   | `{ color: "#68d391" }`     |
| text-green-500   | `{ color: "#48bb78" }`     |
| text-green-600   | `{ color: "#38a169" }`     |
| text-green-700   | `{ color: "#2f855a" }`     |
| text-green-800   | `{ color: "#276749" }`     |
| text-green-900   | `{ color: "#22543d" }`     |
| text-indigo-100  | `{ color: "#ebf4ff" }`     |
| text-indigo-200  | `{ color: "#c3dafe" }`     |
| text-indigo-300  | `{ color: "#a3bffa" }`     |
| text-indigo-400  | `{ color: "#7f9cf5" }`     |
| text-indigo-500  | `{ color: "#667eea" }`     |
| text-indigo-600  | `{ color: "#5a67d8" }`     |
| text-indigo-700  | `{ color: "#4c51bf" }`     |
| text-indigo-800  | `{ color: "#434190" }`     |
| text-indigo-900  | `{ color: "#3c366b" }`     |
| text-orange-100  | `{ color: "#fffaf0" }`     |
| text-orange-200  | `{ color: "#feebc8" }`     |
| text-orange-300  | `{ color: "#fbd38d" }`     |
| text-orange-400  | `{ color: "#f6ad55" }`     |
| text-orange-500  | `{ color: "#ed8936" }`     |
| text-orange-600  | `{ color: "#dd6b20" }`     |
| text-orange-700  | `{ color: "#c05621" }`     |
| text-orange-800  | `{ color: "#9c4221" }`     |
| text-orange-900  | `{ color: "#7b341e" }`     |
| text-pink-100    | `{ color: "#fff5f7" }`     |
| text-pink-200    | `{ color: "#fed7e2" }`     |
| text-pink-300    | `{ color: "#fbb6ce" }`     |
| text-pink-400    | `{ color: "#f687b3" }`     |
| text-pink-500    | `{ color: "#ed64a6" }`     |
| text-pink-600    | `{ color: "#d53f8c" }`     |
| text-pink-700    | `{ color: "#b83280" }`     |
| text-pink-800    | `{ color: "#97266d" }`     |
| text-pink-900    | `{ color: "#702459" }`     |
| text-purple-100  | `{ color: "#faf5ff" }`     |
| text-purple-200  | `{ color: "#e9d8fd" }`     |
| text-purple-300  | `{ color: "#d6bcfa" }`     |
| text-purple-400  | `{ color: "#b794f4" }`     |
| text-purple-500  | `{ color: "#9f7aea" }`     |
| text-purple-600  | `{ color: "#805ad5" }`     |
| text-purple-700  | `{ color: "#6b46c1" }`     |
| text-purple-800  | `{ color: "#553c9a" }`     |
| text-purple-900  | `{ color: "#44337a" }`     |
| text-red-100     | `{ color: "#fff5f5" }`     |
| text-red-200     | `{ color: "#fed7d7" }`     |
| text-red-300     | `{ color: "#feb2b2" }`     |
| text-red-400     | `{ color: "#fc8181" }`     |
| text-red-500     | `{ color: "#f56565" }`     |
| text-red-600     | `{ color: "#e53e3e" }`     |
| text-red-700     | `{ color: "#c53030" }`     |
| text-red-800     | `{ color: "#9b2c2c" }`     |
| text-red-900     | `{ color: "#742a2a" }`     |
| text-teal-100    | `{ color: "#e6fffa" }`     |
| text-teal-200    | `{ color: "#b2f5ea" }`     |
| text-teal-300    | `{ color: "#81e6d9" }`     |
| text-teal-400    | `{ color: "#4fd1c5" }`     |
| text-teal-500    | `{ color: "#38b2ac" }`     |
| text-teal-600    | `{ color: "#319795" }`     |
| text-teal-700    | `{ color: "#2c7a7b" }`     |
| text-teal-800    | `{ color: "#285e61" }`     |
| text-teal-900    | `{ color: "#234e52" }`     |
| text-transparent | `{ color: "transparent" }` |
| text-white       | `{ color: "white" }`       |
| text-yellow-100  | `{ color: "#fffff0" }`     |
| text-yellow-200  | `{ color: "#fefcbf" }`     |
| text-yellow-300  | `{ color: "#faf089" }`     |
| text-yellow-400  | `{ color: "#f6e05e" }`     |
| text-yellow-500  | `{ color: "#ecc94b" }`     |
| text-yellow-600  | `{ color: "#d69e2e" }`     |
| text-yellow-700  | `{ color: "#b7791f" }`     |
| text-yellow-800  | `{ color: "#975a16" }`     |
| text-yellow-900  | `{ color: "#744210" }`     |

</details>

### Text Decoration

| Name         | Style(s)                                 |
| ------------ | ---------------------------------------- |
| line-through | `{ textDecorationLine: "line-through" }` |
| no-underline | `{ textDecorationLine: "none" }`         |
| underline    | `{ textDecorationLine: "underline" }`    |

### Text Transform

| Name        | Style(s)                          |
| ----------- | --------------------------------- |
| capitalize  | `{ textTransform: "capitalize" }` |
| lowercase   | `{ textTransform: "lowercase" }`  |
| normal-case | `{ textTransform: "none" }`       |
| uppercase   | `{ textTransform: "uppercase" }`  |

### Margin

> _Tip:_ The following styles are generated based on `theme.margin` values.

<details><summary>Show all styles</summary>

| Name   | Style(s)                             |
| ------ | ------------------------------------ |
| -m-0   | `{ margin: 0 }`                      |
| -m-1   | `{ margin: "-rem(0.25)" }`           |
| -m-10  | `{ margin: "-rem(2.5)" }`            |
| -m-12  | `{ margin: "-rem(3)" }`              |
| -m-16  | `{ margin: "-rem(4)" }`              |
| -m-2   | `{ margin: "-rem(0.5)" }`            |
| -m-20  | `{ margin: "-rem(5)" }`              |
| -m-24  | `{ margin: "-rem(6)" }`              |
| -m-3   | `{ margin: "-rem(0.75)" }`           |
| -m-32  | `{ margin: "-rem(8)" }`              |
| -m-4   | `{ margin: "-rem(1)" }`              |
| -m-40  | `{ margin: "-rem(10)" }`             |
| -m-48  | `{ margin: "-rem(12)" }`             |
| -m-5   | `{ margin: "-rem(1.25)" }`           |
| -m-56  | `{ margin: "-rem(14)" }`             |
| -m-6   | `{ margin: "-rem(1.5)" }`            |
| -m-64  | `{ margin: "-rem(16)" }`             |
| -m-8   | `{ margin: "-rem(2)" }`              |
| -m-px  | `{ margin: -1 }`                     |
| -mb-0  | `{ marginBottom: 0 }`                |
| -mb-1  | `{ marginBottom: "-rem(0.25)" }`     |
| -mb-10 | `{ marginBottom: "-rem(2.5)" }`      |
| -mb-12 | `{ marginBottom: "-rem(3)" }`        |
| -mb-16 | `{ marginBottom: "-rem(4)" }`        |
| -mb-2  | `{ marginBottom: "-rem(0.5)" }`      |
| -mb-20 | `{ marginBottom: "-rem(5)" }`        |
| -mb-24 | `{ marginBottom: "-rem(6)" }`        |
| -mb-3  | `{ marginBottom: "-rem(0.75)" }`     |
| -mb-32 | `{ marginBottom: "-rem(8)" }`        |
| -mb-4  | `{ marginBottom: "-rem(1)" }`        |
| -mb-40 | `{ marginBottom: "-rem(10)" }`       |
| -mb-48 | `{ marginBottom: "-rem(12)" }`       |
| -mb-5  | `{ marginBottom: "-rem(1.25)" }`     |
| -mb-56 | `{ marginBottom: "-rem(14)" }`       |
| -mb-6  | `{ marginBottom: "-rem(1.5)" }`      |
| -mb-64 | `{ marginBottom: "-rem(16)" }`       |
| -mb-8  | `{ marginBottom: "-rem(2)" }`        |
| -mb-px | `{ marginBottom: -1 }`               |
| -me-0  | `{ marginEnd: 0 }`                   |
| -me-1  | `{ marginEnd: "-rem(0.25)" }`        |
| -me-10 | `{ marginEnd: "-rem(2.5)" }`         |
| -me-12 | `{ marginEnd: "-rem(3)" }`           |
| -me-16 | `{ marginEnd: "-rem(4)" }`           |
| -me-2  | `{ marginEnd: "-rem(0.5)" }`         |
| -me-20 | `{ marginEnd: "-rem(5)" }`           |
| -me-24 | `{ marginEnd: "-rem(6)" }`           |
| -me-3  | `{ marginEnd: "-rem(0.75)" }`        |
| -me-32 | `{ marginEnd: "-rem(8)" }`           |
| -me-4  | `{ marginEnd: "-rem(1)" }`           |
| -me-40 | `{ marginEnd: "-rem(10)" }`          |
| -me-48 | `{ marginEnd: "-rem(12)" }`          |
| -me-5  | `{ marginEnd: "-rem(1.25)" }`        |
| -me-56 | `{ marginEnd: "-rem(14)" }`          |
| -me-6  | `{ marginEnd: "-rem(1.5)" }`         |
| -me-64 | `{ marginEnd: "-rem(16)" }`          |
| -me-8  | `{ marginEnd: "-rem(2)" }`           |
| -me-px | `{ marginEnd: -1 }`                  |
| -ml-0  | `{ marginLeft: 0 }`                  |
| -ml-1  | `{ marginLeft: "-rem(0.25)" }`       |
| -ml-10 | `{ marginLeft: "-rem(2.5)" }`        |
| -ml-12 | `{ marginLeft: "-rem(3)" }`          |
| -ml-16 | `{ marginLeft: "-rem(4)" }`          |
| -ml-2  | `{ marginLeft: "-rem(0.5)" }`        |
| -ml-20 | `{ marginLeft: "-rem(5)" }`          |
| -ml-24 | `{ marginLeft: "-rem(6)" }`          |
| -ml-3  | `{ marginLeft: "-rem(0.75)" }`       |
| -ml-32 | `{ marginLeft: "-rem(8)" }`          |
| -ml-4  | `{ marginLeft: "-rem(1)" }`          |
| -ml-40 | `{ marginLeft: "-rem(10)" }`         |
| -ml-48 | `{ marginLeft: "-rem(12)" }`         |
| -ml-5  | `{ marginLeft: "-rem(1.25)" }`       |
| -ml-56 | `{ marginLeft: "-rem(14)" }`         |
| -ml-6  | `{ marginLeft: "-rem(1.5)" }`        |
| -ml-64 | `{ marginLeft: "-rem(16)" }`         |
| -ml-8  | `{ marginLeft: "-rem(2)" }`          |
| -ml-px | `{ marginLeft: -1 }`                 |
| -mr-0  | `{ marginRight: 0 }`                 |
| -mr-1  | `{ marginRight: "-rem(0.25)" }`      |
| -mr-10 | `{ marginRight: "-rem(2.5)" }`       |
| -mr-12 | `{ marginRight: "-rem(3)" }`         |
| -mr-16 | `{ marginRight: "-rem(4)" }`         |
| -mr-2  | `{ marginRight: "-rem(0.5)" }`       |
| -mr-20 | `{ marginRight: "-rem(5)" }`         |
| -mr-24 | `{ marginRight: "-rem(6)" }`         |
| -mr-3  | `{ marginRight: "-rem(0.75)" }`      |
| -mr-32 | `{ marginRight: "-rem(8)" }`         |
| -mr-4  | `{ marginRight: "-rem(1)" }`         |
| -mr-40 | `{ marginRight: "-rem(10)" }`        |
| -mr-48 | `{ marginRight: "-rem(12)" }`        |
| -mr-5  | `{ marginRight: "-rem(1.25)" }`      |
| -mr-56 | `{ marginRight: "-rem(14)" }`        |
| -mr-6  | `{ marginRight: "-rem(1.5)" }`       |
| -mr-64 | `{ marginRight: "-rem(16)" }`        |
| -mr-8  | `{ marginRight: "-rem(2)" }`         |
| -mr-px | `{ marginRight: -1 }`                |
| -ms-0  | `{ marginStart: 0 }`                 |
| -ms-1  | `{ marginStart: "-rem(0.25)" }`      |
| -ms-10 | `{ marginStart: "-rem(2.5)" }`       |
| -ms-12 | `{ marginStart: "-rem(3)" }`         |
| -ms-16 | `{ marginStart: "-rem(4)" }`         |
| -ms-2  | `{ marginStart: "-rem(0.5)" }`       |
| -ms-20 | `{ marginStart: "-rem(5)" }`         |
| -ms-24 | `{ marginStart: "-rem(6)" }`         |
| -ms-3  | `{ marginStart: "-rem(0.75)" }`      |
| -ms-32 | `{ marginStart: "-rem(8)" }`         |
| -ms-4  | `{ marginStart: "-rem(1)" }`         |
| -ms-40 | `{ marginStart: "-rem(10)" }`        |
| -ms-48 | `{ marginStart: "-rem(12)" }`        |
| -ms-5  | `{ marginStart: "-rem(1.25)" }`      |
| -ms-56 | `{ marginStart: "-rem(14)" }`        |
| -ms-6  | `{ marginStart: "-rem(1.5)" }`       |
| -ms-64 | `{ marginStart: "-rem(16)" }`        |
| -ms-8  | `{ marginStart: "-rem(2)" }`         |
| -ms-px | `{ marginStart: -1 }`                |
| -mt-0  | `{ marginTop: 0 }`                   |
| -mt-1  | `{ marginTop: "-rem(0.25)" }`        |
| -mt-10 | `{ marginTop: "-rem(2.5)" }`         |
| -mt-12 | `{ marginTop: "-rem(3)" }`           |
| -mt-16 | `{ marginTop: "-rem(4)" }`           |
| -mt-2  | `{ marginTop: "-rem(0.5)" }`         |
| -mt-20 | `{ marginTop: "-rem(5)" }`           |
| -mt-24 | `{ marginTop: "-rem(6)" }`           |
| -mt-3  | `{ marginTop: "-rem(0.75)" }`        |
| -mt-32 | `{ marginTop: "-rem(8)" }`           |
| -mt-4  | `{ marginTop: "-rem(1)" }`           |
| -mt-40 | `{ marginTop: "-rem(10)" }`          |
| -mt-48 | `{ marginTop: "-rem(12)" }`          |
| -mt-5  | `{ marginTop: "-rem(1.25)" }`        |
| -mt-56 | `{ marginTop: "-rem(14)" }`          |
| -mt-6  | `{ marginTop: "-rem(1.5)" }`         |
| -mt-64 | `{ marginTop: "-rem(16)" }`          |
| -mt-8  | `{ marginTop: "-rem(2)" }`           |
| -mt-px | `{ marginTop: -1 }`                  |
| -mx-0  | `{ marginHorizontal: 0 }`            |
| -mx-1  | `{ marginHorizontal: "-rem(0.25)" }` |
| -mx-10 | `{ marginHorizontal: "-rem(2.5)" }`  |
| -mx-12 | `{ marginHorizontal: "-rem(3)" }`    |
| -mx-16 | `{ marginHorizontal: "-rem(4)" }`    |
| -mx-2  | `{ marginHorizontal: "-rem(0.5)" }`  |
| -mx-20 | `{ marginHorizontal: "-rem(5)" }`    |
| -mx-24 | `{ marginHorizontal: "-rem(6)" }`    |
| -mx-3  | `{ marginHorizontal: "-rem(0.75)" }` |
| -mx-32 | `{ marginHorizontal: "-rem(8)" }`    |
| -mx-4  | `{ marginHorizontal: "-rem(1)" }`    |
| -mx-40 | `{ marginHorizontal: "-rem(10)" }`   |
| -mx-48 | `{ marginHorizontal: "-rem(12)" }`   |
| -mx-5  | `{ marginHorizontal: "-rem(1.25)" }` |
| -mx-56 | `{ marginHorizontal: "-rem(14)" }`   |
| -mx-6  | `{ marginHorizontal: "-rem(1.5)" }`  |
| -mx-64 | `{ marginHorizontal: "-rem(16)" }`   |
| -mx-8  | `{ marginHorizontal: "-rem(2)" }`    |
| -mx-px | `{ marginHorizontal: -1 }`           |
| -my-0  | `{ marginVertical: 0 }`              |
| -my-1  | `{ marginVertical: "-rem(0.25)" }`   |
| -my-10 | `{ marginVertical: "-rem(2.5)" }`    |
| -my-12 | `{ marginVertical: "-rem(3)" }`      |
| -my-16 | `{ marginVertical: "-rem(4)" }`      |
| -my-2  | `{ marginVertical: "-rem(0.5)" }`    |
| -my-20 | `{ marginVertical: "-rem(5)" }`      |
| -my-24 | `{ marginVertical: "-rem(6)" }`      |
| -my-3  | `{ marginVertical: "-rem(0.75)" }`   |
| -my-32 | `{ marginVertical: "-rem(8)" }`      |
| -my-4  | `{ marginVertical: "-rem(1)" }`      |
| -my-40 | `{ marginVertical: "-rem(10)" }`     |
| -my-48 | `{ marginVertical: "-rem(12)" }`     |
| -my-5  | `{ marginVertical: "-rem(1.25)" }`   |
| -my-56 | `{ marginVertical: "-rem(14)" }`     |
| -my-6  | `{ marginVertical: "-rem(1.5)" }`    |
| -my-64 | `{ marginVertical: "-rem(16)" }`     |
| -my-8  | `{ marginVertical: "-rem(2)" }`      |
| -my-px | `{ marginVertical: -1 }`             |
| m-0    | `{ margin: 0 }`                      |
| m-1    | `{ margin: rem(0.25) }`              |
| m-10   | `{ margin: rem(2.5) }`               |
| m-12   | `{ margin: rem(3) }`                 |
| m-16   | `{ margin: rem(4) }`                 |
| m-2    | `{ margin: rem(0.5) }`               |
| m-20   | `{ margin: rem(5) }`                 |
| m-24   | `{ margin: rem(6) }`                 |
| m-3    | `{ margin: rem(0.75) }`              |
| m-32   | `{ margin: rem(8) }`                 |
| m-4    | `{ margin: rem(1) }`                 |
| m-40   | `{ margin: rem(10) }`                |
| m-48   | `{ margin: rem(12) }`                |
| m-5    | `{ margin: rem(1.25) }`              |
| m-56   | `{ margin: rem(14) }`                |
| m-6    | `{ margin: rem(1.5) }`               |
| m-64   | `{ margin: rem(16) }`                |
| m-8    | `{ margin: rem(2) }`                 |
| m-px   | `{ margin: 1 }`                      |
| mb-0   | `{ marginBottom: 0 }`                |
| mb-1   | `{ marginBottom: rem(0.25) }`        |
| mb-10  | `{ marginBottom: rem(2.5) }`         |
| mb-12  | `{ marginBottom: rem(3) }`           |
| mb-16  | `{ marginBottom: rem(4) }`           |
| mb-2   | `{ marginBottom: rem(0.5) }`         |
| mb-20  | `{ marginBottom: rem(5) }`           |
| mb-24  | `{ marginBottom: rem(6) }`           |
| mb-3   | `{ marginBottom: rem(0.75) }`        |
| mb-32  | `{ marginBottom: rem(8) }`           |
| mb-4   | `{ marginBottom: rem(1) }`           |
| mb-40  | `{ marginBottom: rem(10) }`          |
| mb-48  | `{ marginBottom: rem(12) }`          |
| mb-5   | `{ marginBottom: rem(1.25) }`        |
| mb-56  | `{ marginBottom: rem(14) }`          |
| mb-6   | `{ marginBottom: rem(1.5) }`         |
| mb-64  | `{ marginBottom: rem(16) }`          |
| mb-8   | `{ marginBottom: rem(2) }`           |
| mb-px  | `{ marginBottom: 1 }`                |
| me-0   | `{ marginEnd: 0 }`                   |
| me-1   | `{ marginEnd: rem(0.25) }`           |
| me-10  | `{ marginEnd: rem(2.5) }`            |
| me-12  | `{ marginEnd: rem(3) }`              |
| me-16  | `{ marginEnd: rem(4) }`              |
| me-2   | `{ marginEnd: rem(0.5) }`            |
| me-20  | `{ marginEnd: rem(5) }`              |
| me-24  | `{ marginEnd: rem(6) }`              |
| me-3   | `{ marginEnd: rem(0.75) }`           |
| me-32  | `{ marginEnd: rem(8) }`              |
| me-4   | `{ marginEnd: rem(1) }`              |
| me-40  | `{ marginEnd: rem(10) }`             |
| me-48  | `{ marginEnd: rem(12) }`             |
| me-5   | `{ marginEnd: rem(1.25) }`           |
| me-56  | `{ marginEnd: rem(14) }`             |
| me-6   | `{ marginEnd: rem(1.5) }`            |
| me-64  | `{ marginEnd: rem(16) }`             |
| me-8   | `{ marginEnd: rem(2) }`              |
| me-px  | `{ marginEnd: 1 }`                   |
| ml-0   | `{ marginLeft: 0 }`                  |
| ml-1   | `{ marginLeft: rem(0.25) }`          |
| ml-10  | `{ marginLeft: rem(2.5) }`           |
| ml-12  | `{ marginLeft: rem(3) }`             |
| ml-16  | `{ marginLeft: rem(4) }`             |
| ml-2   | `{ marginLeft: rem(0.5) }`           |
| ml-20  | `{ marginLeft: rem(5) }`             |
| ml-24  | `{ marginLeft: rem(6) }`             |
| ml-3   | `{ marginLeft: rem(0.75) }`          |
| ml-32  | `{ marginLeft: rem(8) }`             |
| ml-4   | `{ marginLeft: rem(1) }`             |
| ml-40  | `{ marginLeft: rem(10) }`            |
| ml-48  | `{ marginLeft: rem(12) }`            |
| ml-5   | `{ marginLeft: rem(1.25) }`          |
| ml-56  | `{ marginLeft: rem(14) }`            |
| ml-6   | `{ marginLeft: rem(1.5) }`           |
| ml-64  | `{ marginLeft: rem(16) }`            |
| ml-8   | `{ marginLeft: rem(2) }`             |
| ml-px  | `{ marginLeft: 1 }`                  |
| mr-0   | `{ marginRight: 0 }`                 |
| mr-1   | `{ marginRight: rem(0.25) }`         |
| mr-10  | `{ marginRight: rem(2.5) }`          |
| mr-12  | `{ marginRight: rem(3) }`            |
| mr-16  | `{ marginRight: rem(4) }`            |
| mr-2   | `{ marginRight: rem(0.5) }`          |
| mr-20  | `{ marginRight: rem(5) }`            |
| mr-24  | `{ marginRight: rem(6) }`            |
| mr-3   | `{ marginRight: rem(0.75) }`         |
| mr-32  | `{ marginRight: rem(8) }`            |
| mr-4   | `{ marginRight: rem(1) }`            |
| mr-40  | `{ marginRight: rem(10) }`           |
| mr-48  | `{ marginRight: rem(12) }`           |
| mr-5   | `{ marginRight: rem(1.25) }`         |
| mr-56  | `{ marginRight: rem(14) }`           |
| mr-6   | `{ marginRight: rem(1.5) }`          |
| mr-64  | `{ marginRight: rem(16) }`           |
| mr-8   | `{ marginRight: rem(2) }`            |
| mr-px  | `{ marginRight: 1 }`                 |
| ms-0   | `{ marginStart: 0 }`                 |
| ms-1   | `{ marginStart: rem(0.25) }`         |
| ms-10  | `{ marginStart: rem(2.5) }`          |
| ms-12  | `{ marginStart: rem(3) }`            |
| ms-16  | `{ marginStart: rem(4) }`            |
| ms-2   | `{ marginStart: rem(0.5) }`          |
| ms-20  | `{ marginStart: rem(5) }`            |
| ms-24  | `{ marginStart: rem(6) }`            |
| ms-3   | `{ marginStart: rem(0.75) }`         |
| ms-32  | `{ marginStart: rem(8) }`            |
| ms-4   | `{ marginStart: rem(1) }`            |
| ms-40  | `{ marginStart: rem(10) }`           |
| ms-48  | `{ marginStart: rem(12) }`           |
| ms-5   | `{ marginStart: rem(1.25) }`         |
| ms-56  | `{ marginStart: rem(14) }`           |
| ms-6   | `{ marginStart: rem(1.5) }`          |
| ms-64  | `{ marginStart: rem(16) }`           |
| ms-8   | `{ marginStart: rem(2) }`            |
| ms-px  | `{ marginStart: 1 }`                 |
| mt-0   | `{ marginTop: 0 }`                   |
| mt-1   | `{ marginTop: rem(0.25) }`           |
| mt-10  | `{ marginTop: rem(2.5) }`            |
| mt-12  | `{ marginTop: rem(3) }`              |
| mt-16  | `{ marginTop: rem(4) }`              |
| mt-2   | `{ marginTop: rem(0.5) }`            |
| mt-20  | `{ marginTop: rem(5) }`              |
| mt-24  | `{ marginTop: rem(6) }`              |
| mt-3   | `{ marginTop: rem(0.75) }`           |
| mt-32  | `{ marginTop: rem(8) }`              |
| mt-4   | `{ marginTop: rem(1) }`              |
| mt-40  | `{ marginTop: rem(10) }`             |
| mt-48  | `{ marginTop: rem(12) }`             |
| mt-5   | `{ marginTop: rem(1.25) }`           |
| mt-56  | `{ marginTop: rem(14) }`             |
| mt-6   | `{ marginTop: rem(1.5) }`            |
| mt-64  | `{ marginTop: rem(16) }`             |
| mt-8   | `{ marginTop: rem(2) }`              |
| mt-px  | `{ marginTop: 1 }`                   |
| mx-0   | `{ marginHorizontal: 0 }`            |
| mx-1   | `{ marginHorizontal: rem(0.25) }`    |
| mx-10  | `{ marginHorizontal: rem(2.5) }`     |
| mx-12  | `{ marginHorizontal: rem(3) }`       |
| mx-16  | `{ marginHorizontal: rem(4) }`       |
| mx-2   | `{ marginHorizontal: rem(0.5) }`     |
| mx-20  | `{ marginHorizontal: rem(5) }`       |
| mx-24  | `{ marginHorizontal: rem(6) }`       |
| mx-3   | `{ marginHorizontal: rem(0.75) }`    |
| mx-32  | `{ marginHorizontal: rem(8) }`       |
| mx-4   | `{ marginHorizontal: rem(1) }`       |
| mx-40  | `{ marginHorizontal: rem(10) }`      |
| mx-48  | `{ marginHorizontal: rem(12) }`      |
| mx-5   | `{ marginHorizontal: rem(1.25) }`    |
| mx-56  | `{ marginHorizontal: rem(14) }`      |
| mx-6   | `{ marginHorizontal: rem(1.5) }`     |
| mx-64  | `{ marginHorizontal: rem(16) }`      |
| mx-8   | `{ marginHorizontal: rem(2) }`       |
| mx-px  | `{ marginHorizontal: 1 }`            |
| my-0   | `{ marginVertical: 0 }`              |
| my-1   | `{ marginVertical: rem(0.25) }`      |
| my-10  | `{ marginVertical: rem(2.5) }`       |
| my-12  | `{ marginVertical: rem(3) }`         |
| my-16  | `{ marginVertical: rem(4) }`         |
| my-2   | `{ marginVertical: rem(0.5) }`       |
| my-20  | `{ marginVertical: rem(5) }`         |
| my-24  | `{ marginVertical: rem(6) }`         |
| my-3   | `{ marginVertical: rem(0.75) }`      |
| my-32  | `{ marginVertical: rem(8) }`         |
| my-4   | `{ marginVertical: rem(1) }`         |
| my-40  | `{ marginVertical: rem(10) }`        |
| my-48  | `{ marginVertical: rem(12) }`        |
| my-5   | `{ marginVertical: rem(1.25) }`      |
| my-56  | `{ marginVertical: rem(14) }`        |
| my-6   | `{ marginVertical: rem(1.5) }`       |
| my-64  | `{ marginVertical: rem(16) }`        |
| my-8   | `{ marginVertical: rem(2) }`         |
| my-px  | `{ marginVertical: 1 }`              |

</details>

### Padding

> _Tip:_ The following styles are generated based on `theme.padding` values.

<details><summary>Show all styles</summary>

| Name  | Style(s)                           |
| ----- | ---------------------------------- |
| p-0   | `{ padding: 0 }`                   |
| p-1   | `{ padding: rem(0.25) }`           |
| p-10  | `{ padding: rem(2.5) }`            |
| p-12  | `{ padding: rem(3) }`              |
| p-16  | `{ padding: rem(4) }`              |
| p-2   | `{ padding: rem(0.5) }`            |
| p-20  | `{ padding: rem(5) }`              |
| p-24  | `{ padding: rem(6) }`              |
| p-3   | `{ padding: rem(0.75) }`           |
| p-32  | `{ padding: rem(8) }`              |
| p-4   | `{ padding: rem(1) }`              |
| p-40  | `{ padding: rem(10) }`             |
| p-48  | `{ padding: rem(12) }`             |
| p-5   | `{ padding: rem(1.25) }`           |
| p-56  | `{ padding: rem(14) }`             |
| p-6   | `{ padding: rem(1.5) }`            |
| p-64  | `{ padding: rem(16) }`             |
| p-8   | `{ padding: rem(2) }`              |
| p-px  | `{ padding: 1 }`                   |
| pb-0  | `{ paddingBottom: 0 }`             |
| pb-1  | `{ paddingBottom: rem(0.25) }`     |
| pb-10 | `{ paddingBottom: rem(2.5) }`      |
| pb-12 | `{ paddingBottom: rem(3) }`        |
| pb-16 | `{ paddingBottom: rem(4) }`        |
| pb-2  | `{ paddingBottom: rem(0.5) }`      |
| pb-20 | `{ paddingBottom: rem(5) }`        |
| pb-24 | `{ paddingBottom: rem(6) }`        |
| pb-3  | `{ paddingBottom: rem(0.75) }`     |
| pb-32 | `{ paddingBottom: rem(8) }`        |
| pb-4  | `{ paddingBottom: rem(1) }`        |
| pb-40 | `{ paddingBottom: rem(10) }`       |
| pb-48 | `{ paddingBottom: rem(12) }`       |
| pb-5  | `{ paddingBottom: rem(1.25) }`     |
| pb-56 | `{ paddingBottom: rem(14) }`       |
| pb-6  | `{ paddingBottom: rem(1.5) }`      |
| pb-64 | `{ paddingBottom: rem(16) }`       |
| pb-8  | `{ paddingBottom: rem(2) }`        |
| pb-px | `{ paddingBottom: 1 }`             |
| pe-0  | `{ paddingEnd: 0 }`                |
| pe-1  | `{ paddingEnd: rem(0.25) }`        |
| pe-10 | `{ paddingEnd: rem(2.5) }`         |
| pe-12 | `{ paddingEnd: rem(3) }`           |
| pe-16 | `{ paddingEnd: rem(4) }`           |
| pe-2  | `{ paddingEnd: rem(0.5) }`         |
| pe-20 | `{ paddingEnd: rem(5) }`           |
| pe-24 | `{ paddingEnd: rem(6) }`           |
| pe-3  | `{ paddingEnd: rem(0.75) }`        |
| pe-32 | `{ paddingEnd: rem(8) }`           |
| pe-4  | `{ paddingEnd: rem(1) }`           |
| pe-40 | `{ paddingEnd: rem(10) }`          |
| pe-48 | `{ paddingEnd: rem(12) }`          |
| pe-5  | `{ paddingEnd: rem(1.25) }`        |
| pe-56 | `{ paddingEnd: rem(14) }`          |
| pe-6  | `{ paddingEnd: rem(1.5) }`         |
| pe-64 | `{ paddingEnd: rem(16) }`          |
| pe-8  | `{ paddingEnd: rem(2) }`           |
| pe-px | `{ paddingEnd: 1 }`                |
| pl-0  | `{ paddingLeft: 0 }`               |
| pl-1  | `{ paddingLeft: rem(0.25) }`       |
| pl-10 | `{ paddingLeft: rem(2.5) }`        |
| pl-12 | `{ paddingLeft: rem(3) }`          |
| pl-16 | `{ paddingLeft: rem(4) }`          |
| pl-2  | `{ paddingLeft: rem(0.5) }`        |
| pl-20 | `{ paddingLeft: rem(5) }`          |
| pl-24 | `{ paddingLeft: rem(6) }`          |
| pl-3  | `{ paddingLeft: rem(0.75) }`       |
| pl-32 | `{ paddingLeft: rem(8) }`          |
| pl-4  | `{ paddingLeft: rem(1) }`          |
| pl-40 | `{ paddingLeft: rem(10) }`         |
| pl-48 | `{ paddingLeft: rem(12) }`         |
| pl-5  | `{ paddingLeft: rem(1.25) }`       |
| pl-56 | `{ paddingLeft: rem(14) }`         |
| pl-6  | `{ paddingLeft: rem(1.5) }`        |
| pl-64 | `{ paddingLeft: rem(16) }`         |
| pl-8  | `{ paddingLeft: rem(2) }`          |
| pl-px | `{ paddingLeft: 1 }`               |
| pr-0  | `{ paddingRight: 0 }`              |
| pr-1  | `{ paddingRight: rem(0.25) }`      |
| pr-10 | `{ paddingRight: rem(2.5) }`       |
| pr-12 | `{ paddingRight: rem(3) }`         |
| pr-16 | `{ paddingRight: rem(4) }`         |
| pr-2  | `{ paddingRight: rem(0.5) }`       |
| pr-20 | `{ paddingRight: rem(5) }`         |
| pr-24 | `{ paddingRight: rem(6) }`         |
| pr-3  | `{ paddingRight: rem(0.75) }`      |
| pr-32 | `{ paddingRight: rem(8) }`         |
| pr-4  | `{ paddingRight: rem(1) }`         |
| pr-40 | `{ paddingRight: rem(10) }`        |
| pr-48 | `{ paddingRight: rem(12) }`        |
| pr-5  | `{ paddingRight: rem(1.25) }`      |
| pr-56 | `{ paddingRight: rem(14) }`        |
| pr-6  | `{ paddingRight: rem(1.5) }`       |
| pr-64 | `{ paddingRight: rem(16) }`        |
| pr-8  | `{ paddingRight: rem(2) }`         |
| pr-px | `{ paddingRight: 1 }`              |
| ps-0  | `{ paddingStart: 0 }`              |
| ps-1  | `{ paddingStart: rem(0.25) }`      |
| ps-10 | `{ paddingStart: rem(2.5) }`       |
| ps-12 | `{ paddingStart: rem(3) }`         |
| ps-16 | `{ paddingStart: rem(4) }`         |
| ps-2  | `{ paddingStart: rem(0.5) }`       |
| ps-20 | `{ paddingStart: rem(5) }`         |
| ps-24 | `{ paddingStart: rem(6) }`         |
| ps-3  | `{ paddingStart: rem(0.75) }`      |
| ps-32 | `{ paddingStart: rem(8) }`         |
| ps-4  | `{ paddingStart: rem(1) }`         |
| ps-40 | `{ paddingStart: rem(10) }`        |
| ps-48 | `{ paddingStart: rem(12) }`        |
| ps-5  | `{ paddingStart: rem(1.25) }`      |
| ps-56 | `{ paddingStart: rem(14) }`        |
| ps-6  | `{ paddingStart: rem(1.5) }`       |
| ps-64 | `{ paddingStart: rem(16) }`        |
| ps-8  | `{ paddingStart: rem(2) }`         |
| ps-px | `{ paddingStart: 1 }`              |
| pt-0  | `{ paddingTop: 0 }`                |
| pt-1  | `{ paddingTop: rem(0.25) }`        |
| pt-10 | `{ paddingTop: rem(2.5) }`         |
| pt-12 | `{ paddingTop: rem(3) }`           |
| pt-16 | `{ paddingTop: rem(4) }`           |
| pt-2  | `{ paddingTop: rem(0.5) }`         |
| pt-20 | `{ paddingTop: rem(5) }`           |
| pt-24 | `{ paddingTop: rem(6) }`           |
| pt-3  | `{ paddingTop: rem(0.75) }`        |
| pt-32 | `{ paddingTop: rem(8) }`           |
| pt-4  | `{ paddingTop: rem(1) }`           |
| pt-40 | `{ paddingTop: rem(10) }`          |
| pt-48 | `{ paddingTop: rem(12) }`          |
| pt-5  | `{ paddingTop: rem(1.25) }`        |
| pt-56 | `{ paddingTop: rem(14) }`          |
| pt-6  | `{ paddingTop: rem(1.5) }`         |
| pt-64 | `{ paddingTop: rem(16) }`          |
| pt-8  | `{ paddingTop: rem(2) }`           |
| pt-px | `{ paddingTop: 1 }`                |
| px-0  | `{ paddingHorizontal: 0 }`         |
| px-1  | `{ paddingHorizontal: rem(0.25) }` |
| px-10 | `{ paddingHorizontal: rem(2.5) }`  |
| px-12 | `{ paddingHorizontal: rem(3) }`    |
| px-16 | `{ paddingHorizontal: rem(4) }`    |
| px-2  | `{ paddingHorizontal: rem(0.5) }`  |
| px-20 | `{ paddingHorizontal: rem(5) }`    |
| px-24 | `{ paddingHorizontal: rem(6) }`    |
| px-3  | `{ paddingHorizontal: rem(0.75) }` |
| px-32 | `{ paddingHorizontal: rem(8) }`    |
| px-4  | `{ paddingHorizontal: rem(1) }`    |
| px-40 | `{ paddingHorizontal: rem(10) }`   |
| px-48 | `{ paddingHorizontal: rem(12) }`   |
| px-5  | `{ paddingHorizontal: rem(1.25) }` |
| px-56 | `{ paddingHorizontal: rem(14) }`   |
| px-6  | `{ paddingHorizontal: rem(1.5) }`  |
| px-64 | `{ paddingHorizontal: rem(16) }`   |
| px-8  | `{ paddingHorizontal: rem(2) }`    |
| px-px | `{ paddingHorizontal: 1 }`         |
| py-0  | `{ paddingVertical: 0 }`           |
| py-1  | `{ paddingVertical: rem(0.25) }`   |
| py-10 | `{ paddingVertical: rem(2.5) }`    |
| py-12 | `{ paddingVertical: rem(3) }`      |
| py-16 | `{ paddingVertical: rem(4) }`      |
| py-2  | `{ paddingVertical: rem(0.5) }`    |
| py-20 | `{ paddingVertical: rem(5) }`      |
| py-24 | `{ paddingVertical: rem(6) }`      |
| py-3  | `{ paddingVertical: rem(0.75) }`   |
| py-32 | `{ paddingVertical: rem(8) }`      |
| py-4  | `{ paddingVertical: rem(1) }`      |
| py-40 | `{ paddingVertical: rem(10) }`     |
| py-48 | `{ paddingVertical: rem(12) }`     |
| py-5  | `{ paddingVertical: rem(1.25) }`   |
| py-56 | `{ paddingVertical: rem(14) }`     |
| py-6  | `{ paddingVertical: rem(1.5) }`    |
| py-64 | `{ paddingVertical: rem(16) }`     |
| py-8  | `{ paddingVertical: rem(2) }`      |
| py-px | `{ paddingVertical: 1 }`           |

</details>

### Overflow

| Name             | Style(s)                  |
| ---------------- | ------------------------- |
| overflow-hidden  | `{ overflow: "hidden" }`  |
| overflow-scroll  | `{ overflow: "scroll" }`  |
| overflow-visible | `{ overflow: "visible" }` |

### Opacity

> _Tip:_ The following styles are generated based on `theme.opacity` values.

| Name        | Style(s)            |
| ----------- | ------------------- |
| opacity-0   | `{ opacity: 0 }`    |
| opacity-100 | `{ opacity: 1 }`    |
| opacity-25  | `{ opacity: 0.25 }` |
| opacity-50  | `{ opacity: 0.5 }`  |
| opacity-75  | `{ opacity: 0.75 }` |

### Rotate

> _Tip:_ The following styles are generated based on `theme.rotate` values.

<details><summary>Show all styles</summary>

| Name          | Style(s)                                  |
| ------------- | ----------------------------------------- |
| -rotate-1     | `{ transform: [{ rotate: "-1deg" }] }`    |
| -rotate-12    | `{ transform: [{ rotate: "-12deg" }] }`   |
| -rotate-180   | `{ transform: [{ rotate: "-180deg" }] }`  |
| -rotate-2     | `{ transform: [{ rotate: "-2deg" }] }`    |
| -rotate-3     | `{ transform: [{ rotate: "-3deg" }] }`    |
| -rotate-45    | `{ transform: [{ rotate: "-45deg" }] }`   |
| -rotate-6     | `{ transform: [{ rotate: "-6deg" }] }`    |
| -rotate-90    | `{ transform: [{ rotate: "-90deg" }] }`   |
| -rotate-x-1   | `{ transform: [{ rotateX: "-1deg" }] }`   |
| -rotate-x-12  | `{ transform: [{ rotateX: "-12deg" }] }`  |
| -rotate-x-180 | `{ transform: [{ rotateX: "-180deg" }] }` |
| -rotate-x-2   | `{ transform: [{ rotateX: "-2deg" }] }`   |
| -rotate-x-3   | `{ transform: [{ rotateX: "-3deg" }] }`   |
| -rotate-x-45  | `{ transform: [{ rotateX: "-45deg" }] }`  |
| -rotate-x-6   | `{ transform: [{ rotateX: "-6deg" }] }`   |
| -rotate-x-90  | `{ transform: [{ rotateX: "-90deg" }] }`  |
| -rotate-y-1   | `{ transform: [{ rotateY: "-1deg" }] }`   |
| -rotate-y-12  | `{ transform: [{ rotateY: "-12deg" }] }`  |
| -rotate-y-180 | `{ transform: [{ rotateY: "-180deg" }] }` |
| -rotate-y-2   | `{ transform: [{ rotateY: "-2deg" }] }`   |
| -rotate-y-3   | `{ transform: [{ rotateY: "-3deg" }] }`   |
| -rotate-y-45  | `{ transform: [{ rotateY: "-45deg" }] }`  |
| -rotate-y-6   | `{ transform: [{ rotateY: "-6deg" }] }`   |
| -rotate-y-90  | `{ transform: [{ rotateY: "-90deg" }] }`  |
| -rotate-z-1   | `{ transform: [{ rotateZ: "-1deg" }] }`   |
| -rotate-z-12  | `{ transform: [{ rotateZ: "-12deg" }] }`  |
| -rotate-z-180 | `{ transform: [{ rotateZ: "-180deg" }] }` |
| -rotate-z-2   | `{ transform: [{ rotateZ: "-2deg" }] }`   |
| -rotate-z-3   | `{ transform: [{ rotateZ: "-3deg" }] }`   |
| -rotate-z-45  | `{ transform: [{ rotateZ: "-45deg" }] }`  |
| -rotate-z-6   | `{ transform: [{ rotateZ: "-6deg" }] }`   |
| -rotate-z-90  | `{ transform: [{ rotateZ: "-90deg" }] }`  |
| rotate-0      | `{ transform: [{ rotate: "0" }] }`        |
| rotate-1      | `{ transform: [{ rotate: "1deg" }] }`     |
| rotate-12     | `{ transform: [{ rotate: "12deg" }] }`    |
| rotate-180    | `{ transform: [{ rotate: "180deg" }] }`   |
| rotate-2      | `{ transform: [{ rotate: "2deg" }] }`     |
| rotate-3      | `{ transform: [{ rotate: "3deg" }] }`     |
| rotate-45     | `{ transform: [{ rotate: "45deg" }] }`    |
| rotate-6      | `{ transform: [{ rotate: "6deg" }] }`     |
| rotate-90     | `{ transform: [{ rotate: "90deg" }] }`    |
| rotate-x-0    | `{ transform: [{ rotateX: "0" }] }`       |
| rotate-x-1    | `{ transform: [{ rotateX: "1deg" }] }`    |
| rotate-x-12   | `{ transform: [{ rotateX: "12deg" }] }`   |
| rotate-x-180  | `{ transform: [{ rotateX: "180deg" }] }`  |
| rotate-x-2    | `{ transform: [{ rotateX: "2deg" }] }`    |
| rotate-x-3    | `{ transform: [{ rotateX: "3deg" }] }`    |
| rotate-x-45   | `{ transform: [{ rotateX: "45deg" }] }`   |
| rotate-x-6    | `{ transform: [{ rotateX: "6deg" }] }`    |
| rotate-x-90   | `{ transform: [{ rotateX: "90deg" }] }`   |
| rotate-y-0    | `{ transform: [{ rotateY: "0" }] }`       |
| rotate-y-1    | `{ transform: [{ rotateY: "1deg" }] }`    |
| rotate-y-12   | `{ transform: [{ rotateY: "12deg" }] }`   |
| rotate-y-180  | `{ transform: [{ rotateY: "180deg" }] }`  |
| rotate-y-2    | `{ transform: [{ rotateY: "2deg" }] }`    |
| rotate-y-3    | `{ transform: [{ rotateY: "3deg" }] }`    |
| rotate-y-45   | `{ transform: [{ rotateY: "45deg" }] }`   |
| rotate-y-6    | `{ transform: [{ rotateY: "6deg" }] }`    |
| rotate-y-90   | `{ transform: [{ rotateY: "90deg" }] }`   |
| rotate-z-0    | `{ transform: [{ rotateZ: "0" }] }`       |
| rotate-z-1    | `{ transform: [{ rotateZ: "1deg" }] }`    |
| rotate-z-12   | `{ transform: [{ rotateZ: "12deg" }] }`   |
| rotate-z-180  | `{ transform: [{ rotateZ: "180deg" }] }`  |
| rotate-z-2    | `{ transform: [{ rotateZ: "2deg" }] }`    |
| rotate-z-3    | `{ transform: [{ rotateZ: "3deg" }] }`    |
| rotate-z-45   | `{ transform: [{ rotateZ: "45deg" }] }`   |
| rotate-z-6    | `{ transform: [{ rotateZ: "6deg" }] }`    |
| rotate-z-90   | `{ transform: [{ rotateZ: "90deg" }] }`   |

</details>

### Scale

> _Tip:_ The following styles are generated based on `theme.scale` values.

<details><summary>Show all styles</summary>

| Name        | Style(s)                            |
| ----------- | ----------------------------------- |
| scale-0     | `{ transform: [{ scale: 0 }] }`     |
| scale-100   | `{ transform: [{ scale: 1 }] }`     |
| scale-105   | `{ transform: [{ scale: 1.05 }] }`  |
| scale-110   | `{ transform: [{ scale: 1.1 }] }`   |
| scale-125   | `{ transform: [{ scale: 1.25 }] }`  |
| scale-150   | `{ transform: [{ scale: 1.5 }] }`   |
| scale-50    | `{ transform: [{ scale: 0.5 }] }`   |
| scale-75    | `{ transform: [{ scale: 0.75 }] }`  |
| scale-90    | `{ transform: [{ scale: 0.9 }] }`   |
| scale-95    | `{ transform: [{ scale: 0.95 }] }`  |
| scale-x-0   | `{ transform: [{ scaleX: 0 }] }`    |
| scale-x-100 | `{ transform: [{ scaleX: 1 }] }`    |
| scale-x-105 | `{ transform: [{ scaleX: 1.05 }] }` |
| scale-x-110 | `{ transform: [{ scaleX: 1.1 }] }`  |
| scale-x-125 | `{ transform: [{ scaleX: 1.25 }] }` |
| scale-x-150 | `{ transform: [{ scaleX: 1.5 }] }`  |
| scale-x-50  | `{ transform: [{ scaleX: 0.5 }] }`  |
| scale-x-75  | `{ transform: [{ scaleX: 0.75 }] }` |
| scale-x-90  | `{ transform: [{ scaleX: 0.9 }] }`  |
| scale-x-95  | `{ transform: [{ scaleX: 0.95 }] }` |
| scale-y-0   | `{ transform: [{ scaleY: 0 }] }`    |
| scale-y-100 | `{ transform: [{ scaleY: 1 }] }`    |
| scale-y-105 | `{ transform: [{ scaleY: 1.05 }] }` |
| scale-y-110 | `{ transform: [{ scaleY: 1.1 }] }`  |
| scale-y-125 | `{ transform: [{ scaleY: 1.25 }] }` |
| scale-y-150 | `{ transform: [{ scaleY: 1.5 }] }`  |
| scale-y-50  | `{ transform: [{ scaleY: 0.5 }] }`  |
| scale-y-75  | `{ transform: [{ scaleY: 0.75 }] }` |
| scale-y-90  | `{ transform: [{ scaleY: 0.9 }] }`  |
| scale-y-95  | `{ transform: [{ scaleY: 0.95 }] }` |

</details>

### Skew

> _Tip:_ The following styles are generated based on `theme.skew` values.

<details><summary>Show all styles</summary>

| Name       | Style(s)                               |
| ---------- | -------------------------------------- |
| -skew-x-1  | `{ transform: [{ skewX: "-1deg" }] }`  |
| -skew-x-12 | `{ transform: [{ skewX: "-12deg" }] }` |
| -skew-x-2  | `{ transform: [{ skewX: "-2deg" }] }`  |
| -skew-x-3  | `{ transform: [{ skewX: "-3deg" }] }`  |
| -skew-x-6  | `{ transform: [{ skewX: "-6deg" }] }`  |
| -skew-y-1  | `{ transform: [{ skewY: "-1deg" }] }`  |
| -skew-y-12 | `{ transform: [{ skewY: "-12deg" }] }` |
| -skew-y-2  | `{ transform: [{ skewY: "-2deg" }] }`  |
| -skew-y-3  | `{ transform: [{ skewY: "-3deg" }] }`  |
| -skew-y-6  | `{ transform: [{ skewY: "-6deg" }] }`  |
| skew-x-0   | `{ transform: [{ skewX: "0" }] }`      |
| skew-x-1   | `{ transform: [{ skewX: "1deg" }] }`   |
| skew-x-12  | `{ transform: [{ skewX: "12deg" }] }`  |
| skew-x-2   | `{ transform: [{ skewX: "2deg" }] }`   |
| skew-x-3   | `{ transform: [{ skewX: "3deg" }] }`   |
| skew-x-6   | `{ transform: [{ skewX: "6deg" }] }`   |
| skew-y-0   | `{ transform: [{ skewY: "0" }] }`      |
| skew-y-1   | `{ transform: [{ skewY: "1deg" }] }`   |
| skew-y-12  | `{ transform: [{ skewY: "12deg" }] }`  |
| skew-y-2   | `{ transform: [{ skewY: "2deg" }] }`   |
| skew-y-3   | `{ transform: [{ skewY: "3deg" }] }`   |
| skew-y-6   | `{ transform: [{ skewY: "6deg" }] }`   |

</details>

### Translate

> _Tip:_ The following styles are generated based on `theme.translate` values.

<details><summary>Show all styles</summary>

| Name            | Style(s)                                        |
| --------------- | ----------------------------------------------- |
| -translate-x-0  | `{ transform: [{ translateX: 0 }] }`            |
| -translate-x-1  | `{ transform: [{ translateX: "-rem(0.25)" }] }` |
| -translate-x-10 | `{ transform: [{ translateX: "-rem(2.5)" }] }`  |
| -translate-x-12 | `{ transform: [{ translateX: "-rem(3)" }] }`    |
| -translate-x-16 | `{ transform: [{ translateX: "-rem(4)" }] }`    |
| -translate-x-2  | `{ transform: [{ translateX: "-rem(0.5)" }] }`  |
| -translate-x-20 | `{ transform: [{ translateX: "-rem(5)" }] }`    |
| -translate-x-24 | `{ transform: [{ translateX: "-rem(6)" }] }`    |
| -translate-x-3  | `{ transform: [{ translateX: "-rem(0.75)" }] }` |
| -translate-x-32 | `{ transform: [{ translateX: "-rem(8)" }] }`    |
| -translate-x-4  | `{ transform: [{ translateX: "-rem(1)" }] }`    |
| -translate-x-40 | `{ transform: [{ translateX: "-rem(10)" }] }`   |
| -translate-x-48 | `{ transform: [{ translateX: "-rem(12)" }] }`   |
| -translate-x-5  | `{ transform: [{ translateX: "-rem(1.25)" }] }` |
| -translate-x-56 | `{ transform: [{ translateX: "-rem(14)" }] }`   |
| -translate-x-6  | `{ transform: [{ translateX: "-rem(1.5)" }] }`  |
| -translate-x-64 | `{ transform: [{ translateX: "-rem(16)" }] }`   |
| -translate-x-8  | `{ transform: [{ translateX: "-rem(2)" }] }`    |
| -translate-x-px | `{ transform: [{ translateX: -1 }] }`           |
| -translate-y-0  | `{ transform: [{ translateY: 0 }] }`            |
| -translate-y-1  | `{ transform: [{ translateY: "-rem(0.25)" }] }` |
| -translate-y-10 | `{ transform: [{ translateY: "-rem(2.5)" }] }`  |
| -translate-y-12 | `{ transform: [{ translateY: "-rem(3)" }] }`    |
| -translate-y-16 | `{ transform: [{ translateY: "-rem(4)" }] }`    |
| -translate-y-2  | `{ transform: [{ translateY: "-rem(0.5)" }] }`  |
| -translate-y-20 | `{ transform: [{ translateY: "-rem(5)" }] }`    |
| -translate-y-24 | `{ transform: [{ translateY: "-rem(6)" }] }`    |
| -translate-y-3  | `{ transform: [{ translateY: "-rem(0.75)" }] }` |
| -translate-y-32 | `{ transform: [{ translateY: "-rem(8)" }] }`    |
| -translate-y-4  | `{ transform: [{ translateY: "-rem(1)" }] }`    |
| -translate-y-40 | `{ transform: [{ translateY: "-rem(10)" }] }`   |
| -translate-y-48 | `{ transform: [{ translateY: "-rem(12)" }] }`   |
| -translate-y-5  | `{ transform: [{ translateY: "-rem(1.25)" }] }` |
| -translate-y-56 | `{ transform: [{ translateY: "-rem(14)" }] }`   |
| -translate-y-6  | `{ transform: [{ translateY: "-rem(1.5)" }] }`  |
| -translate-y-64 | `{ transform: [{ translateY: "-rem(16)" }] }`   |
| -translate-y-8  | `{ transform: [{ translateY: "-rem(2)" }] }`    |
| -translate-y-px | `{ transform: [{ translateY: -1 }] }`           |
| translate-x-0   | `{ transform: [{ translateX: 0 }] }`            |
| translate-x-1   | `{ transform: [{ translateX: rem(0.25) }] }`    |
| translate-x-10  | `{ transform: [{ translateX: rem(2.5) }] }`     |
| translate-x-12  | `{ transform: [{ translateX: rem(3) }] }`       |
| translate-x-16  | `{ transform: [{ translateX: rem(4) }] }`       |
| translate-x-2   | `{ transform: [{ translateX: rem(0.5) }] }`     |
| translate-x-20  | `{ transform: [{ translateX: rem(5) }] }`       |
| translate-x-24  | `{ transform: [{ translateX: rem(6) }] }`       |
| translate-x-3   | `{ transform: [{ translateX: rem(0.75) }] }`    |
| translate-x-32  | `{ transform: [{ translateX: rem(8) }] }`       |
| translate-x-4   | `{ transform: [{ translateX: rem(1) }] }`       |
| translate-x-40  | `{ transform: [{ translateX: rem(10) }] }`      |
| translate-x-48  | `{ transform: [{ translateX: rem(12) }] }`      |
| translate-x-5   | `{ transform: [{ translateX: rem(1.25) }] }`    |
| translate-x-56  | `{ transform: [{ translateX: rem(14) }] }`      |
| translate-x-6   | `{ transform: [{ translateX: rem(1.5) }] }`     |
| translate-x-64  | `{ transform: [{ translateX: rem(16) }] }`      |
| translate-x-8   | `{ transform: [{ translateX: rem(2) }] }`       |
| translate-x-px  | `{ transform: [{ translateX: 1 }] }`            |
| translate-y-0   | `{ transform: [{ translateY: 0 }] }`            |
| translate-y-1   | `{ transform: [{ translateY: rem(0.25) }] }`    |
| translate-y-10  | `{ transform: [{ translateY: rem(2.5) }] }`     |
| translate-y-12  | `{ transform: [{ translateY: rem(3) }] }`       |
| translate-y-16  | `{ transform: [{ translateY: rem(4) }] }`       |
| translate-y-2   | `{ transform: [{ translateY: rem(0.5) }] }`     |
| translate-y-20  | `{ transform: [{ translateY: rem(5) }] }`       |
| translate-y-24  | `{ transform: [{ translateY: rem(6) }] }`       |
| translate-y-3   | `{ transform: [{ translateY: rem(0.75) }] }`    |
| translate-y-32  | `{ transform: [{ translateY: rem(8) }] }`       |
| translate-y-4   | `{ transform: [{ translateY: rem(1) }] }`       |
| translate-y-40  | `{ transform: [{ translateY: rem(10) }] }`      |
| translate-y-48  | `{ transform: [{ translateY: rem(12) }] }`      |
| translate-y-5   | `{ transform: [{ translateY: rem(1.25) }] }`    |
| translate-y-56  | `{ transform: [{ translateY: rem(14) }] }`      |
| translate-y-6   | `{ transform: [{ translateY: rem(1.5) }] }`     |
| translate-y-64  | `{ transform: [{ translateY: rem(16) }] }`      |
| translate-y-8   | `{ transform: [{ translateY: rem(2) }] }`       |
| translate-y-px  | `{ transform: [{ translateY: 1 }] }`            |

</details>

### Position

| Name     | Style(s)                   |
| -------- | -------------------------- |
| absolute | `{ position: "absolute" }` |
| relative | `{ position: "relative" }` |

### Resize Mode

| Name        | Style(s)                    |
| ----------- | --------------------------- |
| img-center  | `{ resizeMode: "center" }`  |
| img-contain | `{ resizeMode: "contain" }` |
| img-cover   | `{ resizeMode: "cover" }`   |
| img-repeat  | `{ resizeMode: "repeat" }`  |
| img-stretch | `{ resizeMode: "stretch" }` |

### Top / Right / Bottom / Left

| Name      | Style(s)                                   |
| --------- | ------------------------------------------ |
| bottom-0  | `{ bottom: 0 }`                            |
| inset-0   | `{ top: 0, right: 0, bottom: 0, left: 0 }` |
| inset-x-0 | `{ right: 0, left: 0 }`                    |
| inset-y-0 | `{ top: 0, bottom: 0 }`                    |
| left-0    | `{ left: 0 }`                              |
| right-0   | `{ right: 0 }`                             |
| top-0     | `{ top: 0 }`                               |

### Z-Index

> _Tip:_ The following styles are generated based on `theme.zIndex` values.

| Name | Style(s)         |
| ---- | ---------------- |
| z-0  | `{ zIndex: 0 }`  |
| z-10 | `{ zIndex: 10 }` |
| z-20 | `{ zIndex: 20 }` |
| z-30 | `{ zIndex: 30 }` |
| z-40 | `{ zIndex: 40 }` |
| z-50 | `{ zIndex: 50 }` |

### Number of lines ( prop )

> _Tip:_ The following styles are generated based on `theme.numberOfLines` values.

| Name     | Prop(s)                 |
| -------- | ----------------------- |
| lines-1  | `{ numberOfLines: 1 }`  |
| lines-10 | `{ numberOfLines: 10 }` |
| lines-2  | `{ numberOfLines: 2 }`  |
| lines-3  | `{ numberOfLines: 3 }`  |
| lines-4  | `{ numberOfLines: 4 }`  |
| lines-5  | `{ numberOfLines: 5 }`  |
| lines-6  | `{ numberOfLines: 6 }`  |
| lines-7  | `{ numberOfLines: 7 }`  |
| lines-8  | `{ numberOfLines: 8 }`  |
| lines-9  | `{ numberOfLines: 9 }`  |

### Selectable ( prop )

| Name           | Prop(s)                 |
| -------------- | ----------------------- |
| not-selectable | `{ selectable: false }` |
| selectable     | `{ selectable: true }`  |

<!-- UTILS-GEN-END -->
