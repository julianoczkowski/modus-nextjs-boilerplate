# Modus Web Components: Pagination (`modus-wc-pagination`)

The `modus-wc-pagination` component is used to navigate through pages of content. It provides buttons for first, previous, next, last, and specific page numbers.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-pagination`:

| Property          | Attribute           | Description                                                              | Type                            | Default     |
| ----------------- | ------------------- | ------------------------------------------------------------------------ | ------------------------------- | ----------- |
| `ariaLabelValues` | `aria-label-values` | Aria label values for pagination buttons. (See `IAriaLabelValues` below) | `IAriaLabelValues \| undefined` | `undefined` |
| `count`           | `count`             | Total number of pages.                                                   | `number`                        | `1`         |
| `customClass`     | `custom-class`      | Custom CSS class to apply.                                               | `string \| undefined`           | `''`        |
| `nextButtonText`  | `next-button-text`  | The next page button text. If not set, an icon control will be used.     | `string \| undefined`           | `undefined` |
| `page`            | `page`              | The current page number.                                                 | `number`                        | `1`         |
| `prevButtonText`  | `prev-button-text`  | The previous page button text. If not set, an icon control will be used. | `string \| undefined`           | `undefined` |
| `size`            | `size`              | Size of the pagination buttons.                                          | `"lg" \| "md" \| "sm"`          | `'md'`      |

### `IAriaLabelValues` Interface

This interface allows customization of the `aria-label` attributes for the pagination buttons:

- `firstPage` (string, optional): Aria label for the first page button.
- `lastPage` (string, optional): Aria label for the last page button.
- `nextPage` (string, optional): Aria label for the next page button.
- `page` (string, optional): Aria label for the page number button. Use `{0}` as a placeholder for the page number (e.g., "Page {0}").
- `previousPage` (string, optional): Aria label for the previous page button.

## Events

| Event        | Description                     | Type                       |
| ------------ | ------------------------------- | -------------------------- |
| `pageChange` | Event emitted when page changes | `CustomEvent<IPageChange>` |

### `IPageChange` Interface

The `pageChange` event detail contains an object with the following structure:

- `newPage` (number): The number of the newly selected page.
- `prevPage` (number): The number of the previously selected page.

## Usage Examples

Here are some examples based on the `modus-wc-pagination.stories.ts` file:

**Default Pagination:**

This shows a basic pagination setup. The component calculates which page numbers to display based on the `count` and current `page`.

```html
<modus-wc-pagination aria-label="Content navigation" count="10" page="3">
</modus-wc-pagination>
```

**Customizing Button Text:**

You can replace the default previous/next page icons with text using `prev-button-text` and `next-button-text`.

```html
<modus-wc-pagination
  aria-label="Article navigation"
  count="15"
  page="7"
  prev-button-text="Previous"
  next-button-text="Next"
>
</modus-wc-pagination>
```

**Different Sizes:**

Control the size of the pagination buttons using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-pagination
  aria-label="Small pagination"
  count="20"
  page="10"
  size="sm"
>
</modus-wc-pagination>

<modus-wc-pagination
  aria-label="Large pagination"
  count="20"
  page="10"
  size="lg"
>
</modus-wc-pagination>
```

**Custom Aria Labels:**

Provide custom `aria-label` values for better accessibility, especially for internationalization.

```html
<modus-wc-pagination
  aria-label="Navegación de contenido"
  count="12"
  page="5"
  .ariaLabelValues=${{
    firstPage: 'Primera página',
    lastPage: 'Última página',
    nextPage: 'Página siguiente',
    page: 'Página {0}',
    previousPage: 'Página anterior'
  }}>
</modus-wc-pagination>

<script>
  // Example of setting ariaLabelValues programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const paginationElement = document.querySelector('modus-wc-pagination');
    if (paginationElement) {
      paginationElement.ariaLabelValues = {
        firstPage: 'Go to first page',
        lastPage: 'Go to last page',
        nextPage: 'Go to next page',
        page: 'Jump to page {0}',
        previousPage: 'Go to previous page'
      };
    }
  });
</script>
```

**Handling Page Changes:**

Listen to the `pageChange` event to react when the user navigates to a different page.

```html
<modus-wc-pagination
  id="myPagination"
  count="25"
  page="1"
></modus-wc-pagination>
<p>Current Page: <span id="currentPageDisplay">1</span></p>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const paginationElement = document.getElementById("myPagination");
    const currentPageDisplay = document.getElementById("currentPageDisplay");

    paginationElement.addEventListener("pageChange", (event) => {
      console.log("Page changed:", event.detail);
      // Update your application's current page state
      // For this example, we'll just update the display and the component's page prop
      paginationElement.page = event.detail.newPage;
      currentPageDisplay.textContent = event.detail.newPage;
    });
  });
</script>
```

**Behavior Notes:**

- The component displays a maximum of 5 page number buttons.
- "First" and "Last" page navigation buttons are shown if `count` is greater than 5.
- "Previous" and "Next" (or first/last if at the ends) navigation buttons are disabled when at the beginning or end of the page range, respectively.
- Clicking the currently active page button does not emit a `pageChange` event.
