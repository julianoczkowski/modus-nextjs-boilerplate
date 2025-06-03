# Modus Web Components: Radio Button (`modus-wc-radio`)

The `modus-wc-radio` component is a standard form control that allows users to select one option from a set of mutually exclusive options. Radio buttons are typically used in groups.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-radio`:

| Property        | Attribute         | Description                                                                                                                        | Type                                        | Default     |
| --------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------- |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                                                                        | `string \| undefined`                       | `''`        |
| `disabled`      | `disabled`        | The disabled state of the radio button.                                                                                            | `boolean \| undefined`                      | `false`     |
| `inputId`       | `input-id`        | The ID of the input element.                                                                                                       | `string \| undefined`                       | `undefined` |
| `inputTabIndex` | `input-tab-index` | The tabindex of the input.                                                                                                         | `number \| undefined`                       | `undefined` |
| `label`         | `label`           | The text to display within the label associated with the radio button.                                                             | `string \| undefined`                       | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair. Radio buttons in a group must share the same name. | `string \| undefined`                       | `''`        |
| `required`      | `required`        | A value is required for the form to be submittable (at least one radio button in the group must be selected).                      | `boolean \| undefined`                      | `false`     |
| `size`          | `size`            | The size of the radio input.                                                                                                       | `"lg" \| "md" \| "sm" \| "xs" \| undefined` | `'md'`      |
| `value`         | `value`           | The checked state of the radio button.                                                                                             | `boolean`                                   | `false`     |

## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-radio.stories.ts` file. Radio buttons are typically used in groups where only one can be selected.

**Basic Radio Button Group:**

To create a group of radio buttons, give them the same `name` attribute.

```html
<fieldset>
  <legend>Choose your preferred contact method:</legend>

  <modus-wc-radio
    label="Email"
    name="contactMethod"
    input-id="contactEmail"
    value="true"
  >
  </modus-wc-radio>

  <modus-wc-radio
    label="Phone"
    name="contactMethod"
    input-id="contactPhone"
    value="false"
  >
  </modus-wc-radio>

  <modus-wc-radio
    label="Mail"
    name="contactMethod"
    input-id="contactMail"
    value="false"
  >
  </modus-wc-radio>
</fieldset>

<script>
  // Basic example of handling radio group changes
  document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll(
      'modus-wc-radio[name="contactMethod"]'
    );
    let selectedValue = "contactEmail"; // Assuming 'Email' is checked by default

    radioButtons.forEach((radio) => {
      // Initialize checked state based on 'value' prop
      if (radio.value) {
        // 'value' here refers to the boolean 'checked' state prop
        selectedValue = radio.inputId;
      }
      // Set checked state based on which one is actually selected in a real group
      radio.checked = radio.inputId === selectedValue;

      radio.addEventListener("inputChange", (event) => {
        if (event.target.checked) {
          selectedValue = event.target.id;
          console.log("Selected contact method:", selectedValue);

          // Uncheck other radio buttons in the same group
          radioButtons.forEach((otherRadio) => {
            if (otherRadio !== event.target) {
              otherRadio.checked = false; // Update the 'checked' prop for visual state
              otherRadio.value = false; // Also update the 'value' prop if it mirrors 'checked'
            } else {
              otherRadio.value = true; // Mark the current one as true for its 'value' prop
            }
          });
        }
      });
    });
  });
</script>
```

_Note: In a real application, managing the `value` (checked state) of radio buttons in a group often involves a state management solution where only one item in the group can have its `value` (checked state) as true._

**Radio Button Sizes:**

You can control the size of the radio input using the `size` property (`xs`, `sm`, `md`, `lg`).

```html
<modus-wc-radio label="Extra Small" name="sizeGroup" size="xs"></modus-wc-radio>
<modus-wc-radio
  label="Small"
  name="sizeGroup"
  size="sm"
  value="true"
></modus-wc-radio>
<modus-wc-radio
  label="Medium (default)"
  name="sizeGroup"
  size="md"
></modus-wc-radio>
<modus-wc-radio label="Large" name="sizeGroup" size="lg"></modus-wc-radio>
```

**Disabled Radio Button:**

Set the `disabled` property to `true` to prevent user interaction.

```html
<modus-wc-radio
  label="Disabled Option"
  name="availability"
  disabled="true"
  value="true"
>
</modus-wc-radio>
<modus-wc-radio label="Enabled Option" name="availability" value="false">
</modus-wc-radio>
```

**Required Radio Button Group:**

If at least one option from a radio group must be selected for form submission, you can mark individual radio buttons as `required`. Browsers typically require at least one radio button in a named group to be checked if any of them have the `required` attribute.

```html
<fieldset>
  <legend>Confirm understanding (Required)</legend>
  <modus-wc-radio
    label="Yes, I understand"
    name="confirmation"
    input-id="confirmYes"
    required="true"
  >
  </modus-wc-radio>
  <modus-wc-radio
    label="No, I need clarification"
    name="confirmation"
    input-id="confirmNo"
    required="true"
  >
  </modus-wc-radio>
</fieldset>
```

**Radio Button without Label:**

If you don't provide a `label`, ensure you provide an `aria-label` directly on the `modus-wc-radio` element for accessibility.

```html
<modus-wc-radio aria-label="Option A" name="choice"></modus-wc-radio>
```

**Handling Input Events:**

You can listen to `inputChange`, `inputFocus`, and `inputBlur` events.

```html
<modus-wc-radio
  id="myRadio"
  label="Receive notifications"
  name="notifications"
></modus-wc-radio>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const radioElement = document.getElementById("myRadio");

    radioElement.addEventListener("inputChange", (event) => {
      // The actual checked state is on event.target.checked
      console.log("Radio state changed:", event.target.checked);
      // Update your component's state
    });

    radioElement.addEventListener("inputFocus", () => {
      console.log("Radio input focused");
    });

    radioElement.addEventListener("inputBlur", () => {
      console.log("Radio input blurred");
    });
  });
</script>
```
