# Modus Web Components: Typography (`modus-wc-typography`)

The `modus-wc-typography` component is used to render text with various semantic HTML tags (like `<h1>` to `<h6>`, `<p>`, `<span>` via `body`) and control its size and weight according to the Modus design system.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-typography`:

| Property      | Attribute      | Description                                          | Type                                                            | Default    |
| ------------- | -------------- | ---------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the typography element. | `string \| undefined`                                           | `''`       |
| `size`        | `size`         | The size of the font.                                | `"lg" \| "md" \| "sm" \| "xs" \| undefined`                     | `'md'`     |
| `variant`     | `variant`      | The variant (HTML tag) of the typography component.  | `"body" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p"` | `'p'`      |
| `weight`      | `weight`       | The weight of the text.                              | `"bold" \| "light" \| "normal" \| "semibold" \| undefined`      | `'normal'` |

_Note: When `variant` is one of `h1` through `h6`, the `size` prop might be overridden by the default heading styles defined in `modus-wc-typography.scss`. The `weight` prop can still be applied to headings._

## Slots

The `modus-wc-typography` component uses its default slot to render the text content.

## Usage Examples

Here are some examples based on the `modus-wc-typography.stories.ts` file:

### Default Typography (Paragraph)

This shows basic paragraph text with default medium size and normal weight.

```html
<modus-wc-typography>
  The quick brown fox jumps over the lazy dog.
</modus-wc-typography>
```

### Heading Variants

Use the `variant` property to render semantic heading tags.

#### H1 Heading

```html
<modus-wc-typography variant="h1"> This is a Heading 1 </modus-wc-typography>
```

#### H3 Heading with Bold Weight

```html
<modus-wc-typography variant="h3" weight="bold">
  This is a Bold Heading 3
</modus-wc-typography>
```

#### H6 Heading (typically small and bold by default)

```html
<modus-wc-typography variant="h6"> This is a Heading 6 </modus-wc-typography>
```

### Body Variant (renders as `<span>`)

The `body` variant is useful for inline text elements or when you need a `<span>` tag. You can control its size and weight.

```html
<modus-wc-typography variant="body" size="lg" weight="semibold">
  Large semibold body text (span).
</modus-wc-typography>
```

### Paragraph Variant (renders as `<p>`)

The `p` variant explicitly renders a paragraph tag.

```html
<modus-wc-typography variant="p" size="sm" weight="light">
  Small light paragraph text.
</modus-wc-typography>
```

### Customizing Size and Weight for non-heading variants

For `body` and `p` variants, `size` and `weight` props work as expected.

#### Extra Small, Bold Text

```html
<modus-wc-typography size="xs" weight="bold">
  Extra small and bold.
</modus-wc-typography>
```

#### Large, Light Text

```html
<modus-wc-typography variant="body" size="lg" weight="light">
  Large and light body text.
</modus-wc-typography>
```

### Applying a Custom Class

Use the `custom-class` property for additional CSS styling if needed.

```html
<style>
  .my-custom-text-style {
    color: purple;
    text-decoration: underline;
  }
</style>

<modus-wc-typography custom-class="my-custom-text-style">
  This text has custom styling.
</modus-wc-typography>
```

### Note on Storybook Decorator in `modus-wc-typography.stories.ts`

The story file includes a decorator to ensure slot content is correctly re-rendered when the `variant` prop changes in Storybook's controls. This is a Storybook-specific workaround and doesn't affect how you use the component in an application. In your application, you would directly place text or HTML inside the `modus-wc-typography` tags.

```

```
