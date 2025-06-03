# Modus Web Components: Accordion (`modus-wc-accordion`)

The `modus-wc-accordion` component is used for showing and hiding related groups of content. It acts as a container for `modus-wc-collapse` components.

## Overview

The accordion itself has minimal properties, as most of the behavior and content is defined by the `modus-wc-collapse` components placed within its slot. The primary role of the `modus-wc-accordion` is to group these collapse items and manage their collective behavior, such as ensuring only one item is open at a time (though this specific behavior might depend on how `modus-wc-collapse` items are configured or how the accordion handles them by default).

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-accordion`:

| Property      | Attribute      | Description                                 | Type                  | Default |
| ------------- | -------------- | ------------------------------------------- | --------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined` | `''`    |

## Events

| Event            | Description                                                                                | Type                                                 |
| ---------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `expandedChange` | When a collapse expanded state is changed, this event outputs the relevant index and state | `CustomEvent<{ expanded: boolean; index: number; }>` |

## Usage Examples

Here is an example based on the `modus-wc-accordion.stories.ts` file:

### Default Accordion

This example shows how to create an accordion with multiple `modus-wc-collapse` items. Each `modus-wc-collapse` component defines its own header and content.

```html
<style>
  /* Optional: Add padding or other styles to the container */
  .accordion-container {
    padding: 20px;
  }
</style>
<div class="accordion-container">
  <modus-wc-accordion>
    <modus-wc-collapse
      collapse-id="item1"
      .options=${{ title: 'Item One', description: 'Item one description', icon: 'alert', iconAriaLabel: 'Alert' }}>
      <div slot="content">Content for item one. This can be any HTML.</div>
    </modus-wc-collapse>
    <modus-wc-collapse
      collapse-id="item2"
      .options=${{ title: 'Item Two', description: 'Item two description', icon: 'help', iconAriaLabel: 'Help' }}>
      <div slot="content">Content for item two. More details here.</div>
    </modus-wc-collapse>
    <modus-wc-collapse
      collapse-id="item3"
      .options=${{ title: 'Item Three' }}>
      <div slot="content">Content for item three. This item has no description or icon by default.</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>

<script>
// The .options prop for modus-wc-collapse would typically be set via a JavaScript framework.
// For plain HTML, you would set individual attributes on modus-wc-collapse instead,
// or use a script to set the options property.
// Example of setting options programmatically if not using a framework:
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('modus-wc-accordion');
  accordions.forEach(accordion => {
    const collapses = accordion.querySelectorAll('modus-wc-collapse');
    const collapseOptions = [
      {
        description: 'Item one description',
        icon: 'alert',
        iconAriaLabel: 'Alert',
        title: 'Item One',
      },
      {
        description: 'Item two description',
        icon: 'alert',
        iconAriaLabel: 'Alert',
        title: 'Item Two',
      },
      {
        description: 'Item three description',
        icon: 'alert',
        iconAriaLabel: 'Alert',
        title: 'Item Three',
      },
    ];
    collapses.forEach((collapse, index) => {
      if (collapseOptions[index]) {
        collapse.options = collapseOptions[index];
      }
    });
  });
});
</script>
```

> **Note:** The `.options` property on `modus-wc-collapse` is an object (`ICollapseOptions`) that can define:
>
> - `title`: The title of the collapse item. (string)
> - `description`: A description shown below the title. (string, optional)
> - `icon`: A Modus icon name to display. (string, optional)
> - `iconAriaLabel`: Aria label for the icon. (string, optional)
> - `size`: The size of the collapse header (`'xs'`, `'sm'`, `'md'`, `'lg'`). (DaisySize, optional)
>
> Alternatively, if not using the `options` prop, you can slot custom HTML content into the `header` slot of each `modus-wc-collapse` component.

## Migration from Version 1.0

The `modus-wc-accordion.stories.ts` file provides insights for migrating:

- **Structure:** In v1.0, the accordion was composed of child `modus-accordion-item` components. In v2.0, `modus-wc-accordion` uses child `modus-wc-collapse` components.
- **Slots:** The new `modus-wc-collapse` (which replaces `modus-accordion-item`) supports `header` and `content` slots for maximum flexibility.
- **Sizing:** Size values for the items have changed from `condensed`, `standard` (in v1.0 `modus-accordion-item`) to DaisyUI-based abbreviations (`xs`, `sm`, `md`, `lg`) in the `options.size` property of the v2.0 `modus-wc-collapse` component.

### Prop Mapping (Accordion)

| 1.0 Prop     | 2.0 Prop (`modus-wc-accordion`) | Notes |
| ------------ | ------------------------------- | ----- |
| `aria-label` | `aria-label`                    |       |

### Prop Mapping (Accordion Item to Collapse Item)

| 1.0 `modus-accordion-item` Prop | 2.0 `modus-wc-collapse` Prop / Option | Notes            |
| ------------------------------- | ------------------------------------- | ---------------- |
| `aria-label`                    | `aria-label`                          |                  |
| `disabled`                      |                                       | Not carried over |
| `expand-button-type`            |                                       | Not carried over |
| `expanded`                      | `expanded` (prop)                     |                  |
| `header-text`                   | `options.title`                       |                  |
| `icon`                          | `options.icon`                        |                  |
| `supporting-label`              | `options.description`                 |                  |
| `size`                          | `options.size`                        |                  |

### Event Mapping (Accordion Item to Accordion)

The new accordion and collapse components have their own distinct events. It's recommended to use the `modus-wc-accordion`'s `expandedChange` event for similar functionality.

| 1.0 `modus-accordion-item` Event | 2.0 `modus-wc-accordion` Event | Notes |
| -------------------------------- | ------------------------------ | ----- |
| `closed`                         | `expandedChange`               |       |
| `opened`                         | `expandedChange`               |       |
