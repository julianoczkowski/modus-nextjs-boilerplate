# Modus Web Components: Menu Item (`modus-wc-menu-item`)

The `modus-wc-menu-item` component is used to display an individual item within a `modus-wc-menu`. It can include a label, a sub-label, an icon, and supports states like selected, disabled, and focused.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-menu-item`:

| Property      | Attribute      | Description                                                  | Type                                | Default     |
| ------------- | -------------- | ------------------------------------------------------------ | ----------------------------------- | ----------- |
| `bordered`    | `bordered`     | Adds a border to the menu item.                              | `boolean \| undefined`              | `undefined` |
| `customClass` | `custom-class` | Custom CSS class to apply to the `<li>` element.             | `string \| undefined`               | `''`        |
| `disabled`    | `disabled`     | The disabled state of the menu item.                         | `boolean \| undefined`              | `undefined` |
| `focused`     | `focused`      | The focused state of the menu item.                          | `boolean \| undefined`              | `undefined` |
| `label`       | `label`        | The text rendered in the menu item. (Required)               | `string`                            | `''`        |
| `selected`    | `selected`     | The selected state of the menu item.                         | `boolean \| undefined`              | `undefined` |
| `size`        | `size`         | The size of the menu item.                                   | `"lg" \| "md" \| "sm" \| undefined` | `'md'`      |
| `startIcon`   | `start-icon`   | The modus icon name to render on the start of the menu item. | `string \| undefined`               | `undefined` |
| `subLabel`    | `sub-label`    | The text rendered beneath the label.                         | `string \| undefined`               | `undefined` |
| `value`       | `value`        | The unique identifying value of the menu item. (Required)    | `string`                            | `''`        |

## Events

| Event        | Description                                 | Type                              |
| ------------ | ------------------------------------------- | --------------------------------- |
| `itemSelect` | Event emitted when a menu item is selected. | `CustomEvent<{ value: string; }>` |

## Usage Examples

Here are some examples based on the `modus-wc-menu-item.stories.ts` file. Menu items are typically placed inside a `modus-wc-menu` component.

**Default Menu Item:**

This is the basic usage, requiring `label` and `value`.

```html
<modus-wc-menu>
  <modus-wc-menu-item label="Standard Item" value="item1"> </modus-wc-menu-item>
</modus-wc-menu>
```

**Menu Item with Sub-Label:**

Use the `sub-label` property to add descriptive text below the main label.

```html
<modus-wc-menu>
  <modus-wc-menu-item
    label="Primary Action"
    sub-label="This is an important action"
    value="action1"
  >
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Menu Item with Start Icon:**

Add an icon to the beginning of the menu item using the `start-icon` property.

```html
<modus-wc-menu>
  <modus-wc-menu-item label="Settings" start-icon="settings" value="settings">
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Selected Menu Item:**

Indicate that an item is currently selected by setting `selected="true"`. This usually applies a different background color and a checkmark icon (by default).

```html
<modus-wc-menu>
  <modus-wc-menu-item
    label="Selected Option"
    value="optionSelected"
    selected="true"
  >
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Disabled Menu Item:**

Prevent interaction with a menu item by setting `disabled="true"`.

```html
<modus-wc-menu>
  <modus-wc-menu-item label="Disabled Feature" value="featureX" disabled="true">
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Focused Menu Item:**

The `focused` state is typically managed internally for keyboard navigation but can be set programmatically if needed. It usually applies a hover-like visual style.

```html
<modus-wc-menu>
  <modus-wc-menu-item
    label="Focused Item (e.g., via keyboard)"
    value="itemFocused"
    focused="true"
  >
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Different Sizes:**

Control the size of the menu item (which affects text size, padding, and icon size) using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-menu>
  <modus-wc-menu-item
    label="Small Item"
    value="small"
    size="sm"
    start-icon="info"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Medium Item"
    value="medium"
    size="md"
    start-icon="info"
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Large Item"
    value="large"
    size="lg"
    start-icon="info"
  ></modus-wc-menu-item>
</modus-wc-menu>
```

**Bordered Menu Item:**

Add a border (typically top and bottom) to the menu item. This is often used when menu items are part of a list that itself might not have an overall border.

```html
<modus-wc-menu>
  <modus-wc-menu-item label="Bordered Item" value="border1" bordered="true">
  </modus-wc-menu-item>
  <modus-wc-menu-item
    label="Another Bordered Item"
    value="border2"
    bordered="true"
  >
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Handling Item Selection:**

Listen to the `itemSelect` event to perform an action when a menu item is clicked. The event detail will contain the `value` of the selected item.

```html
<modus-wc-menu id="myInteractiveMenu">
  <modus-wc-menu-item label="Open File" value="openFile"></modus-wc-menu-item>
  <modus-wc-menu-item label="Save File" value="saveFile"></modus-wc-menu-item>
</modus-wc-menu>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("myInteractiveMenu");
    menu.addEventListener("itemSelect", (event) => {
      console.log("Menu item selected:", event.detail.value);
      // Example: if (event.detail.value === 'openFile') { /* open file dialog */ }
    });
  });
</script>
```

```

```
