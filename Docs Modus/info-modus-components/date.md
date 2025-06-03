# Modus Web Components: Date Input (`modus-wc-date`)

The `modus-wc-date` component provides a customizable date picker input, adhering to WCAG 2.2 standards.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-date`:

| Property        | Attribute         | Description                                                                                             | Type                                | Default     |
| --------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `bordered`      | `bordered`        | Indicates that the input should have a border.                                                          | `boolean \| undefined`              | `true`      |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the input.                                                                 | `string \| undefined`               | `''`        |
| `disabled`      | `disabled`        | Whether the form control is disabled.                                                                   | `boolean \| undefined`              | `false`     |
| `feedback`      | `feedback`        | Feedback to render below the input. (See `IInputFeedbackProp` details below)                            | `IInputFeedbackProp \| undefined`   | `undefined` |
| `inputId`       | `input-id`        | The ID of the input element.                                                                            | `string \| undefined`               | `undefined` |
| `inputTabIndex` | `input-tab-index` | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). | `number \| undefined`               | `undefined` |
| `label`         | `label`           | The text to display within the label.                                                                   | `string \| undefined`               | `undefined` |
| `max`           | `max`             | Maximum date value (format: "YYYY-MM-DD").                                                              | `string \| undefined`               | `undefined` |
| `min`           | `min`             | Minimum date value (format: "YYYY-MM-DD").                                                              | `string \| undefined`               | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair.                         | `string \| undefined`               | `undefined` |
| `readOnly`      | `read-only`       | Whether the value is editable.                                                                          | `boolean \| undefined`              | `false`     |
| `required`      | `required`        | A value is required or must be checked for the form to be submittable.                                  | `boolean \| undefined`              | `false`     |
| `size`          | `size`            | The size of the input.                                                                                  | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `value`         | `value`           | The value of the control (format: "YYYY-MM-DD").                                                        | `string`                            | `''`        |

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

Here are some examples based on the `modus-wc-date.stories.ts` file:

**Default Date Input:**

This is the basic usage with a label.

```html
<modus-wc-date aria-label="Date input" label="Select Date"> </modus-wc-date>
```

_In a real application, you would likely bind the `value` property and listen to the `inputChange` event to manage the date value._

**Date Input with Min and Max Dates:**

You can restrict the selectable date range using the `min` and `max` properties. The date format should be "YYYY-MM-DD".

```html
<modus-wc-date
  label="Select Date (within range)"
  min="2023-01-01"
  max="2023-12-31"
>
</modus-wc-date>
```

**Disabled Date Input:**

Set the `disabled` property to `true` to prevent user interaction.

```html
<modus-wc-date label="Disabled Date" value="2023-10-26" disabled="true">
</modus-wc-date>
```

**Read-Only Date Input:**

Set `read-only="true"` if the date should be displayed but not editable.

```html
<modus-wc-date label="Read-Only Date" value="2023-11-15" read-only="true">
</modus-wc-date>
```

**Required Date Input:**

Mark the input as required for form submission. This usually adds a visual indicator.

```html
<modus-wc-date label="Required Date" required="true"> </modus-wc-date>
```

**Different Sizes:**

Control the size of the input using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-date label="Small Date" size="sm"></modus-wc-date>
<modus-wc-date label="Large Date" size="lg"></modus-wc-date>
```

**Date Input with Error Feedback:**

Provide feedback to the user, for example, when a required field is empty.

```html
<modus-wc-date
  label="Date with Error"
  required="true"
  .feedback=${{ level: 'error', message: 'This date is required.' }}>
</modus-wc-date>

<script>
  // Example of setting feedback programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.querySelector('modus-wc-date[label="Date with Error"]');
    if (dateElement) {
      // Simulate an error condition
      if (!dateElement.value) {
        dateElement.feedback = { level: 'error', message: 'This date is required.' };
      }
    }
  });
</script>
```

**Handling Input Events:**

```html
<modus-wc-date id="myDateInput" label="Eventful Date"></modus-wc-date>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("myDateInput");

    dateInput.addEventListener("inputChange", (event) => {
      console.log("Date changed:", event.target.value);
      // Update your component's state with event.target.value
    });

    dateInput.addEventListener("inputFocus", () => {
      console.log("Date input focused");
    });

    dateInput.addEventListener("inputBlur", () => {
      console.log("Date input blurred");
    });
  });
</script>
```
