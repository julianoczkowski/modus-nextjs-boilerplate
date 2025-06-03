# Modus Web Components: Chip (`modus-wc-chip`)

The `modus-wc-chip` component is used to display information in a compact area, often representing a selection, filter, or a small piece of data. It can include text, icons, and a remove button.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-chip`:

| Property      | Attribute      | Description                                               | Type                                 | Default    |
| ------------- | -------------- | --------------------------------------------------------- | ------------------------------------ | ---------- |
| `active`      | `active`       | Active state of chip.                                     | `boolean \| undefined`               | `false`    |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div.               | `string \| undefined`                | `''`       |
| `disabled`    | `disabled`     | Whether the chip is disabled.                             | `boolean \| undefined`               | `false`    |
| `hasError`    | `has-error`    | Whether the chip has an error.                            | `boolean \| undefined`               | `false`    |
| `label`       | `label`        | The label to display in the chip.                         | `string \| undefined`                | `''`       |
| `showRemove`  | `show-remove`  | Whether to show the close icon on right side of the chip. | `boolean \| undefined`               | `false`    |
| `size`        | `size`         | The size of the chip.                                     | `"lg" \| "md" \| "sm" \| undefined`  | `'md'`     |
| `variant`     | `variant`      | The variant of the chip.                                  | `"filled" \| "outline" \| undefined` | `'filled'` |

## Events

| Event        | Description                                                       | Type                                       |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------ |
| `chipClick`  | Event emitted when the chip is clicked or activated via keyboard. | `CustomEvent<KeyboardEvent \| MouseEvent>` |
| `chipRemove` | Event emitted when the close chip icon button is clicked.         | `CustomEvent<KeyboardEvent \| MouseEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-chip.stories.ts` file:

**Default Chip:**

This is a basic chip with a label and a remove icon.

```html
<modus-wc-chip aria-label="Chip example" label="Chip" show-remove="true">
</modus-wc-chip>
```

**Chip Variants & States:**

You can change the appearance using `variant`, `active`, `has-error`, and `disabled` properties.

- **Outline Variant:**
  ```html
  <modus-wc-chip label="Outline Chip" variant="outline"></modus-wc-chip>
  ```
- **Active Chip:**
  ```html
  <modus-wc-chip label="Active Chip" active="true"></modus-wc-chip>
  ```
- **Chip with Error:**
  ```html
  <modus-wc-chip
    label="Error Chip"
    has-error="true"
    show-remove="true"
  ></modus-wc-chip>
  ```
- **Disabled Chip:**
  ```html
  <modus-wc-chip
    label="Disabled Chip"
    disabled="true"
    show-remove="true"
  ></modus-wc-chip>
  ```

**Chip Sizes:**

Control the size of the chip with the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-chip label="Small Chip" size="sm"></modus-wc-chip>
<modus-wc-chip label="Large Chip" size="lg"></modus-wc-chip>
```

**Chip with Avatar:**

You can include a `modus-wc-avatar` component within the chip's default slot.

```html
<modus-wc-chip aria-label="Chip with avatar" label="Sonic" show-remove="true">
  <modus-wc-avatar
    img-src="[https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg](https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg)"
    alt="sonic the hedgehog"
  >
  </modus-wc-avatar>
</modus-wc-chip>
```

**Chip with Icon:**

You can include one or more `modus-wc-icon` components within the chip's default slot, along with text if desired.

- **Icon and Text:**
  ```html
  <modus-wc-chip aria-label="Chip with heart icon" show-remove="true">
    <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
    Chip
  </modus-wc-chip>
  ```
- **Icon Only (if label is not provided):**
  ```html
  <modus-wc-chip aria-label="Checkmark chip" show-remove="true">
    <modus-wc-icon name="check" size="xs"></modus-wc-icon>
  </modus-wc-chip>
  ```

**Handling Click and Remove Events:**

You can listen to the `chipClick` and `chipRemove` events to perform actions.

```html
<modus-wc-chip
  id="myChip"
  label="Interactive Chip"
  show-remove="true"
></modus-wc-chip>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const chipElement = document.getElementById("myChip");

    chipElement.addEventListener("chipClick", () => {
      console.log("Chip clicked!");
      // Toggle active state for example
      chipElement.active = !chipElement.active;
    });

    chipElement.addEventListener("chipRemove", () => {
      console.log("Chip remove clicked!");
      // chipElement.remove(); // Example: remove the chip from DOM
    });
  });
</script>
```
