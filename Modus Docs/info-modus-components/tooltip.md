# Modus Web Components: Tooltip (`modus-wc-tooltip`)

The `modus-wc-tooltip` component is used to display informative text when a user hovers over or focuses on an element. It wraps the element that triggers the tooltip.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-tooltip`:

| Property      | Attribute      | Description                                                                                             | Type                                                            | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------- |
| `content`     | `content`      | The text content of the tooltip.                                                                        | `string`                                                        | `''`        |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div.                                                             | `string \| undefined`                                           | `''`        |
| `disabled`    | `disabled`     | Disables displaying the tooltip on hover/focus.                                                         | `boolean \| undefined`                                          | `false`     |
| `forceOpen`   | `force-open`   | Use this attribute to force the tooltip to remain open. Useful for testing or specific UI states.       | `boolean \| undefined`                                          | `undefined` |
| `position`    | `position`     | The position that the tooltip will render in relation to the element.                                   | `"auto" \| "bottom" \| "left" \| "right" \| "top" \| undefined` | `'auto'`    |
| `tooltipId`   | `tooltip-id`   | The ID of the tooltip element, useful for setting the "aria-describedby" attribute of related elements. | `string \| undefined`                                           | `undefined` |

## Slots

The `modus-wc-tooltip` component uses its default slot to wrap the element that will trigger the tooltip.

## Usage Examples

Here are some examples based on the `modus-wc-tooltip.stories.ts` file:

**Default Tooltip:**

This example shows a tooltip that appears when hovering over a `modus-wc-badge`. The position defaults to `'auto'`.

```html
<modus-wc-tooltip content="This is helpful information.">
  <modus-wc-badge>Hover over me</modus-wc-badge>
</modus-wc-tooltip>
```

**Tooltip Positions:**

You can control where the tooltip appears relative to the slotted element using the `position` property.

- **Top Position:**
  ```html
  <modus-wc-tooltip content="Tooltip on top" position="top">
    <modus-wc-button>Top Tooltip</modus-wc-button>
  </modus-wc-tooltip>
  ```
- **Bottom Position:**
  ```html
  <modus-wc-tooltip content="Tooltip on bottom" position="bottom">
    <modus-wc-button>Bottom Tooltip</modus-wc-button>
  </modus-wc-tooltip>
  ```
- **Left Position:**
  ```html
  <modus-wc-tooltip content="Tooltip on left" position="left">
    <modus-wc-button>Left Tooltip</modus-wc-button>
  </modus-wc-tooltip>
  ```
- **Right Position:**
  ```html
  <modus-wc-tooltip content="Tooltip on right" position="right">
    <modus-wc-button>Right Tooltip</modus-wc-button>
  </modus-wc-tooltip>
  ```

**Disabled Tooltip:**

Set `disabled="true"` to prevent the tooltip from appearing.

```html
<modus-wc-tooltip content="This tooltip will not show" disabled="true">
  <modus-wc-button>Disabled Tooltip Trigger</modus-wc-button>
</modus-wc-tooltip>
```

**Force Open Tooltip:**

Set `force-open="true"` to make the tooltip visible constantly. This is primarily for debugging or specific UI demonstration purposes.

```html
<modus-wc-tooltip
  content="Tooltip is forced open"
  force-open="true"
  position="bottom"
>
  <modus-wc-button>Always Visible Tooltip</modus-wc-button>
</modus-wc-tooltip>
```

**Using `tooltipId` for Accessibility:**

You can assign an `id` to the tooltip using `tooltip-id`. This `id` can then be used with `aria-describedby` on the element that triggers the tooltip, or on another related element, to programmatically associate the tooltip's content as a description.

```html
<modus-wc-button aria-describedby="my-custom-tooltip"
  >Button with Description</modus-wc-button
>
<modus-wc-tooltip
  content="This is an important description for the button above."
  tooltip-id="my-custom-tooltip"
>
</modus-wc-tooltip>

<modus-wc-tooltip
  content="Information about this icon."
  tooltip-id="icon-tooltip"
  position="top"
>
  <modus-wc-icon name="info" aria-describedby="icon-tooltip"></modus-wc-icon>
</modus-wc-tooltip>
```

**Applying a Custom Class:**

Use `custom-class` for additional styling of the tooltip's container.

```html
<style>
  .my-special-tooltip-style .modus-wc-tooltip::before {
    /* Styling the tooltip bubble */
    background-color: navy !important;
    color: white !important;
  }
</style>

<modus-wc-tooltip
  content="A custom styled tooltip"
  custom-class="my-special-tooltip-style"
  position="bottom"
>
  <modus-wc-badge>Custom Styled</modus-wc-badge>
</modus-wc-tooltip>
```

_Note: Styling the tooltip bubble itself (the part with the text) often involves targeting pseudo-elements like `::before` (for the bubble) and `::after` (for the arrow/tail) if using DaisyUI's CSS-based tooltip approach, or by overriding CSS variables if available._

```

```
