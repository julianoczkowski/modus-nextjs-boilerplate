# Modus Web Components: Text Input (`modus-wc-text-input`)

The `modus-wc-text-input` component is a customizable input field for text-based user input. It supports various types (like email, password, search), sizes, and features such as clear buttons and search icons.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-text-input`:

| Property         | Attribute          | Description                                                                                                                                                              | Type                                                                                                                                                  | Default        |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `autoCapitalize` | `auto-capitalize`  | Controls automatic capitalization in inputted text.                                                                                                                      | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words" \| undefined`                                                                      | `undefined`    |
| `autoComplete`   | `auto-complete`    | Hint for form autofill feature.                                                                                                                                          | `AutocompleteTypes \| undefined` (Refer to standard HTML autocomplete values)                                                                         | `undefined`    |
| `autoCorrect`    | `auto-correct`     | Controls automatic correction in inputted text. Support by browser varies.                                                                                               | `"off" \| "on" \| undefined`                                                                                                                          | `undefined`    |
| `bordered`       | `bordered`         | Indicates that the input should have a border.                                                                                                                           | `boolean \| undefined`                                                                                                                                | `true`         |
| `clearAriaLabel` | `clear-aria-label` | Aria label for the clear icon button.                                                                                                                                    | `string \| undefined`                                                                                                                                 | `'Clear text'` |
| `customClass`    | `custom-class`     | Custom CSS class to apply to the input.                                                                                                                                  | `string \| undefined`                                                                                                                                 | `''`           |
| `disabled`       | `disabled`         | Whether the form control is disabled.                                                                                                                                    | `boolean \| undefined`                                                                                                                                | `false`        |
| `enterkeyhint`   | `enterkeyhint`     | A hint to the browser for which enter key to display.                                                                                                                    | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`                                                                | `undefined`    |
| `feedback`       | `feedback`         | Feedback to render below the input. (See `IInputFeedbackProp` details below)                                                                                             | `IInputFeedbackProp \| undefined`                                                                                                                     | `undefined`    |
| `includeClear`   | `include-clear`    | Show the clear button within the input field.                                                                                                                            | `boolean \| undefined`                                                                                                                                | `false`        |
| `includeSearch`  | `include-search`   | Show the search icon within the input field.                                                                                                                             | `boolean \| undefined`                                                                                                                                | `false`        |
| `inputId`        | `input-id`         | The ID of the input element.                                                                                                                                             | `string \| undefined`                                                                                                                                 | `undefined`    |
| `inputMode`      | `input-mode`       | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`                                                                 | `'text'`       |
| `inputTabIndex`  | `input-tab-index`  | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).                                                                  | `number \| undefined`                                                                                                                                 | `undefined`    |
| `label`          | `label`            | The text to display within the label.                                                                                                                                    | `string \| undefined`                                                                                                                                 | `undefined`    |
| `maxLength`      | `max-length`       | Maximum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                                                                                 | `undefined`    |
| `minLength`      | `min-length`       | Minimum length (number of characters) of value.                                                                                                                          | `number \| undefined`                                                                                                                                 | `undefined`    |
| `name`           | `name`             | Name of the form control. Submitted with the form as part of a name/value pair.                                                                                          | `string \| undefined`                                                                                                                                 | `undefined`    |
| `pattern`        | `pattern`          | Pattern the value must match to be valid.                                                                                                                                | `string \| undefined`                                                                                                                                 | `undefined`    |
| `placeholder`    | `placeholder`      | Text that appears in the form control when it has no value set.                                                                                                          | `string \| undefined`                                                                                                                                 | `''`           |
| `readOnly`       | `read-only`        | Whether the value is editable.                                                                                                                                           | `boolean \| undefined`                                                                                                                                | `false`        |
| `required`       | `required`         | A value is required for the form to be submittable.                                                                                                                      | `boolean \| undefined`                                                                                                                                | `false`        |
| `size`           | `size`             | The size of the input.                                                                                                                                                   | `"lg" \| "md" \| "sm" \| undefined`                                                                                                                   | `'md'`         |
| `type`           | `type`             | Type of form control.                                                                                                                                                    | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week" \| undefined` | `'text'`       |
| `value`          | `value`            | The value of the control.                                                                                                                                                | `string`                                                                                                                                              | `''`           |

