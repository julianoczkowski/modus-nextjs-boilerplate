# Modus Web Components: Number Input (`modus-wc-number-input`)

The `modus-wc-number-input` component is a customizable input field specifically designed for numerical input. It supports features like min/max values, step increments, and can optionally display a currency symbol.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-number-input`:

| Property         | Attribute         | Description                                                                                                                                                              | Type                                | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------- |
| `autoComplete`   | `auto-complete`   | Hint for form autofill feature.                                                                                                                                          | `"off" \| "on" \| undefined`        | `undefined` |
| `bordered`       | `bordered`        | Indicates that the input should have a border.                                                                                                                           | `boolean \| undefined`              | `true`      |
| `currencySymbol` | `currency-symbol` | The currency symbol to display alongside the input.                                                                                                                      | `string \| undefined`               | `''`        |
| `customClass`    | `custom-class`    | Custom CSS class to apply to the input.                                                                                                                                  | `string \| undefined`               | `''`        |
| `disabled`       | `disabled`        | Whether the form control is disabled.                                                                                                                                    | `boolean \| undefined`              | `false`     |
| `feedback`       | `feedback`        | Feedback to render below the input. (See `IInputFeedbackProp` details below)                                                                                             | `IInputFeedbackProp \| undefined`   | `undefined` |
| `inputId`        | `input-id`        | The ID of the input element.                                                                                                                                             | `string \| undefined`               | `undefined` |
| `inputMode`      | `input-mode`      | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | `"decimal" \| "none" \| "numeric"`  | `'numeric'` |
| `inputTabIndex`  | `input-tab-index` | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                  | `number \| undefined`               | `undefined` |
| `label`          | `label`           | The text to display within the label.                                                                                                                                    | `string \| undefined`               | `undefined` |
| `max`            | `max`             | The input's maximum value.                                                                                                                                               | `number \| undefined`               | `undefined` |
| `min`            | `min`             | The input's minimum value.                                                                                                                                               | `number \| undefined`               | `undefined` |
| `name`           | `name`            | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                          | `string \| undefined`               | `undefined` |
| `placeholder`    | `placeholder`     | Text that appears in the form control when it has no value set.                                                                                                          | `string \| undefined`               | `''`        |
| `readOnly`       | `read-only`       | Whether the value is editable.                                                                                                                                           | `boolean \| undefined`              | `false`     |
| `required`       | `required`        | A value is required for the form to be submittable.                                                                                                                      | `boolean \| undefined`              | `false`     |
| `size`           | `size`            | The size of the input.                                                                                                                                                   | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `step`           | `step`            | The granularity that the value adheres to.                                                                                                                               | `number \| undefined`               | `undefined` |
| `type`           | `type`            | Type of form control.                                                                                                                                                    | `"number" \| "range" \| undefined`  | `'number'`  |
| `value`          | `value`           | The value of the control.                                                                                                                                                | `string`                            | `''`        |

### `IInputFeedbackProp` Interface

Used by the `feedback` property:

- `level` ('error' | 'info' | 'success' | 'warning'): The feedback level, which typically influences icon and color.
- `message` (string, optional): The feedback message to display.

## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-number-input.stories.ts` file:

**Default Number Input:**

This is the basic usage with a label.

```html
<modus-wc-number-input aria-label="Number input" label="Quantity">
</modus-wc-number-input>
```

_In a real application, you would likely bind the `value` property and listen to the `inputChange` event to manage the numerical value._

**Number Input with Min, Max, and Step:**

Control the range and increments of the number input.

```html
<modus-wc-number-input
  label="Score (0-100, steps of 10)"
  min="0"
  max="100"
  step="10"
  value="50"
>
</modus-wc-number-input>
```

**Currency Input:**

Display a currency symbol next to the input field using the `currency-symbol` property.

```html
<modus-wc-number-input
  label="Price"
  currency-symbol="$"
  input-mode="decimal"
  step="0.01"
  placeholder="0.00"
>
</modus-wc-number-input>
```

**Disabled Number Input:**

Set the `disabled` property to `true` to prevent user interaction.

```html
<modus-wc-number-input label="Disabled Input" value="123" disabled="true">
</modus-wc-number-input>
```

**Read-Only Number Input:**

Set `read-only="true"` if the number should be displayed but not editable.

```html
<modus-wc-number-input label="Read-Only Value" value="42" read-only="true">
</modus-wc-number-input>
```

**Required Number Input:**

Mark the input as required for form submission.

```html
<modus-wc-number-input label="Required Age" required="true">
</modus-wc-number-input>
```

**Different Sizes:**

Control the size of the input using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-number-input
  label="Small Number Input"
  size="sm"
></modus-wc-number-input>
<modus-wc-number-input
  label="Large Number Input"
  size="lg"
  currency-symbol="€"
></modus-wc-number-input>
```

**Number Input as a Range Slider:**

Set `type="range"` to display the number input as a range slider. `min`, `max`, and `step` are particularly useful here.

```html
<modus-wc-number-input
  label="Volume"
  type="range"
  min="0"
  max="11"
  step="1"
  value="5"
>
</modus-wc-number-input>
```

**Number Input with Error Feedback:**

Provide feedback to the user, for example, when a value is out of range or a required field is empty.

```html
<modus-wc-number-input
  label="Age"
  required="true"
  min="18"
  .feedback=${{ level: 'error', message: 'Age must be 18 or older.' }}>
</modus-wc-number-input>

<script>
  // Example of setting feedback programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.querySelector('modus-wc-number-input[label="Age"]');
    if (ageInput) {
      // Simulate an error condition
      if (parseInt(ageInput.value, 10) < 18) {
        ageInput.feedback = { level: 'error', message: 'Age must be 18 or older.' };
      }
    }
  });
</script>
```

**Handling Input Events:**

```html
<modus-wc-number-input
  id="myNumberInput"
  label="Interactive Number"
></modus-wc-number-input>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("myNumberInput");

    numberInput.addEventListener("inputChange", (event) => {
      console.log("Number changed:", event.target.value);
      // Update your component's state with event.target.value
    });

    numberInput.addEventListener("inputFocus", () => {
      console.log("Number input focused");
    });

    numberInput.addEventListener("inputBlur", () => {
      console.log("Number input blurred");
    });
  });
</script>
```
