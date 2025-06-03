# Modus Web Components: Switch (`modus-wc-switch`)

The `modus-wc-switch` component is a form control that allows users to toggle between two states, typically on or off. It's visually represented as a toggle switch.

## Properties

Based on the `readme.md` file (which refers to it as "modus-wc-toggle" in the auto-generated overview but uses `modus-wc-switch` for the tag and properties), here are the properties for the `modus-wc-switch`:

| Property        | Attribute         | Description                                                                     | Type                                | Default     |
| --------------- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                     | `string \| undefined`               | `''`        |
| `disabled`      | `disabled`        | The disabled state of the switch.                                               | `boolean \| undefined`              | `false`     |
| `indeterminate` | `indeterminate`   | The indeterminate state of the switch.                                          | `boolean`                           | `false`     |
| `inputId`       | `input-id`        | The ID of the input element.                                                    | `string \| undefined`               | `undefined` |
| `inputTabIndex` | `input-tab-index` | The tabindex of the input.                                                      | `number \| undefined`               | `undefined` |
| `label`         | `label`           | The text to display within the label associated with the switch.                | `string \| undefined`               | `undefined` |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair. | `string \| undefined`               | `''`        |
| `required`      | `required`        | A value is required for the form to be submittable.                             | `boolean \| undefined`              | `false`     |
| `size`          | `size`            | The size of the input.                                                          | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `value`         | `value`           | The value (checked state) of the switch.                                        | `boolean`                           | `false`     |

## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-switch.stories.ts` file:

**Default Switch:**

This is the basic usage of the switch with a label.

```html
<modus-wc-switch
  aria-label="Toggle setting"
  label="Enable Notifications"
  value="true"
>
</modus-wc-switch>
```

_Note: In a real application, the `value` property would typically be bound to a component's state and updated via the `inputChange` event._

**Switch Sizes:**

You can control the size of the switch using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-switch label="Small Switch" size="sm"></modus-wc-switch>
<modus-wc-switch
  label="Medium Switch (default)"
  size="md"
  value="true"
></modus-wc-switch>
<modus-wc-switch label="Large Switch" size="lg"></modus-wc-switch>
```

**Disabled Switch:**

Set the `disabled` property to `true` to prevent user interaction.

```html
<modus-wc-switch label="Disabled On" disabled="true" value="true">
</modus-wc-switch>
<modus-wc-switch label="Disabled Off" disabled="true" value="false">
</modus-wc-switch>
```

**Indeterminate Switch:**

The `indeterminate` state can represent a "mixed" state, though its visual representation for a switch might be less common than for a checkbox. When `indeterminate` is true, the switch's appearance might indicate this third state.

```html
<modus-wc-switch
  label="Indeterminate State"
  indeterminate="true"
></modus-wc-switch>
```

**Required Switch:**

Set the `required` property to `true`. For a switch, this typically means it must be in the "on" (true) state for form submission if it's the only way to satisfy a requirement.

```html
<modus-wc-switch
  label="Agree to terms (Required)"
  required="true"
></modus-wc-switch>
```

**Switch without Label:**

If you don't provide a `label`, ensure you provide an `aria-label` directly on the `modus-wc-switch` element for accessibility.

```html
<modus-wc-switch aria-label="Power toggle"></modus-wc-switch>
```

**Handling Input Events:**

You can listen to `inputChange`, `inputFocus`, and `inputBlur` events.

```html
<modus-wc-switch id="mySwitch" label="Feature Toggle"></modus-wc-switch>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const switchElement = document.getElementById("mySwitch");

    switchElement.addEventListener("inputChange", (event) => {
      // The actual checked state is on event.target.checked
      const isOn = event.target.checked;
      console.log("Switch value changed:", isOn);
      // Update your component's state with isOn
      switchElement.value = isOn; // Reflect state back to component if managing externally
    });

    switchElement.addEventListener("inputFocus", () => {
      console.log("Switch input focused");
    });

    switchElement.addEventListener("inputBlur", () => {
      console.log("Switch input blurred");
    });
  });
</script>
```

```

```