_Note: The `type` prop includes date/time and number types. While functional, consider using dedicated components like `modus-wc-date`, `modus-wc-time-input`, and `modus-wc-number-input` for these specific use cases as they may offer more specialized features and styling._

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

Here are some examples based on the `modus-wc-text-input.stories.ts` file:

**Default Text Input:**

This is the basic usage with a label.

```html
<modus-wc-text-input aria-label="Text input example" label="Username">
</modus-wc-text-input>
```

_In a real application, bind the `value` property and listen to `inputChange` to manage the input's state._

**Different Input Types:**

Use the `type` property for common input variations.

- **Email Input:**
  ```html
  <modus-wc-text-input
    type="email"
    label="Email Address"
    placeholder="user@example.com"
  ></modus-wc-text-input>
  ```
- **Password Input:**
  ```html
  <modus-wc-text-input type="password" label="Password"></modus-wc-text-input>
  ```
- **Search Input:** (Can also be combined with `include-search="true"`)
  ```html
  <modus-wc-text-input
    type="search"
    label="Search"
    placeholder="Enter search term..."
  ></modus-wc-text-input>
  ```

**Input with Clear Button:**

Set `include-clear="true"` to show a button that clears the input's content.

```html
<modus-wc-text-input
  label="Searchable Field"
  include-clear="true"
  value="Some text to clear"
>
</modus-wc-text-input>
```

**Input with Search Icon:**

Set `include-search="true"` to display a search icon within the input field (typically on the left).

```html
<modus-wc-text-input
  label="Find"
  include-search="true"
  placeholder="Search items..."
>
</modus-wc-text-input>
```

**Disabled Text Input:**

Prevent user interaction by setting `disabled="true"`.

```html
<modus-wc-text-input label="Disabled Field" value="Cannot edit" disabled="true">
</modus-wc-text-input>
```

**Read-Only Text Input:**

Display text that cannot be edited by setting `read-only="true"`.

```html
<modus-wc-text-input
  label="Read-Only Information"
  value="This is for display only"
  read-only="true"
>
</modus-wc-text-input>
```

**Required Text Input:**

Mark the input as required for form submission.

```html
<modus-wc-text-input label="Required Name" required="true">
</modus-wc-text-input>
```

**Different Sizes:**

Control the size of the input using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-text-input label="Small Input" size="sm"></modus-wc-text-input>
<modus-wc-text-input label="Large Input" size="lg"></modus-wc-text-input>
```

**Input with Error Feedback:**

Provide contextual feedback, such as validation errors.

```html
<modus-wc-text-input
  label="Your Name"
  required="true"
  .feedback=${{ level: 'error', message: 'Name is required.' }}>
</modus-wc-text-input>

<script>
  // Example of setting feedback programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('modus-wc-text-input[label="Your Name"]');
    if (nameInput) {
      // Simulate a validation error
      if (!nameInput.value) {
        nameInput.feedback = { level: 'error', message: 'Name is required.' };
      }
    }
  });
</script>
```

**Other HTML5 Input Attributes:**
The component supports various standard HTML input attributes like `max-length`, `min-length`, `pattern`, `input-mode`, `auto-capitalize`, `auto-complete`, `auto-correct`, and `enterkeyhint`.

```html
<modus-wc-text-input
  label="Customized Input"
  max-length="10"
  input-mode="numeric"
  pattern="[0-9]*"
  auto-capitalize="none"
  enterkeyhint="next"
>
</modus-wc-text-input>
```

**Handling Input Events:**

```html
<modus-wc-text-input
  id="myTextInput"
  label="Interactive Text Input"
></modus-wc-text-input>
<p>Current Value: <span id="textInputValueDisplay"></span></p>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("myTextInput");
    const valueDisplay = document.getElementById("textInputValueDisplay");

    textInput.addEventListener("inputChange", (event) => {
      const newValue = event.target.value;
      console.log("Text input changed:", newValue);
      valueDisplay.textContent = newValue;
      // Update your component's state with newValue
    });

    textInput.addEventListener("inputFocus", () => {
      console.log("Text input focused");
    });

    textInput.addEventListener("inputBlur", () => {
      console.log("Text input blurred");
    });
  });
</script>
```

```

```
