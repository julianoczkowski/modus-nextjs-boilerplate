# Modus Web Components: Collapse (`modus-wc-collapse`)

The `modus-wc-collapse` component is used for showing and hiding sections of content. It's often used within an accordion structure but can also be used standalone.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-collapse`:

| Property      | Attribute      | Description                                                                                                                           | Type                            | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| `bordered`    | `bordered`     | Indicates that the component should have a border.                                                                                    | `boolean \| undefined`          | `false`     |
| `collapseId`  | `collapse-id`  | A unique identifier used to set the id attributes of various elements.                                                                | `string \| undefined`           | `undefined` |
| `customClass` | `custom-class` | Custom CSS class to apply to the outer div.                                                                                           | `string \| undefined`           | `''`        |
| `expanded`    | `expanded`     | Controls whether the collapse is expanded or not.                                                                                     | `boolean \| undefined`          | `false`     |
| `options`     | `options`      | Configuration options for rendering the pre-laid out collapse component. Do not set this prop if you intend to use the 'header' slot. | `ICollapseOptions \| undefined` | `undefined` |

### `ICollapseOptions` Interface

The `options` prop accepts an object with the following structure:

- `description` (string, optional): The description to render in the collapse header.
- `icon` (string, optional): The Modus icon name to render in the collapse header.
- `iconAriaLabel` (string, optional): The icon's aria-label.
- `size` (DaisySize, optional): The size of the collapse header (`'xs'`, `'sm'`, `'md'`, `'lg'`).
- `title` (string): The title to render in the collapse header.

## Events

| Event            | Description                                                   | Type                                  |
| ---------------- | ------------------------------------------------------------- | ------------------------------------- |
| `expandedChange` | Event emitted when the `expanded` prop is internally changed. | `CustomEvent<{ expanded: boolean; }>` |

## Slots

The `modus-wc-collapse` component supports two primary slots for custom content:

- **`header`**: Used to inject custom HTML for the clickable header area of the collapse. If this slot is used, the `options` prop should generally not be set, as it provides its own header rendering.
- **`content`**: Used to inject the HTML content that will be shown or hidden.

## Usage Examples

Here are some examples based on the `modus-wc-collapse.stories.ts` file:

**Default Collapse (using `options` prop):**

This example uses the `options` prop to define the header content.

```html
<modus-wc-collapse
  collapse-id="item1"
  .options=${{
    title: 'Collapse Title',
    description: 'Collapse description',
    icon: 'help_outline',
    iconAriaLabel: 'Help'
  }}>
  <div slot="content">
    This is the content that will be shown or hidden.
    It can contain any valid HTML.
  </div>
</modus-wc-collapse>

<script>
  // Example of setting options programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const collapseElement = document.querySelector('modus-wc-collapse');
    if (collapseElement) {
      collapseElement.options = {
        title: 'Collapse Title from Script',
        description: 'This description was set via JavaScript.',
        icon: 'alert',
        iconAriaLabel: 'Alert Icon'
      };
    }
  });
</script>
```

**Expanded by Default:**

Set the `expanded` property to `true` to have the collapse item initially open.

```html
<modus-wc-collapse
  collapse-id="item2"
  expanded
  .options=${{ title: 'Initially Expanded' }}>
  <div slot="content">This content is visible by default.</div>
</modus-wc-collapse>
```

**Bordered Collapse:**

Add a border around the collapse component using the `bordered` property.

```html
<modus-wc-collapse
  collapse-id="item3"
  bordered
  .options=${{ title: 'Bordered Collapse Item' }}>
  <div slot="content">This collapse item has a border.</div>
</modus-wc-collapse>
```

**Using Custom Header Slot:**

Instead of the `options` prop, you can provide your own HTML for the header using the `header` slot. This allows for more complex header layouts, including interactive elements.

```html
<style>
  .custom-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem; /* Mimic default padding if needed */
  }
</style>
<modus-wc-collapse collapse-id="customHeaderItem">
  <div slot="header" class="custom-header-content">
    <span>My Custom Header Title</span>
    <modus-wc-button size="sm" @buttonClick=${(e) => { e.stopPropagation(); alert('Button in header clicked!'); }}>
      Header Action
    </modus-wc-button>
  </div>
  <div slot="content">Content for the item with a custom header.</div>
</modus-wc-collapse>
```

_Note: When placing interactive elements like buttons inside the `header` slot, you might need to use `event.stopPropagation()` on their click handlers if you don't want the click to also toggle the collapse state._

**Listening to Expansion Changes:**

You can listen to the `expandedChange` event to react when the collapse item is opened or closed.

```html
<modus-wc-collapse id="interactiveCollapse" .options=${{ title: 'Interactive Collapse' }}>
  <div slot="content">Toggle me!</div>
</modus-wc-collapse>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const collapseElement = document.getElementById('interactiveCollapse');
    collapseElement.addEventListener('expandedChange', (event) => {
      console.log('Collapse expanded state:', event.detail.expanded);
      // Update component state or perform actions
    });
  });
</script>
```

This component is often used inside `modus-wc-accordion` to group multiple collapsible sections.
