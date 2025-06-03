# Modus Web Components: Select (`modus-wc-select`)

The `modus-wc-select` component is a customizable dropdown list that allows users to choose one option from a predefined set.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-select`:

| Property        | Attribute         | Description                                                                                             | Type                                | Default     |
| --------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `bordered`      | `bordered`        | Indicates that the input should have a border.                                                          | `boolean \| undefined`              | `true`      |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                                             | `string \| undefined`               | `''`        |
| `disabled`      | `disabled`        | Whether the form control is disabled.                                                                   | `boolean \| undefined`              | `false`     |
| `feedback`      | `feedback`        | Feedback to render below the input. (See `IInputFeedbackProp` details below)                            | `IInputFeedbackProp \| undefined`   | `undefined` |
| `inputId`       | `input-id`        | The ID of the input element.                                                                            | `string \| undefined`               | `undefined` |
| `inputTabIndex` | `input-tab-index` | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). | `number \| undefined`               | `undefined` |
| `label`         | `label`           | The text to display within the label.                                                                   | `string \| undefined`               | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair.                         | `string \| undefined`               | `undefined` |
| `options`       | `options`         | The options to display in the select dropdown. (See `ISelectOption` details below)                      | `ISelectOption[]`                   | `[]`        |
| `required`      | `required`        | A value is required for the form to be submittable.                                                     | `boolean \| undefined`              | `false`     |
| `size`          | `size`            | The size of the input.                                                                                  | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `value`         | `value`           | The value of the control.                                                                               | `string`                            | `''`        |

### `ISelectOption` Interface

Used by the `options` property:

- `disabled` (boolean, optional): Whether the option is disabled and cannot be selected.
- `label` (string): Display text for the option.
- `value` (string): The value of the option.

### `IInputFeedbackProp` Interface

Used by the `feedback` property:

- `level` ('error' | 'info' | 'success' | 'warning'): The feedback level.
- `message` (string, optional): The feedback message.

## Events

| Event         | Description                                 | Type                      |
| ------------- | ------------------------------------------- | ------------------------- |
| `inputBlur`   | Event emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Event emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Event emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-select.stories.ts` file:

**Default Select:**

This is the basic usage with a label and options.

```html
<modus-wc-select
  aria-label="Select input example"
  label="Choose an Option"
  .options=${[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}>
</modus-wc-select>

<script>
  // Example of setting options programmatically if not using a framework
  document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('modus-wc-select[aria-label="Select input example"]');
    if (selectElement) {
      selectElement.options = [
        { label: 'Option A (from script)', value: 'A' },
        { label: 'Option B (from script)', value: 'B', disabled: true },
        { label: 'Option C (from script)', value: 'C' }
      ];
      // To pre-select an option:
      // selectElement.value = 'C';
    }
  });
</script>
```

_In a real application, the `value` property would typically be bound to a component's state and updated via the `inputChange` event. The `options` would also likely be dynamic._

**Select with Pre-selected Value:**

Set the `value` property to match the `value` of one of the options to have it selected by default.

```html
<modus-wc-select
  label="Pre-selected Option"
  value="2"
  .options=${[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2 (Selected)', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}>
</modus-wc-select>
```

**Disabled Select:**

Set the `disabled` property to `true` to prevent user interaction.

```html
<modus-wc-select
  label="Disabled Select"
  disabled="true"
  .options=${[{ label: 'Cannot select', value: '1' }]}>
</modus-wc-select>
```

**Disabled Option:**

Individual options can be disabled by setting `disabled: true` in their respective `ISelectOption` object.

```html
<modus-wc-select
  label="Select with Disabled Option"
  .options=${[
    { label: 'Enabled Option 1', value: '1' },
    { label: 'Disabled Option 2', value: '2', disabled: true },
    { label: 'Enabled Option 3', value: '3' }
  ]}>
</modus-wc-select>
```

**Required Select:**

Mark the select input as required for form submission.

```html
<modus-wc-select
  label="Required Choice"
  required="true"
  .options=${[
    { label: 'Select one...', value: '' }, // Placeholder often used for required fields
    { label: 'Choice A', value: 'A' },
    { label: 'Choice B', value: 'B' }
  ]}>
</modus-wc-select>
```

**Different Sizes:**

Control the size of the select input using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-select
  label="Small Select"
  size="sm"
  .options=${[{ label: 'Small', value: 's' }]}>
</modus-wc-select>

<modus-wc-select
  label="Large Select"
  size="lg"
  .options=${[{ label: 'Large', value: 'l' }]}>
</modus-wc-select>
```

**Select with Error Feedback:**

Provide feedback to the user, for example, when a required field is not selected.

```html
<modus-wc-select
  label="Select with Error"
  required="true"
  .options=${[{ label: 'Please select', value: '' }]}
  .feedback=${{ level: 'error', message: 'This field is required.' }}>
</modus-wc-select>

<script>
  // Example of setting feedback programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('modus-wc-select[label="Select with Error"]');
    if (selectElement) {
      // Simulate an error condition
      if (!selectElement.value) {
        selectElement.feedback = { level: 'error', message: 'This field is required.' };
      }
    }
  });
</script>
```

**Handling Input Events:**

```html
<modus-wc-select
  id="mySelect"
  label="Interactive Select"
  .options=${[
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' }
  ]}>
</modus-wc-select>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('mySelect');

    selectElement.addEventListener('inputChange', (event) => {
      console.log('Selected value:', event.target.value);
      // Update your component's state with event.target.value
    });

    selectElement.addEventListener('inputFocus', () => {
      console.log('Select input focused');
    });

    selectElement.addEventListener('inputBlur', () => {
      console.log('Select input blurred');
    });
  });
</script>

```
