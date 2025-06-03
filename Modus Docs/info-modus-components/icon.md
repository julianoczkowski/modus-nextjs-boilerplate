# Modus Web Components: Icon (`modus-wc-icon`)

The `modus-wc-icon` component is used to render Modus icons. It allows for customization of the icon's name, size, and accessibility properties.

**Important:** This component requires Modus icons to be installed in the host application. Refer to the "Modus Icon Usage" documentation for installation steps.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-icon`:

| Property      | Attribute      | Description                                                                                                                    | Type                                        | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ----------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the `<i>` element.                                                                                | `string \| undefined`                       | `''`        |
| `decorative`  | `decorative`   | Indicates that the icon is decorative. When true, sets `aria-hidden="true"` to hide the icon from screen readers.              | `boolean \| undefined`                      | `true`      |
| `name`        | `name`         | The icon name, which should match the CSS class in the icon font (e.g., "add", "alert", "calendar_check"). (Required)          | `string`                                    | `undefined` |
| `size`        | `size`         | The icon size, can be "xs", "sm", "md", "lg" (a custom size can be specified in CSS). This adjusts the font size for the icon. | `"lg" \| "md" \| "sm" \| "xs" \| undefined` | `'md'`      |

## Usage Examples

Here are some examples based on the `modus-wc-icon.stories.ts` file:

**Default Icon:**

This is the basic usage of the icon. You must provide the `name` property. By default, it's considered decorative.

```html
<modus-wc-icon name="alert" aria-label="Alert icon"></modus-wc-icon>
```

_Note: If `decorative` is `false` (or not set and an `aria-label` is provided on the host element), an `aria-label` will be automatically generated as `"{name} icon"` if not explicitly set on `modus-wc-icon` itself._

**Icon Sizes:**

You can control the size of the icon using the `size` property.

```html
<modus-wc-icon
  name="settings"
  size="xs"
  aria-label="Extra small settings icon"
></modus-wc-icon>
<modus-wc-icon
  name="settings"
  size="sm"
  aria-label="Small settings icon"
></modus-wc-icon>
<modus-wc-icon
  name="settings"
  size="md"
  aria-label="Medium settings icon"
></modus-wc-icon>
<modus-wc-icon
  name="settings"
  size="lg"
  aria-label="Large settings icon"
></modus-wc-icon>
```

**Non-Decorative Icon:**

If the icon conveys meaning and is not purely decorative, set `decorative="false"` and provide a descriptive `aria-label`.

```html
<modus-wc-icon
  name="warning"
  decorative="false"
  aria-label="Warning"
></modus-wc-icon>
```

**Custom Color:**

You can change the color of the icon using CSS. Apply a custom class via the `custom-class` property or target the component directly.

```html
<style>
  .error-icon {
    color: red;
  }
</style>

<modus-wc-icon
  name="cancel"
  custom-class="error-icon"
  decorative="false"
  aria-label="Error"
>
</modus-wc-icon>
```

Or by targeting the component's `<i>` tag (less recommended if you need specificity):

```html
<style>
  modus-wc-icon[name="success"] i {
    color: green;
  }
</style>
<modus-wc-icon
  name="success"
  decorative="false"
  aria-label="Success"
></modus-wc-icon>
```

**Using `aria-label` on the host vs. component:**

If an `aria-label` is provided directly on the `<modus-wc-icon>` element, it will be used. If `decorative` is `false` and no `aria-label` is on the component, but one exists on the host `<modus-wc-icon>` element, it will be inherited. If neither is present and the icon is not decorative, a default label like `"{name} icon"` will be generated.

```html
<modus-wc-icon
  name="alert"
  decorative="false"
  aria-label="Important alert"
></modus-wc-icon>

<modus-wc-icon name="info" decorative="false" aria-label="Information">
</modus-wc-icon>
```

It is generally recommended to provide a specific `aria-label` directly on the `modus-wc-icon` when `decorative` is `false`.
