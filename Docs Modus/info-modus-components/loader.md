# Modus Web Components: Loader (`modus-wc-loader`)

The `modus-wc-loader` component is used to indicate that content is currently loading. It offers various visual styles (variants), colors, and sizes.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-loader`:

| Property      | Attribute      | Description                                      | Type                                                                                               | Default     |
| ------------- | -------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------- |
| `color`       | `color`        | The color of the loader.                         | `"accent" \| "error" \| "info" \| "neutral" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `customClass` | `custom-class` | Custom CSS class to apply to the loader element. | `string \| undefined`                                                                              | `''`        |
| `size`        | `size`         | The size of the loader.                          | `"lg" \| "md" \| "sm" \| "xs"`                                                                     | `'md'`      |
| `variant`     | `variant`      | The variant of the loader.                       | `"ball" \| "bars" \| "dots" \| "infinity" \| "ring" \| "spinner"`                                  | `'spinner'` |

## Usage Examples

Here are some examples based on the `modus-wc-loader.stories.ts` file:

**Default Loader (Spinner):**

This is the basic usage, which defaults to the `spinner` variant, `primary` color, and `md` size.

```html
<modus-wc-loader aria-label="Loading spinner"></modus-wc-loader>
```

**Different Variants:**

You can change the visual style of the loader using the `variant` property.

- **Ball Variant:**
  ```html
  <modus-wc-loader variant="ball" aria-label="Loading ball"></modus-wc-loader>
  ```
- **Bars Variant:**
  ```html
  <modus-wc-loader variant="bars" aria-label="Loading bars"></modus-wc-loader>
  ```
- **Dots Variant:**
  ```html
  <modus-wc-loader variant="dots" aria-label="Loading dots"></modus-wc-loader>
  ```
- **Infinity Variant:**
  ```html
  <modus-wc-loader
    variant="infinity"
    aria-label="Loading infinity symbol"
  ></modus-wc-loader>
  ```
- **Ring Variant:**
  ```html
  <modus-wc-loader variant="ring" aria-label="Loading ring"></modus-wc-loader>
  ```

**Customizing Color:**

Change the color of the loader using the `color` property.

```html
<modus-wc-loader
  variant="spinner"
  color="secondary"
  aria-label="Secondary spinner"
></modus-wc-loader>
<modus-wc-loader
  variant="dots"
  color="success"
  aria-label="Success dots"
></modus-wc-loader>
```

**Customizing Size:**

Adjust the size of the loader using the `size` property (`xs`, `sm`, `md`, `lg`).

```html
<modus-wc-loader
  variant="bars"
  size="sm"
  aria-label="Small loading bars"
></modus-wc-loader>
<modus-wc-loader
  variant="ring"
  size="lg"
  aria-label="Large loading ring"
></modus-wc-loader>
```

**Applying a Custom Class:**

Use the `custom-class` property for additional CSS styling if needed. This can be useful for more specific color overrides or layout adjustments if the standard color props aren't sufficient.

```html
<style>
  .my-custom-loader-styles {
    /* Example: A very specific color not available through props */
    color: #ff00ff; /* Magenta */
    /* Or custom dimensions if size props are not enough */
    width: 50px;
    height: 50px;
  }
</style>

<modus-wc-loader
  custom-class="my-custom-loader-styles"
  aria-label="Custom styled loader"
>
</modus-wc-loader>
```

_Note: The loader itself is a `<span>` element. The color is typically applied via the `currentColor` CSS value, so setting the `color` CSS property on the component or a custom class will change the loader's color._

**Accessibility:**
Always provide an `aria-label` to describe what is loading, especially if the loader is the only indication of a loading state. If the loading context is clear from surrounding elements, the default `aria-label="Loading"` might suffice.

```

```
