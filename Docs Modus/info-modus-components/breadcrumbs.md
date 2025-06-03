# Modus Web Components: Breadcrumbs (`modus-wc-breadcrumbs`)

The `modus-wc-breadcrumbs` component is used to display a navigational trail, helping users understand their location within a website or application hierarchy.

## Properties

Based on the `readme.md` file, here are the properties for `modus-wc-breadcrumbs`:

| Property      | Attribute      | Description                                 | Type                                | Default |
| ------------- | -------------- | ------------------------------------------- | ----------------------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined`               | `''`    |
| `items`       | `items`        | The breadcrumbs to render.                  | `IBreadcrumb[]`                     | `[]`    |
| `size`        | `size`         | The size of the breadcrumbs.                | `"lg" \| "md" \| "sm" \| undefined` | `'md'`  |

### `IBreadcrumb` Interface

Each item in the `items` array should follow this interface:

- `label` (string): The text to render in the breadcrumb.
- `url` (string, optional): The URL that the breadcrumb link will navigate to. If not provided, the breadcrumb will be rendered as text and clicking it will not cause navigation (though the `breadcrumbClick` event will still fire).

## Events

| Event             | Description                                 | Type                       |
| ----------------- | ------------------------------------------- | -------------------------- |
| `breadcrumbClick` | Event emitted when a breadcrumb is clicked. | `CustomEvent<IBreadcrumb>` |

## Usage Examples

Here are some examples based on the `modus-wc-breadcrumbs.stories.ts` file:

**Default Breadcrumbs:**

This example shows basic usage of the breadcrumbs component. The `items` prop takes an array of `IBreadcrumb` objects.

```html
<modus-wc-breadcrumbs
  aria-label="Website navigation"
  .items=${[
    { label: 'Home', url: '#/home' },
    { label: 'Products', url: '#/products' },
    { label: 'Laptops', url: '#/products/laptops' },
    { label: 'Current Page Model X', url: '#/products/laptops/model-x' }
  ]}>
</modus-wc-breadcrumbs>

<script>
  // Example of setting items programmatically if not using a framework
  // that supports property binding.
  document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbsElement = document.querySelector('modus-wc-breadcrumbs');
    if (breadcrumbsElement) {
      breadcrumbsElement.items = [
        { label: 'Home', url: '#/home' },
        { label: 'Products', url: '#/products' },
        { label: 'Laptops', url: '#/products/laptops' },
        { label: 'Current Page Model X', url: '#/products/laptops/model-x' }
      ];
    }
  });
</script>
```

_The last item in the `items` array is typically treated as the current page and is often rendered as text rather than a link, though its `url` property can still be set._

**Customizing Size:**

You can change the size of the breadcrumbs using the `size` property (`xs`, `sm`, `md`, `lg`).

```html
<modus-wc-breadcrumbs
  size="lg"
  .items=${[
    { label: 'Root', url: '#' },
    { label: 'Subpage', url: '#' },
    { label: 'Current Page' }
  ]}>
</modus-wc-breadcrumbs>
```

**Underlined Links:**

If you want the breadcrumb links to be underlined, you can apply a custom class and style it with CSS, as demonstrated in the stories.

```html
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=${[
    { label: 'Home', url: '#/home' },
    { label: 'Section', url: '#/section' },
    { label: 'Current' }
  ]}>
</modus-wc-breadcrumbs>
```

**Handling Click Events:**

You can listen to the `breadcrumbClick` event to perform actions when a breadcrumb item is clicked. The event detail will contain the `IBreadcrumb` object that was clicked.

```html
<modus-wc-breadcrumbs id="myBreadcrumbs"></modus-wc-breadcrumbs>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbsElement = document.getElementById("myBreadcrumbs");
    breadcrumbsElement.items = [
      { label: "Dashboard", url: "/dashboard" },
      { label: "Settings" }, // No URL, will still fire event
    ];

    breadcrumbsElement.addEventListener("breadcrumbClick", (event) => {
      console.log("Breadcrumb clicked:", event.detail);
      // Example: if (event.detail.url) { window.location.href = event.detail.url; }
    });
  });
</script>
```

## Migration from Version 1.0

The `modus-wc-breadcrumbs.stories.ts` file provides migration details:

- **Item Structure:** The structure of breadcrumb items has changed from the `Crumb` interface to the `IBreadcrumb` interface.
  - v1.0 `Crumb`: `{ display: string; id: string; }`
  - v2.0 `IBreadcrumb`: `{ label: string; url?: string; }`
- **Underlined Links:** The `underline-links` prop from v1.0 is not carried over. Use CSS to style links if underlining is desired.

**Prop Mapping:**

| 1.0 Prop        | 2.0 Prop (`modus-wc-breadcrumbs`) | Notes                                           |
| --------------- | --------------------------------- | ----------------------------------------------- |
| aria-label      | aria-label                        |                                                 |
| crumbs          | `items`                           | Interface changed from `Crumb` to `IBreadcrumb` |
| underline-links |                                   | Not carried over, use CSS instead               |

**Event Mapping:**

| 1.0 Event  | 2.0 Event         | Notes                                         |
| ---------- | ----------------- | --------------------------------------------- |
| crumbClick | `breadcrumbClick` | Payload changed from `Crumb` to `IBreadcrumb` |

```

Would you like to proceed with the next component?
```
