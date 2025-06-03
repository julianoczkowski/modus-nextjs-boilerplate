# Modus Web Components: Toast (`modus-wc-toast`)

The `modus-wc-toast` component is used to display brief, auto-expiring notifications or messages to users. It's designed to stack elements and can be positioned in various corners or edges of a page. The toast itself primarily handles positioning and dismissal, while the content (like an alert) is slotted into it.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-toast`:

| Property      | Attribute      | Description                                        | Type                                                                                                                                                              | Default     |
| ------------- | -------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `customClass` | `custom-class` | Additional classes for custom styling.             | `string \| undefined`                                                                                                                                             | `''`        |
| `delay`       | `delay`        | Time taken to dismiss the toast in milliseconds.   | `number \| undefined`                                                                                                                                             | `undefined` |
| `position`    | `position`     | The position of the toast in the parent container. | `"bottom-center" \| "bottom-end" \| "bottom-start" \| "middle-center" \| "middle-end" \| "middle-start" \| "top-center" \| "top-end" \| "top-start" \| undefined` | `'top-end'` |

## Slots

The `modus-wc-toast` component uses its default slot to render the content of the toast, which is typically a `modus-wc-alert` or other custom HTML.

## Usage Examples

Here are some examples based on the `modus-wc-toast.stories.ts` file:

**Default Toast:**

This example shows a basic toast positioned at the top-end, containing a `modus-wc-alert`.

```html
<div
  style="height: 200px; position: relative; border: 1px solid #ccc; padding: 1rem;"
>
  <modus-wc-toast position="top-end">
    <modus-wc-alert
      alert-title="Message sent successfully!"
      variant="success"
    ></modus-wc-alert>
  </modus-wc-toast>
</div>
```

**Toast with Auto-Dismissal (`delay`):**

Set the `delay` property (in milliseconds) to have the toast automatically dismiss itself after the specified time.

```html
<div
  style="height: 200px; position: relative; border: 1px solid #ccc; padding: 1rem;"
>
  <modus-wc-toast position="bottom-center" delay="3000">
    <modus-wc-alert
      alert-title="Auto-dismissing!"
      alert-description="This toast will disappear in 3 seconds."
      variant="info"
    ></modus-wc-alert>
  </modus-wc-toast>
</div>
```

**Different Positions:**

You can control where the toast appears on the screen using the `position` property.

- **Top Start:**
  ```html
  <modus-wc-toast position="top-start">
    <modus-wc-alert
      alert-title="Top Start Toast"
      variant="warning"
    ></modus-wc-alert>
  </modus-wc-toast>
  ```
- **Middle Center:**
  ```html
  <modus-wc-toast position="middle-center">
    <modus-wc-alert
      alert-title="Middle Center Toast"
      variant="error"
    ></modus-wc-alert>
  </modus-wc-toast>
  ```
- **Bottom End:**
  ```html
  <modus-wc-toast position="bottom-end">
    <modus-wc-alert alert-title="Bottom End Toast"></modus-wc-alert>
  </modus-wc-toast>
  ```
  _(For these examples to display correctly in isolation, their parent container needs appropriate sizing and potentially `position: relative;` if the toast is absolutely positioned relative to it.)_

**Multiple Toasts:**

Toasts are designed to stack. If multiple `modus-wc-toast` components are rendered with the same `position`, they will typically stack vertically or horizontally based on the DaisyUI CSS that powers their positioning.

```html
<div
  style="height: 300px; position: relative; border: 1px solid #ccc; padding: 1rem;"
>
  <modus-wc-toast position="top-end" delay="5000">
    <modus-wc-alert
      alert-title="First Toast!"
      variant="success"
    ></modus-wc-alert>
  </modus-wc-toast>
  <modus-wc-toast position="top-end" delay="6000">
    <modus-wc-alert
      alert-title="Second Toast!"
      variant="info"
      alert-description="Another message."
    ></modus-wc-alert>
  </modus-wc-toast>
</div>
```

**Applying a Custom Class:**

Use the `custom-class` property for additional CSS styling if needed for the toast container itself.

```html
<style>
  .my-custom-toast-style {
    /* Example: add extra margin or a unique border */
    margin-top: 10px !important; /* DaisyUI might have strong specificity */
    border: 2px dashed blue;
  }
</style>

<modus-wc-toast position="top-center" custom-class="my-custom-toast-style">
  <modus-wc-alert alert-title="Custom Styled Toast Container"></modus-wc-alert>
</modus-wc-toast>
```

**Programmatic Dismissal:**
While `delay` handles auto-dismissal, you can also programmatically remove a toast element from the DOM if you have a reference to it.

```html
<div
  style="height: 200px; position: relative; border: 1px solid #ccc; padding: 1rem;"
>
  <modus-wc-toast id="myManualToast" position="top-end">
    <modus-wc-alert
      alert-title="Dismiss Me Manually!"
      variant="warning"
      dismissible
    >
    </modus-wc-alert>
  </modus-wc-toast>
  <modus-wc-button onclick="document.getElementById('myManualToast')?.remove()"
    >Dismiss Toast Now</modus-wc-button
  >
</div>
```
