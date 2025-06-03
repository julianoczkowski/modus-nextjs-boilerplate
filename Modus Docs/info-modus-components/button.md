# Modus Web Components: Button (`modus-wc-button`)

The `modus-wc-button` component is a customizable button used to trigger actions. It supports various styles, sizes, and can include icons.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-button`:

| Property      | Attribute      | Description                                                          | Type                                                              | Default       |
| ------------- | -------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| `color`       | `color`        | The color variant of the button.                                     | `"danger" \| "primary" \| "secondary" \| "tertiary" \| "warning"` | `'primary'`   |
| `customClass` | `custom-class` | Custom CSS class to apply to the button element.                     | `string \| undefined`                                             | `''`          |
| `disabled`    | `disabled`     | If true, the button will be disabled.                                | `boolean \| undefined`                                            | `false`       |
| `fullWidth`   | `full-width`   | If true, the button will take the full width of its container.       | `boolean \| undefined`                                            | `false`       |
| `pressed`     | `pressed`      | If true, the button will be in a pressed state (for toggle buttons). | `boolean \| undefined`                                            | `false`       |
| `shape`       | `shape`        | The shape of the button.                                             | `"circle" \| "rectangle" \| "square"`                             | `'rectangle'` |
| `size`        | `size`         | The size of the button.                                              | `"lg" \| "md" \| "sm" \| "xs"`                                    | `'md'`        |
| `type`        | `type`         | The type of the button.                                              | `"button" \| "reset" \| "submit"`                                 | `'button'`    |
| `variant`     | `variant`      | The variant of the button.                                           | `"borderless" \| "filled" \| "outlined"`                          | `'filled'`    |

## Events

| Event         | Description                                                         | Type                                       |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| `buttonClick` | Event emitted when the button is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-button.stories.ts` file:

**Default Button:**

This is the basic usage of the button.

```html
<modus-wc-button aria-label="Click me button"> Click me </modus-wc-button>
```

````

**Button Variants & Colors:**

You can change the appearance using `variant` and `color` properties.

- **Outlined Secondary Button:**
  ```html
  <modus-wc-button variant="outlined" color="secondary">
    Secondary Outlined
  </modus-wc-button>
  ```
- **Borderless Danger Button:**
  ```html
  <modus-wc-button variant="borderless" color="danger">
    Danger Borderless
  </modus-wc-button>
  ```

**Button Shapes:**

The `shape` property can be used to create `circle` or `square` buttons, often used for icon-only buttons.

```html
<modus-wc-button aria-label="Circle button" shape="circle"> C </modus-wc-button>

<modus-wc-button aria-label="Square button" shape="square"> S </modus-wc-button>
```

**Button Sizes:**

Control the size of the button with the `size` property (`xs`, `sm`, `md`, `lg`).

```html
<modus-wc-button size="sm">Small Button</modus-wc-button>
<modus-wc-button size="lg">Large Button</modus-wc-button>
```

**Disabled Button:**

Set the `disabled` property to `true` to disable the button.

```html
<modus-wc-button disabled>Disabled Button</modus-wc-button>
```

**Full Width Button:**

Set `full-width="true"` to make the button take the full width of its container.

```html
<modus-wc-button full-width="true">Full Width Button</modus-wc-button>
```

**Icon-Only Button:**

Place a `modus-wc-icon` component inside the button's default slot. For accessibility, ensure you provide an `aria-label` for the button.

```html
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
```

**Button with Icon and Text:**

Icons can be placed to the left or right of the text, or both.

- **Icon Left:**
  ```html
  <modus-wc-button aria-label="Download button">
    <modus-wc-icon decorative name="download"></modus-wc-icon>
    Download
  </modus-wc-button>
  ```
- **Icon Right:**
  ```html
  <modus-wc-button aria-label="Details button">
    Details
    <modus-wc-icon decorative name="launch"></modus-wc-icon>
  </modus-wc-button>
  ```
- **Icon Left and Right:**
  ```html
  <modus-wc-button aria-label="Checkout button">
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
    Checkout
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  </modus-wc-button>
  ```

## Migration from Version 1.0

The `modus-wc-button.stories.ts` file provides a migration guide from version 1.0:

- **Icons:** In v1.0, buttons had specific properties for icons (`icon-only`, `left-icon`, `right-icon`). In v2.0, icons are added by placing the `modus-wc-icon` component within the button's default slot.
- **Variant (Button Style):** The `button-style` property from v1.0 has been renamed to `variant`. The values have also changed slightly (e.g., `fill` is now `filled`, `outline` is now `outlined`).
- **Size:** Size values have changed from verbose names (e.g., `small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).
- **Color:** The `dark` and `special` color options from v1.0 have been removed, and `warning` has been added.

**Prop Mapping:**

| 1.0 Prop        | 2.0 Prop   | Notes                                                   |
| --------------- | ---------- | ------------------------------------------------------- |
| aria-label      | aria-label |                                                         |
| button-style    | `variant`  | `fill` → `filled`, `outline` → `outlined`               |
| color           | `color`    | `dark` and `special` removed, `warning` added           |
| critical-action |            | Not carried over                                        |
| disabled        | `disabled` |                                                         |
| icon-only       |            | Not carried over, use default slot with `modus-wc-icon` |
| left-icon       |            | Not carried over, use default slot with `modus-wc-icon` |
| right-icon      |            | Not carried over, use default slot with `modus-wc-icon` |
| show-caret      |            | Not carried over                                        |
| size            | `size`     | `small` → `sm`, `medium` → `md`, `large` → `lg`         |
| type            | `type`     |                                                         |

**Event Mapping:**

| 1.0 Event   | 2.0 Event   | Notes |
| ----------- | ----------- | ----- |
| buttonClick | buttonClick |       |

```

Would you like to continue with the next component?
```
````
