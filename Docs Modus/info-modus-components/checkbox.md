# Modus Web Components: Checkbox (`modus-wc-checkbox`)

The `modus-wc-checkbox` component is a standard form control that allows users to select one or more options from a set. It can also represent a binary choice.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-checkbox`:

| Property        | Attribute         | Description                                                                     | Type                                | Default     |
| --------------- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                     | `string \| undefined`               | `''`        |
| `disabled`      | `disabled`        | The disabled state of the checkbox.                                             | `boolean \| undefined`              | `false`     |
| `indeterminate` | `indeterminate`   | The indeterminate state of the checkbox.                                        | `boolean`                           | `false`     |
| `inputId`       | `input-id`        | The ID of the input element.                                                    | `string \| undefined`               | `undefined` |
| `inputTabIndex` | `input-tab-index` | The tabindex of the input.                                                      | `number \| undefined`               | `undefined` |
| `label`         | `label`           | The text to display within the label.                                           | `string \| undefined`               | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair. | `string \| undefined`               | `''`        |
| `required`      | `required`        | A value is required for the form to be submittable.                             | `boolean \| undefined`              | `false`     |
| `size`          | `size`            | The size of the input.                                                          | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `value`         | `value`           | The value (checked state) of the checkbox.                                      | `boolean`                           | `false`     |

## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-checkbox.stories.ts` file:

**Default Checkbox:**

This is the basic usage of the checkbox with a label.

```html
<modus-wc-checkbox aria-label="Checkbox example" label="Label" value="true">
</modus-wc-checkbox>
```

_Note: In a real application, the `value` property would typically be bound to a component's state and updated via the `inputChange` event._

**Checkbox Sizes:**

You can control the size of the checkbox using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-checkbox label="Small" size="sm"></modus-wc-checkbox>
<modus-wc-checkbox label="Medium (default)" size="md"></modus-wc-checkbox>
<modus-wc-checkbox label="Large" size="lg"></modus-wc-checkbox>
```

**Disabled Checkbox:**

Set the `disabled` property to `true` to disable the checkbox.

```html
<modus-wc-checkbox
  label="Disabled Checkbox"
  disabled="true"
  value="true"
></modus-wc-checkbox>
<modus-wc-checkbox
  label="Disabled Unchecked"
  disabled="true"
  value="false"
></modus-wc-checkbox>
```

**Indeterminate Checkbox:**

The `indeterminate` state is often used in tree structures or when a checkbox represents a mixed state of sub-options.

```html
<modus-wc-checkbox
  label="Indeterminate State"
  indeterminate="true"
></modus-wc-checkbox>
```

_Note: When `indeterminate` is true, the visual state of the checkbox shows a mixed state, regardless of the `value` (checked) prop._

**Required Checkbox:**

Set the `required` property to `true` to indicate that the checkbox must be checked for form submission. This usually adds a visual indicator next to the label.

```html
<modus-wc-checkbox label="Required Field" required="true"></modus-wc-checkbox>
```

**Checkbox without Label:**

If you don't provide a `label`, ensure you provide an `aria-label` for accessibility.

```html
<modus-wc-checkbox aria-label="Standalone checkbox"></modus-wc-checkbox>
```

**Handling Change Events:**

You can listen to the `inputChange` event to react to changes in the checkbox's state.

```html
<modus-wc-checkbox
  id="myCheckbox"
  label="Subscribe to newsletter"
></modus-wc-checkbox>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxElement = document.getElementById("myCheckbox");

    checkboxElement.addEventListener("inputChange", (event) => {
      // The actual checked state is on the event.target (the input element)
      const isChecked = event.target.checked;
      console.log("Checkbox value changed:", isChecked);
      // Update your component's state with isChecked
      checkboxElement.value = isChecked; // Reflect state back to component if managing externally
    });
  });
</script>
```
