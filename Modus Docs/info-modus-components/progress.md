# Modus Web Components: Progress (`modus-wc-progress`)

The `modus-wc-progress` component is used to display the progress of a task or indicate the passage of time. It supports both a default linear style and a radial style.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-progress`:

| Property        | Attribute       | Description                                        | Type                                 | Default     |
| --------------- | --------------- | -------------------------------------------------- | ------------------------------------ | ----------- |
| `customClass`   | `custom-class`  | Custom CSS class to apply to the progress element. | `string \| undefined`                | `''`        |
| `indeterminate` | `indeterminate` | The indeterminate state of the progress component. | `boolean`                            | `false`     |
| `label`         | `label`         | A text label to render within the progress bar.    | `string \| undefined`                | `undefined` |
| `max`           | `max`           | The progress component's maximum value.            | `number \| undefined`                | `100`       |
| `value`         | `value`         | The value of the progress component.               | `number`                             | `0`         |
| `variant`       | `variant`       | The variant of the progress component.             | `"default" \| "radial" \| undefined` | `'default'` |

## Usage Examples

Here are some examples based on the `modus-wc-progress.stories.ts` file:

**Default Progress Bar:**

This is the basic linear progress bar.

```html
<modus-wc-progress aria-label="Task progress" value="70" max="100">
</modus-wc-progress>
```

**Indeterminate Progress Bar:**

Set `indeterminate="true"` for a progress bar that shows activity without a specific progress value.

```html
<modus-wc-progress
  indeterminate="true"
  aria-label="Loading progress"
></modus-wc-progress>
```

**Progress Bar with Label:**

Display a text label within the progress bar using the `label` property.

```html
<modus-wc-progress
  value="50"
  label="Loading..."
  aria-label="Loading progress with label"
>
</modus-wc-progress>
```

_Note: For the default (linear) variant, the label appears alongside or below the progress bar, managed by `modus-wc-input-label`. For the radial variant, the label appears inside the circle._

**Radial Progress:**

Set `variant="radial"` to display a circular progress indicator.

```html
<modus-wc-progress
  variant="radial"
  value="60"
  label="60%"
  aria-label="Radial progress"
>
</modus-wc-progress>
```

**Radial Progress with Slotted Content:**

The radial variant supports slotting custom HTML content to be displayed within the progress circle.

```html
<style>
  /* Example styling for slotted icon */
  #radial-icon-example {
    display: flex; /* Use flex to help center */
    justify-content: center;
    align-items: center;
    height: 100%; /* Ensure it fills the slot area if needed */
  }
</style>
<modus-wc-progress
  aria-label="Radial progress with icon"
  variant="radial"
  value="75"
>
  <modus-wc-icon
    id="radial-icon-example"
    name="clipboard"
    size="md"
  ></modus-wc-icon>
</modus-wc-progress>
```

**Customizing Size (Linear):**

For the default (linear) progress bar, height can be customized using CSS via the `custom-class` property.

```html
<style>
  modus-wc-progress.modus-wc-progress-container .size-small-progress {
    height: 0.5rem; /* Example small height */
  }
  modus-wc-progress.modus-wc-progress-container .size-compact-progress {
    height: 0.25rem; /* Example compact height */
  }
</style>

<div>Default size</div>
<modus-wc-progress value="50"></modus-wc-progress>

<div>Small size</div>
<modus-wc-progress value="50" custom-class="size-small-progress">
</modus-wc-progress>

<div>Compact size</div>
<modus-wc-progress value="50" custom-class="size-compact-progress">
</modus-wc-progress>
```

**Customizing Radial Progress Size and Thickness:**

For the radial variant, CSS custom properties `--size` and `--thickness` can be used via `custom-class` to adjust its appearance.

```html
<style>
  .radial-progress--lg {
    --size: 12rem; /* Makes the radial progress larger */
  }
  .radial-progress--thin {
    --thickness: 0.5rem; /* Makes the progress ring thinner */
  }
</style>

<modus-wc-progress
  aria-label="Large radial progress"
  custom-class="radial-progress--lg"
  variant="radial"
  value="80"
  label="80%"
>
</modus-wc-progress>

<modus-wc-progress
  aria-label="Large and thin radial progress"
  custom-class="radial-progress--lg radial-progress--thin"
  variant="radial"
  value="40"
  label="40%"
>
</modus-wc-progress>
```

**Customizing Colors (Linear):**

Colors for the linear progress bar (bar color, background color) can be customized using CSS targeting the internal elements, often through the `custom-class` property.

- **Custom Bar Color:**
  ```html
  <style>
    modus-wc-progress
      .modus-wc-progress.custom-bar-color-example::-webkit-progress-value {
      background-color: #f48; /* Pinkish */
    }
    modus-wc-progress
      .modus-wc-progress.custom-bar-color-example::-moz-progress-bar {
      background-color: #f48; /* Pinkish */
    }
  </style>
  <modus-wc-progress value="75" custom-class="custom-bar-color-example">
  </modus-wc-progress>
  ```
- **Custom Background Color:**
  ```html
  <style>
    modus-wc-progress .modus-wc-progress.custom-bg-color-example {
      background-color: #f00; /* Red background for the track */
      /* For Modus Classic theme, you might need to adjust border or other properties too */
    }
  </style>
  <modus-wc-progress value="60" custom-class="custom-bg-color-example">
  </modus-wc-progress>
  ```

_Note: Color customization for the radial progress is typically handled by the theme or can be overridden using CSS by targeting `.modus-wc-radial-progress` and its pseudo-elements if applicable, or by setting its `color` property which affects the track._
