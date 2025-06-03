# Modus Web Components: Time Input (`modus-wc-time-input`)

The `modus-wc-time-input` component is a customizable input field specifically designed for time entry. It allows users to input time in HH:mm or HH:mm:ss format and supports features like min/max times, step increments, and datalist suggestions.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-time-input`:

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                  | Type                                | Default     |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `autoComplete`    | `auto-complete`    | Hint for form autofill feature.                                                                                                                                                                                                                                              | `"off" \| "on" \| undefined`        | `undefined` |
| `bordered`        | `bordered`         | Indicates that the input should have a border.                                                                                                                                                                                                                               | `boolean \| undefined`              | `true`      |
| `customClass`     | `custom-class`     | Custom CSS class to apply to the input.                                                                                                                                                                                                                                      | `string \| undefined`               | `''`        |
| `datalistId`      | `datalist-id`      | ID of a `<datalist>` element that contains pre-defined time options. The value must be the ID of a `<datalist>` element in the same document. If not set and `datalistOptions` are provided, an internal datalist will be used.                                              | `string \| undefined`               | `undefined` |
| `datalistOptions` | `datalist-options` | The options to display in the time input dropdown. Options must be in `HH:mm` or `HH:mm:ss` format. This will render an internal `<datalist>` if `datalistId` is not pointing to an external one.                                                                            | `string[]`                          | `[]`        |
| `disabled`        | `disabled`         | Whether the form control is disabled.                                                                                                                                                                                                                                        | `boolean \| undefined`              | `false`     |
| `feedback`        | `feedback`         | Feedback to render below the input. (See `IInputFeedbackProp` details below)                                                                                                                                                                                                 | `IInputFeedbackProp \| undefined`   | `undefined` |
| `inputId`         | `input-id`         | The ID of the input element.                                                                                                                                                                                                                                                 | `string \| undefined`               | `undefined` |
| `inputTabIndex`   | `input-tab-index`  | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                                                                                                                      | `number \| undefined`               | `undefined` |
| `label`           | `label`            | The text to display within the label.                                                                                                                                                                                                                                        | `string \| undefined`               | `undefined` |
| `max`             | `max`              | Maximum value. Format: `HH:mm` or `HH:mm:ss`.                                                                                                                                                                                                                                | `string \| undefined`               | `undefined` |
| `min`             | `min`              | Minimum value. Format: `HH:mm` or `HH:mm:ss`.                                                                                                                                                                                                                                | `string \| undefined`               | `undefined` |
| `name`            | `name`             | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                                                                                                                              | `string \| undefined`               | `undefined` |
| `readOnly`        | `read-only`        | Whether the value is editable.                                                                                                                                                                                                                                               | `boolean \| undefined`              | `false`     |
| `required`        | `required`         | A value is required for the form to be submittable.                                                                                                                                                                                                                          | `boolean \| undefined`              | `false`     |
| `showSeconds`     | `show-seconds`     | Displays the time input format as `HH:mm:ss` if `true`. Internally sets the `step` to 1 second. If a `step` value is provided, it will override this attribute.                                                                                                              | `boolean \| undefined`              | `false`     |
| `size`            | `size`             | The size of the input.                                                                                                                                                                                                                                                       | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `step`            | `step`             | Specifies the granularity that the `value` must adhere to. Value of step given in seconds (e.g., 60 for 1 minute, 3600 for 1 hour). Default value is 60 seconds (1 minute). Overrides the `showSeconds` attribute's step behavior if both are provided.                      | `number \| undefined`               | `undefined` |
| `value`           | `value`            | The value of the time input. Always in 24-hour format that includes leading zeros: `HH:mm` or `HH:mm:ss`, regardless of input format which is likely to be selected based on user's locale (or by the user agent). If time includes seconds the format is always `HH:mm:ss`. | `string`                            | `''`        |

### `IInputFeedbackProp` Interface

Used by the `feedback` property:

- `level` ('error' | 'info' | 'success' | 'warning'): The feedback level.
- `message` (string, optional): The feedback message.

## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<Event>`      |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-time-input.stories.ts` file:

**Default Time Input:**

This is the basic usage with a label. The browser will typically default to an HH:mm format unless `showSeconds` or `step` dictates otherwise.

```html
<modus-wc-time-input aria-label="Time input example" label="Select Time">
</modus-wc-time-input>
```

_In a real application, bind the `value` property and listen to `inputChange` to manage the input's state._

**Time Input with Seconds:**

Set `show-seconds="true"` to include seconds in the input display and allow second-level precision. This implicitly sets `step="1"` unless a `step` prop is also provided.

```html
<modus-wc-time-input
  label="Time with Seconds"
  show-seconds="true"
  value="14:30:45"
