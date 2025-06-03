# Modus Web Components: Badge (`modus-wc-badge`)

The `modus-wc-badge` component is used to display small pieces of information, often as a visual indicator or counter.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-badge`:

| Property      | Attribute      | Description                                    | Type                                                                                              | Default     |
| ------------- | -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| `color`       | `color`        | The color variant of the badge.                | `"danger" \| "high-contrast" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `customClass` | `custom-class` | Custom CSS class to apply to the span element. | `string`                                                                                          | `''`        |
| `size`        | `size`         | The size of the badge.                         | `"lg" \| "md" \| "sm"`                                                                            | `'md'`      |
| `variant`     | `variant`      | The variant of the badge.                      | `"counter" \| "filled" \| "text"`                                                                 | `'filled'`  |

## Usage Examples

Here are some examples based on the `modus-wc-badge.stories.ts` file:

**Default Badge:**

This is the basic usage of the badge with default properties (primary color, medium size, filled variant).

```html
<modus-wc-badge> Badge </modus-wc-badge>
```

**Badge with Icon:**

You can include a `modus-wc-icon` component within the badge.

```html
<style>
  /* Optional: Add padding if needed when using icons */
  modus-wc-badge modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
```

**Customizing the Badge:**

You can customize the badge using its properties. For example, to create a 'danger' colored, 'large' sized, 'text' variant badge:

```html
<modus-wc-badge color="danger" size="lg" variant="text">
  Danger Text Badge
</modus-wc-badge>
```

**Counter Variant:**

The `counter` variant is typically used for numerical indicators.

```html
<modus-wc-badge color="secondary" variant="counter"> 12 </modus-wc-badge>
```

## Migration from Version 1.0

The `modus-wc-badge.stories.ts` file also provides information on migrating from version 1.0:

- **Color:** The `dark` color option from v1.0 is now `high-contrast` in v2.0.
- **Variant (Type):** The `type` prop from v1.0 is now `variant` in v2.0. The `default` type from v1.0 is now the `filled` variant.
- **Size:** Size values have changed from full words (e.g., `small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).

Here's a mapping of the v1.0 props to v2.0 props:

| 1.0 Prop   | 2.0 Prop   | Notes                                           |
| ---------- | ---------- | ----------------------------------------------- |
| aria-label | aria-label |                                                 |
| color      | color      | `dark` is now `high-contrast`                   |
| size       | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |
| type       | variant    | `default` is now `filled`                       |
