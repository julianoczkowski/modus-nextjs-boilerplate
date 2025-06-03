# Modus Web Components: Input Label (`modus-wc-input-label`)

The `modus-wc-input-label` component is used to display a label for form input elements. It can include a main label, a sub-label, and an indicator for required fields. It also supports slotting for additional custom content.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-input-label`:

| Property       | Attribute        | Description                                                                  | Type                                | Default     |
| -------------- | ---------------- | ---------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `customClass`  | `custom-class`   | Additional classes for custom styling.                                       | `string \| undefined`               | `''`        |
| `forId`        | `for-id`         | The `for` attribute of the label, matching the `id` of the associated input. | `string \| undefined`               | `undefined` |
| `labelText`    | `label-text`     | The text to display within the label.                                        | `string \| undefined`               | `undefined` |
| `required`     | `required`       | Whether the label indicates a required field.                                | `boolean \| undefined`              | `false`     |
| `size`         | `size`           | The size of the label.                                                       | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `subLabelText` | `sub-label-text` | The text rendered beneath the label.                                         | `string \| undefined`               | `undefined` |

## Slots

The `modus-wc-input-label` component supports a default slot for injecting additional custom content inside the label, such as icons or formatted text.

## Usage Examples

Here are some examples based on the `modus-wc-input-label.stories.ts` file:

**Default Label:**

This is the basic usage with just the label text.

```html
<modus-wc-input-label label-text="Username"></modus-wc-input-label>
```

**Label with `for` Attribute:**

Associate the label with an input element using the `for-id` property, which maps to the `for` attribute of the HTML `<label>` element.

```html
<modus-wc-input-label for-id="usernameInput" label-text="Username">
</modus-wc-input-label>
<input type="text" id="usernameInput" />
```

**Required Field Indicator:**

Set the `required` property to `true` to display an asterisk (\*) indicating that the associated input field is required.

```html
<modus-wc-input-label label-text="Email Address" required="true">
</modus-wc-input-label>
```

**Label with Sub-Label:**

Provide additional context or instructions using the `sub-label-text` property.

```html
<modus-wc-input-label
  label-text="Password"
  sub-label-text="Must be at least 8 characters"
>
</modus-wc-input-label>
```

**Different Sizes:**

Control the size of the label text (and sub-label text proportionally) using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-input-label label-text="Small Label" size="sm">
</modus-wc-input-label>

<modus-wc-input-label label-text="Medium Label (Default)" size="md">
</modus-wc-input-label>

<modus-wc-input-label
  label-text="Large Label"
  sub-label-text="With a large sub-label"
  size="lg"
>
</modus-wc-input-label>
```

**Label with Slotted Content:**

You can place custom HTML content, like an icon, inside the label using the default slot.

```html
<modus-wc-input-label label-text="Search">
  <modus-wc-icon
    name="search"
    size="sm"
    style="margin-left: 4px;"
  ></modus-wc-icon>
</modus-wc-input-label>
```

**Applying a Custom Class:**

Use the `custom-class` property for additional CSS styling if needed.

```html
<style>
  .my-custom-label-style {
    font-style: italic;
    color: blue;
  }
</style>

<modus-wc-input-label
  label-text="Custom Styled Label"
  custom-class="my-custom-label-style"
>
</modus-wc-input-label>
```
