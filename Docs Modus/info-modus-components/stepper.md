# Modus Web Components: Stepper (`modus-wc-stepper`)

The `modus-wc-stepper` component is used to display a list of steps in a process, visually guiding the user through a sequence. It supports horizontal and vertical orientations.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-stepper`:

| Property      | Attribute      | Description                                     | Type                                      | Default                              |
| ------------- | -------------- | ----------------------------------------------- | ----------------------------------------- | ------------------------------------ |
| `customClass` | `custom-class` | Custom CSS class to apply to the steps element. | `string \| undefined`                     | `''`                                 |
| `orientation` | `orientation`  | The orientation of the steps.                   | `"horizontal" \| "vertical" \| undefined` | `undefined` (defaults to horizontal) |
| `steps`       | `steps`        | The steps to display.                           | `IStepperItem[]`                          | `[]`                                 |

### `IStepperItem` Interface

Each item in the `steps` array should follow this interface:

- `color` (string, optional): The color theme of the step. Accepts DaisyUI theme colors like `'primary'`, `'secondary'`, `'accent'`, `'info'`, `'success'`, `'warning'`, `'error'`, `'neutral'`.
- `content` (string, optional): Custom content to display in the step indicator (e.g., an icon or number).
- `customClass` (string, optional): Custom CSS class to apply to the individual step element.
- `label` (string, optional): Text label for the step.

## Usage Examples

Here are some examples based on the `modus-wc-stepper.stories.ts` file:

**Default Stepper (Horizontal):**

This example shows a basic horizontal stepper. The `steps` property is an array of `IStepperItem` objects.

```html
<modus-wc-stepper
  aria-label="Process steps"
  .steps=${[
    { label: 'Step 1: Account Setup', color: 'primary' },
    { label: 'Step 2: Profile Information', color: 'primary' },
    { label: 'Step 3: Verification', color: 'warning', content: '!' },
    { label: 'Step 4: Complete', content: '🚀' }
  ]}>
</modus-wc-stepper>

<script>
  // Example of setting steps programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const stepperElement = document.querySelector('modus-wc-stepper');
    if (stepperElement) {
      stepperElement.steps = [
        { label: 'Scale', color: 'primary' },
        { label: 'Belong', color: 'primary' },
        { label: 'Grow', color: 'warning' },
        { label: 'Innovate', content: '🚀' }
      ];
    }
  });
</script>
```

**Vertical Stepper:**

Set `orientation="vertical"` to display the steps in a vertical layout.

```html
<modus-wc-stepper
  aria-label="Vertical process steps"
  orientation="vertical"
  .steps=${[
    { label: 'Initialize', color: 'success', content: '✔' },
    { label: 'Configure', color: 'info' },
    { label: 'Deploy', color: 'accent' },
    { label: 'Monitor', content: '👀' }
  ]}>
</modus-wc-stepper>
```

**Customizing Individual Steps:**

You can customize individual steps using properties within the `IStepperItem` objects:

- `color`: Changes the color of the step indicator and connecting line (for completed/active steps).
- `content`: Replaces the default step number with custom text or an icon (e.g., a checkmark `✔`, rocket `🚀`, or number).
- `customClass`: Apply a specific CSS class to an individual step for further styling.

```html
<modus-wc-stepper
  .steps=${[
    { label: 'Info Step', color: 'info', content: 'i' },
    { label: 'Success Step', color: 'success', content: 'OK' },
    { label: 'Warning Step', color: 'warning', customClass: 'my-warning-step-style' },
    { label: 'Error Step', color: 'error', content: 'X' }
  ]}>
</modus-wc-stepper>

<style>
  /* Example custom styling for an individual step */
  .my-warning-step-style {
    font-weight: bold;
    /* Add other custom styles as needed */
  }
</style>
```

**Applying a Custom Class to the Stepper Container:**

Use the `custom-class` property on `modus-wc-stepper` to style the main container.

```html
<style>
  .compact-stepper {
    font-size: 0.9rem; /* Example: make the stepper text smaller */
  }
</style>

<modus-wc-stepper
  custom-class="compact-stepper"
  .steps=${[
    { label: 'Step A' },
    { label: 'Step B' },
    { label: 'Step C' }
  ]}>
</modus-wc-stepper>
```

```

```
