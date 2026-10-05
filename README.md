# universal-rating

A lightweight universal rating package for JavaScript, Angular, React, Vue, Next/Nuxt, static HTML, and Web Components.

- One root import: `import { starRate } from 'universal-rating'`
- No framework runtime dependency
- Decimal ratings, hover preview, readonly and disabled states
- Compact readonly product-card display with value and review count
- Clearable ratings and required validation for forms
- Rating meaning labels such as Poor, Good, and Excellent
- RTL support for global products with `dir: 'rtl'` and `<universal-rating dir="rtl">`
- Focused interaction callbacks for hover, focus, blur, clear, and change
- Theme presets: `default`, `minimal`, `material`, `bootstrap`, `outline`, and `filled`
- Slot-based custom classes for root, item, icon, visible label, and validation error
- Star, heart, circle, diamond, and safe custom SVG icons
- Accessible keyboard slider behavior
- Form-associated Web Component support with hidden-input fallback
- Pointer Events for mobile web, Ionic, Capacitor, and Cordova
- Headless helpers for React Native and custom renderers
- SSR-safe import

Live demo: [https://subha-patra.github.io/universal-rating/](https://subha-patra.github.io/universal-rating/)

Repository: [https://github.com/subha-patra/universal-rating](https://github.com/subha-patra/universal-rating)

## Installation

```bash
npm install universal-rating
```

## JavaScript Usage

```ts
import { starRate } from 'universal-rating';

const rating = starRate.create('#rating', {
  value: 3.5,
  max: 5,
  precision: 0.5,
  icon: 'star',
  onChange: value => console.log(value)
});

rating.setValue(4);
```

## Mobile Web / Ionic Usage

`universal-rating` uses Pointer Events, so tap and drag work in mobile browsers and Ionic webviews.

```ts
import { starRate } from 'universal-rating';

starRate.create('#rating', {
  value: 3.5,
  max: 5,
  precision: 0.5
});
```

## Theme Presets

Use a preset to get a finished look quickly. Explicit color options still win over theme defaults.

```ts
import { starRate } from 'universal-rating';

starRate.create('#rating', {
  value: 4,
  theme: 'material'
});
```

Available themes: `default`, `minimal`, `material`, `bootstrap`, `outline`, and `filled`.

## Custom Styling Hooks

```ts
import { starRate } from 'universal-rating';

starRate.create('#styled-rating', {
  value: 4,
  customClass: {
    root: 'review-rating',
    item: 'review-rating__item',
    icon: 'review-rating__icon',
    label: 'review-rating__label',
    error: 'review-rating__error'
  }
});
```

Use `customClass: 'my-rating'` as a shorthand when only the root control needs an extra class. Existing `className` still works as a root-only convenience option.

## Clearable Ratings

```ts
import { starRate } from 'universal-rating';

starRate.create('#rating', {
  value: 3,
  clearable: true
});
```

When `clearable` is enabled, clicking the selected rating again resets the value to `0`.

## Readonly Product Cards

Use compact readonly display when you need a small product-card or list rating.

```ts
import { starRate } from 'universal-rating';

starRate.create('#rating', {
  value: 4.5,
  readonly: true,
  showValue: true,
  count: 245,
  suffix: 'reviews'
});
```

```html
<universal-rating
  value="4.5"
  readonly
  show-value
  count="245"
  suffix="reviews"
></universal-rating>
```

This renders a static summary like `4.5 ★ (245 reviews)` while preserving accessible text and form value support when `name` is set.

## Rating Meaning Labels

```ts
import { starRate } from 'universal-rating';

starRate.create('#rating', {
  value: 4,
  labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
  showLabel: true
});
```

The label follows hover, tap, drag, keyboard, and selected values. Decimal values use the next highest label slot, so `3.5` shows `Very good`.

## RTL Support

```ts
import { starRate } from 'universal-rating';

starRate.create('#rtl-rating', {
  value: 3,
  dir: 'rtl',
  labels: ['ضعيف', 'مقبول', 'جيد', 'جيد جدا', 'ممتاز'],
  showLabel: true
});
```

Use `dir: 'rtl'` for right-to-left visual fill, pointer/touch math, and horizontal keyboard controls. `ArrowRight` decreases and `ArrowLeft` increases in RTL mode.

## Better Events

```ts
import { starRate } from 'universal-rating';

starRate.create('#rating', {
  value: 3,
  clearable: true,
  onHover: value => console.log('hover', value),
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onClear: () => console.log('clear'),
  onChange: value => console.log('change', value)
});
```

`onHover` fires only when the preview value changes, so analytics and UI state do not receive duplicate hover spam.

## Required Validation

```ts
import { starRate } from 'universal-rating';

const rating = starRate.create('#rating', {
  required: true,
  errorText: 'Please select a rating',
  name: 'rating'
});

form.addEventListener('submit', event => {
  if (!rating.validate()) {
    event.preventDefault();
  }
});
```

## React Native Headless Usage

React Native cannot render DOM nodes or Web Components. Use the same package for rating math, then render with React Native `Pressable`, `Text`, or SVG components.

```ts
import { starRate } from 'universal-rating';

const value = starRate.valueFromPosition(locationX, width, {
  max: 5,
  precision: 0.5,
  dir: 'rtl'
});
```

## Web Component Usage

```html
<script type="module">
  import { defineStarRateElement } from 'universal-rating';
  defineStarRateElement();
</script>

<form id="review-form">
  <universal-rating
    name="rating"
    dir="rtl"
    theme="bootstrap"
    labels="Poor,Fair,Good,Very good,Excellent"
    show-label
    required
    clearable
    error-text="Please select a rating"
  ></universal-rating>

  <button type="submit">Submit review</button>
</form>
```

Registered Web Components use `ElementInternals` for native form value and required validation when the browser supports it. Older browsers and `starRate.create()` DOM instances keep the hidden-input fallback.

## Framework Usage

```ts
// Angular: create inside afterNextRender()
// React: create inside useEffect()
// Vue/Nuxt: create inside onMounted()
// Next.js: use inside a client component
import { starRate } from 'universal-rating';
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | Initial selected rating. |
| `max` | `number` | `5` | Total rating icons. |
| `precision` | `number` | `0.5` | Rating step for click, hover, and keyboard controls. |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Visual and interaction direction. |
| `theme` | `'default' \| 'minimal' \| 'material' \| 'bootstrap' \| 'outline' \| 'filled'` | `'default'` | Visual preset. Explicit color options override theme colors. |
| `icon` | `'star' \| 'heart' \| 'circle' \| 'diamond' \| 'custom'` | `'star'` | Rating icon shape. |
| `customIcon` | `string` | `''` | Safe SVG string used when `icon` is `custom`. |
| `color` | `string` | `''` | Single fill color override. |
| `badColor` | `string` | `#ef4444` | Fill color for low ratings. |
| `avgColor` | `string` | `#f59e0b` | Fill color for medium ratings. |
| `goodColor` | `string` | `#22c55e` | Fill color for high ratings. |
| `emptyColor` | `string` | `#cbd5e1` | Empty icon color. |
| `spacing` | `string \| number` | `0px` | Gap between icons. |
| `size` | `extra-small \| small \| medium \| large \| extra-large \| custom` | `medium` | Preset icon size. |
| `customSize` | `string` | `30px` | Exact icon size when `size` is `custom`. |
| `readonly` | `boolean` | `false` | Display a rating without user changes. |
| `showValue` | `boolean` | `false` | For readonly ratings, render a compact summary with one icon and the value. |
| `count` | `number` | `undefined` | Optional count shown beside a readonly compact summary. |
| `suffix` | `string` | `''` | Optional label appended to `count`, such as `reviews`. |
| `disabled` | `boolean` | `false` | Disable focus and interaction. |
| `clearable` | `boolean` | `false` | Click the current value again to reset to zero. |
| `required` | `boolean` | `false` | Require a value greater than zero for form validation. |
| `errorText` | `string` | `Please select a rating` | Inline validation message for required ratings. |
| `label` | `string` | `Rating` | Accessible slider label. |
| `labels` | `string[]` | `[]` | Meaning text from low to high, such as Poor through Excellent. |
| `showLabel` | `boolean` | `false` | Show the matching meaning text for the current preview or selected value. |
| `name` | `string` | `''` | Form field name. Web Components use `ElementInternals` when supported; DOM instances render a hidden input fallback. |
| `className` | `string` | `''` | Extra class on the rating control. |
| `customClass` | `string \| { root?: string; item?: string; icon?: string; label?: string; error?: string }` | `undefined` | Slot classes for root, item, icon, visible label, and validation error. |
| `onChange` | `(value: number) => void` | `undefined` | Called after user changes the value. |
| `onHover` | `(value: number) => void` | `undefined` | Called when hover or drag preview moves to a new value. |
| `onFocus` | `() => void` | `undefined` | Called when the slider receives focus. |
| `onBlur` | `() => void` | `undefined` | Called when the slider loses focus. |
| `onClear` | `() => void` | `undefined` | Called when a non-zero value is cleared to zero. |

## Instance And Helper Methods

```ts
setValue(value: number): void
getValue(): number
update(options: Partial<StarRateOptions>): void
clear(): void
validate(): boolean
enable(): void
disable(): void
focus(): void
destroy(): void
valueFromPosition(x: number, width: number, options?: StarRateValueFromPositionOptions): number
roundValue(value: number, precision?: number): number
clampValue(value: number, max?: number): number
```

## Events

The JavaScript API calls:

```ts
onChange(value)
onHover(value)
onFocus()
onBlur()
onClear()
```

The Web Component dispatches:

| Event | Detail |
| --- | --- |
| `universal-rating-change` | `{ value }` |
| `universal-rating-hover` | `{ value }` |
| `universal-rating-focus` | `{ value }` |
| `universal-rating-blur` | `{ value }` |
| `universal-rating-clear` | `{ value: 0 }` |

```ts
event.detail.value
```

## Accessibility

`universal-rating` renders a keyboard-friendly slider with `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and the configured `label`.

Keyboard support:

- Arrow keys adjust by `precision`; left/right are reversed when `dir` is `rtl`
- Home sets `0`
- End sets `max`
- Enter and Space confirm the current preview value

## Migration From `angular-star`

`angular-star` is replaced by `universal-rating`.

| Old option | New option |
| --- | --- |
| `length` | `max` |
| `fractions` | `precision` |
| `iconType` | `icon` |
| `spaceBetween` | `spacing` |

The old option names still work as migration aliases.

--- 

📛 Badges

[![npm version](https://img.shields.io/npm/v/universal-rating)](https://www.npmjs.com/package/universal-rating)
[![npm downloads](https://img.shields.io/npm/dt/universal-rating)](https://www.npmjs.com/package/universal-rating)
[![GitHub issues](https://img.shields.io/github/issues/subha-patra/universal-rating)](https://github.com/subha-patra/universal-rating/issues)
[![GitHub stars](https://img.shields.io/github/stars/subha-patra/universal-rating)](https://github.com/subha-patra/universal-rating/stargazers)
[![GitHub license](https://img.shields.io/github/license/subha-patra/universal-rating)](https://github.com/subha-patra/universal-rating/blob/main/LICENSE)


## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