>
</modus-wc-time-input>
```

**Time Input with Min, Max, and Step:**

Control the allowed time range and increments. `step` is in seconds.

```html
<modus-wc-time-input
  label="Appointment Time (9am-5pm, 30min intervals)"
  min="09:00"
  max="17:00"
  step="1800"
>
</modus-wc-time-input>
```

**Time Input with Datalist (External):**

Provide a list of predefined time options using an external `<datalist>` element by referencing its ID with the `datalist-id` property.

```html
<modus-wc-time-input
  label="Preferred Time (External Datalist)"
  datalist-id="time-suggestions"
>
</modus-wc-time-input>

<datalist id="time-suggestions">
  <option value="08:00"></option>
  <option value="12:30"></option>
  <option value="17:15"></option>
</datalist>
```

**Time Input with Datalist Options (Internal):**

Provide an array of time strings directly to the `datalistOptions` property. The component will create an internal `<datalist>` element.

```html
<modus-wc-time-input
  label="Meeting Time (Internal Datalist)"
  .datalistOptions=${['10:00', '10:30', '11:00:30', '11:45']}>
</modus-wc-time-input>

<script>
  // Example of setting datalistOptions programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const timeInput = document.querySelector('modus-wc-time-input[label="Meeting Time (Internal Datalist)"]');
    if (timeInput) {
      timeInput.datalistOptions = ['09:00', '13:00', '16:30:15'];
    }
  });
</script>
```

**Disabled Time Input:**

Prevent user interaction by setting `disabled="true"`.

```html
<modus-wc-time-input label="Disabled Time" value="10:00" disabled="true">
</modus-wc-time-input>
```

**Read-Only Time Input:**

Display a time that cannot be edited by setting `read-only="true"`.

```html
<modus-wc-time-input
  label="Read-Only Start Time"
  value="09:30"
  read-only="true"
>
</modus-wc-time-input>
```

**Different Sizes:**

Control the size of the input using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-time-input label="Small Time Input" size="sm"></modus-wc-time-input>
<modus-wc-time-input label="Large Time Input" size="lg"></modus-wc-time-input>
```

**Time Input with Error Feedback:**

Provide contextual feedback, such as validation errors.

```html
<modus-wc-time-input
  label="Event Start Time"
  required="true"
  .feedback=${{ level: 'error', message: 'Start time is required.' }}>
</modus-wc-time-input>

<script>
  // Example of setting feedback programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const timeInput = document.querySelector('modus-wc-time-input[label="Event Start Time"]');
    if (timeInput) {
      // Simulate an error condition
      if (!timeInput.value) {
        timeInput.feedback = { level: 'error', message: 'Start time is required.' };
      }
    }
  });
</script>
```

**Handling Input Events:**

```html
<modus-wc-time-input
  id="myTimeInput"
  label="Interactive Time Input"
></modus-wc-time-input>
<p>Current Value: <span id="timeValueDisplay"></span></p>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const timeInputElement = document.getElementById("myTimeInput");
    const valueDisplay = document.getElementById("timeValueDisplay");

    timeInputElement.addEventListener("inputChange", (event) => {
      const newValue = event.target.value;
      console.log("Time input changed:", newValue);
      valueDisplay.textContent = newValue;
      // Update your component's state with newValue
    });

    timeInputElement.addEventListener("inputFocus", () => {
      console.log("Time input focused");
    });

    timeInputElement.addEventListener("inputBlur", () => {
      console.log("Time input blurred");
    });
  });
</script>
```
