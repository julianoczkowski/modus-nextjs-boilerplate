# Modus Web Components: Toolbar (`modus-wc-toolbar`)

The `modus-wc-toolbar` component is a layout container used to organize content horizontally, typically at the top of a page or section. It provides distinct areas for placing content: start, center, and end.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-toolbar`:

| Property      | Attribute      | Description                                 | Type                  | Default |
| ------------- | -------------- | ------------------------------------------- | --------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the outer div. | `string \| undefined` | `''`    |

## Slots

The `modus-wc-toolbar` component uses three named slots to organize its content:

- **`start`**: Content placed in this slot will be aligned to the beginning (left side in LTR languages) of the toolbar.
- **`center`**: Content placed in this slot will be positioned in the middle section of the toolbar.
- **`end`**: Content placed in this slot will be aligned to the end (right side in LTR languages) of the toolbar.

## Usage Examples

Here's an example based on the `modus-wc-toolbar.stories.ts` file:

**Default Toolbar Layout:**

This example demonstrates how to place different elements into the `start`, `center`, and `end` slots of the toolbar.

```html
<style>
  /* Basic styling for slotted content visibility in the example */
  .toolbar-section {
    padding: 0.5rem;
    border: 1px dashed #ccc;
  }
</style>

<modus-wc-toolbar aria-label="Main application toolbar">
  <div slot="start" class="toolbar-section">
    <img src="path/to/logo.png" alt="App Logo" style="height: 32px;" />
    <modus-wc-button icon-only="menu" aria-label="Main Menu"></modus-wc-button>
  </div>
  <div slot="center" class="toolbar-section">
    <h1 style="font-size: 1.25rem; margin: 0;">Application Title</h1>
  </div>
  <div slot="end" class="toolbar-section">
    <modus-wc-button variant="primary">New Item</modus-wc-button>
    <modus-wc-button
      icon-only="notifications"
      aria-label="Notifications"
    ></modus-wc-button>
    <modus-wc-avatar
      alt="User Avatar"
      img-src="path/to/avatar.jpg"
      size="sm"
    ></modus-wc-avatar>
  </div>
</modus-wc-toolbar>
```

````

**Toolbar with Custom Class:**

You can apply a custom CSS class to the toolbar's outer div for additional styling.

```html
<style>
  .my-custom-toolbar-theme {
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem; /* Example custom padding */
  }
  .my-custom-toolbar-theme .toolbar-section {
    border-color: #555; /* Adjust border for visibility on dark background */
  }
  .my-custom-toolbar-theme h1 {
    color: white; /* Ensure text is visible */
  }
</style>

<modus-wc-toolbar
  aria-label="Custom themed toolbar"
  custom-class="my-custom-toolbar-theme"
>
  <div slot="start" class="toolbar-section">Start Content</div>
  <div slot="center" class="toolbar-section"><h1>Centered Title</h1></div>
  <div slot="end" class="toolbar-section">End Actions</div>
</modus-wc-toolbar>
```

**Integration with `modus-wc-navbar`:**
The `modus-wc-toolbar` is a foundational layout component that is internally used by `modus-wc-navbar` to structure its more complex navigation elements. When building a custom toolbar with specific layout needs not fully covered by `modus-wc-navbar`, `modus-wc-toolbar` can be used directly.

```

```
````
