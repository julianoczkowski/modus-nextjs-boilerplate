# Modus Web Components: Menu (`modus-wc-menu`)

The `modus-wc-menu` component is used to display a list of items, typically `modus-wc-menu-item` components or custom `<li>` elements, arranged vertically or horizontally. It serves as a container for navigation or action lists.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-menu`:

| Property      | Attribute      | Description                                      | Type                                      | Default      |
| ------------- | -------------- | ------------------------------------------------ | ----------------------------------------- | ------------ |
| `bordered`    | `bordered`     | Indicates that the menu should have a border.    | `boolean \| undefined`                    | `undefined`  |
| `customClass` | `custom-class` | Custom CSS class to apply to the `<ul>` element. | `string \| undefined`                     | `''`         |
| `orientation` | `orientation`  | The orientation of the menu.                     | `"horizontal" \| "vertical" \| undefined` | `'vertical'` |
| `size`        | `size`         | The size of the menu.                            | `"lg" \| "md" \| "sm" \| undefined`       | `'md'`       |

## Slots

The `modus-wc-menu` component uses its default slot to render `modus-wc-menu-item` components or custom list items (`<li>`).

## Usage Examples

Here are some examples based on the `modus-wc-menu.stories.ts` file:

**Default Vertical Menu:**

This example shows a basic vertical menu with several `modus-wc-menu-item` children.

```html
<modus-wc-menu aria-label="Main navigation">
  <modus-wc-menu-item label="Profile" value="profile"> </modus-wc-menu-item>
  <modus-wc-menu-item label="Settings" value="settings" selected="true">
  </modus-wc-menu-item>
  <modus-wc-menu-item label="Logout" value="logout" disabled="true">
  </modus-wc-menu-item>
</modus-wc-menu>
```

**Horizontal Menu:**

Set `orientation="horizontal"` to arrange menu items in a row.

```html
<modus-wc-menu aria-label="Toolbar menu" orientation="horizontal">
  <modus-wc-menu-item label="File" value="file"></modus-wc-menu-item>
  <modus-wc-menu-item label="Edit" value="edit"></modus-wc-menu-item>
  <modus-wc-menu-item label="View" value="view"></modus-wc-menu-item>
</modus-wc-menu>
```

**Menu Sizes:**

Control the general size of the menu (which can influence padding or spacing of items) using the `size` property (`xs`, `sm`, `md`, `lg`). Individual `modus-wc-menu-item` components also have their own `size` prop that might interact with or override aspects of the parent menu's size.

```html
<modus-wc-menu aria-label="Small menu" size="sm">
  <modus-wc-menu-item label="Option 1" value="1"></modus-wc-menu-item>
  <modus-wc-menu-item label="Option 2" value="2"></modus-wc-menu-item>
</modus-wc-menu>

<modus-wc-menu aria-label="Large menu" size="lg">
  <modus-wc-menu-item label="Action A" value="A"></modus-wc-menu-item>
  <modus-wc-menu-item label="Action B" value="B"></modus-wc-menu-item>
</modus-wc-menu>
```

**Bordered Menu:**

Add a border around the menu by setting the `bordered` property to `true`.

```html
<modus-wc-menu aria-label="Bordered navigation" bordered="true">
  <modus-wc-menu-item label="Dashboard" value="dash"></modus-wc-menu-item>
  <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
</modus-wc-menu>
```

**Menu with Custom List Items:**

You can also use standard `<li>` elements within the `modus-wc-menu` for more complex or custom content that doesn't fit the `modus-wc-menu-item` structure.

```html
<style>
  .custom-menu-container {
    width: 300px; /* Example width */
  }
  .custom-menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .custom-menu-item:hover {
    background-color: #f0f0f0;
  }
  .status-indicator {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .green {
    background-color: green;
  }
  .red {
    background-color: red;
  }
</style>

<modus-wc-menu
  aria-label="Custom content menu"
  custom-class="custom-menu-container"
>
  <li
    role="menuitem"
    tabindex="0"
    class="custom-menu-item"
    onclick="alert('Parent clicked')"
  >
    <modus-wc-icon decorative="true" name="expand_more"></modus-wc-icon>
    <span>Parent Item</span>
    <modus-wc-button
      aria-label="Actions for Parent"
      size="sm"
      shape="circle"
      variant="borderless"
      onclick="event.stopPropagation(); alert('More actions for Parent');"
    >
      <modus-wc-icon
        aria-label="Actions icon"
        name="more_vertical"
      ></modus-wc-icon>
    </modus-wc-button>
  </li>
  <li
    role="menuitem"
    tabindex="0"
    class="custom-menu-item"
    style="padding-left: 2.5rem;"
    onclick="alert('Child Green clicked')"
  >
    <span class="status-indicator green"></span>
    <span>Child Item (Green)</span>
    <modus-wc-button
      aria-label="Actions for Child Green"
      size="sm"
      shape="circle"
      variant="borderless"
      onclick="event.stopPropagation(); alert('More actions for Child Green');"
    >
      <modus-wc-icon
        aria-label="Actions icon"
        name="more_vertical"
      ></modus-wc-icon>
    </modus-wc-button>
  </li>
  <li
    role="menuitem"
    tabindex="0"
    class="custom-menu-item"
    style="padding-left: 2.5rem;"
    onclick="alert('Child Red clicked')"
  >
    <span class="status-indicator red"></span>
    <span>Child Item (Red)</span>
    <modus-wc-button
      aria-label="Actions for Child Red"
      size="sm"
      shape="circle"
      variant="borderless"
      onclick="event.stopPropagation(); alert('More actions for Child Red');"
    >
      <modus-wc-icon
        aria-label="Actions icon"
        name="more_vertical"
      ></modus-wc-icon>
    </modus-wc-button>
  </li>
</modus-wc-menu>
```

_When using custom `<li>` elements, you are responsible for implementing accessibility attributes (like `role="menuitem"`, `tabindex`) and interaction behaviors if they are intended to function like standard menu items._

```

```
