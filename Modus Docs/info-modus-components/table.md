# Modus Web Components: Table (`modus-wc-table`)

The `modus-wc-table` component is a powerful and customizable table used for displaying tabular data. It supports features like sorting, pagination, row selection, and inline editing.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-table`:

| Property               | Attribute                 | Description                                                                                      | Type                                                                  | Default         |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --------------- |
| `columns`              | `columns`                 | An array of column definitions. (Required) (See `ITableColumn` details below)                    | `ITableColumn[]`                                                      | `undefined`     |
| `currentPage`          | `current-page`            | The current page number in pagination (1-based index).                                           | `number`                                                              | `1`             |
| `customClass`          | `custom-class`            | Custom CSS class to apply to the inner div.                                                      | `string \| undefined`                                                 | `''`            |
| `data`                 | `data`                    | An array of data objects. (Required)                                                             | `Record<string, unknown>[]`                                           | `undefined`     |
| `density`              | `density`                 | The density of the table, used to save space or increase readability.                            | `"comfortable" \| "compact" \| "relaxed" \| undefined`                | `'comfortable'` |
| `editable`             | `editable`                | Enable cell editing. Either a boolean (all rows) or a predicate function per row.                | `((row: Record<string, unknown>) => boolean) \| boolean \| undefined` | `false`         |
| `hover`                | `hover`                   | Enable hover effect on table rows.                                                               | `boolean \| undefined`                                                | `true`          |
| `pageSizeOptions`      | `page-size-options`       | Available options for the number of rows per page.                                               | `number[]`                                                            | `[5, 10, 15]`   |
| `paginated`            | `paginated`               | Enable pagination for the table.                                                                 | `boolean \| undefined`                                                | `false`         |
| `selectable`           | `selectable`              | Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows. | `"multi" \| "none" \| "single" \| undefined`                          | `'none'`        |
| `selectedRowIds`       | `selected-row-ids`        | Array of selected row IDs. Used for controlled selection state.                                  | `string[] \| undefined`                                               | `undefined`     |
| `showPageSizeSelector` | `show-page-size-selector` | Show/hide the page size selector in pagination.                                                  | `boolean \| undefined`                                                | `true`          |
| `sortable`             | `sortable`                | Enable sorting functionality for sortable columns.                                               | `boolean \| undefined`                                                | `true`          |
| `zebra`                | `zebra`                   | Zebra striped tables differentiate rows by styling them in an alternating fashion.               | `boolean \| undefined`                                                | `false`         |

### `ITableColumn` Interface

Each object in the `columns` array should follow this structure:

- `accessor` (string): Key to access data from the row object.
- `cellRenderer` (function, optional): `(value: unknown, row: unknown) => string | HTMLElement` - A custom function to render the cell content.
- `className` (string, optional): Class names to apply to the column's cells and header.
- `customEditorRenderer` (function, optional): `(value: unknown, onCommit: (val: unknown) => void, row: Record<string, unknown>) => HTMLElement | string` - Custom renderer invoked when `editor === 'custom'`. Must call `onCommit` with the new value.
- `editor` (string, optional): Built-in editor type to render when the cell is in edit mode (`'text'`, `'number'`, `'autocomplete'`, `'date'`, `'custom'`).
- `editorProps` (object, optional): Extra props specific to the editor component being used (e.g., for `modus-wc-autocomplete`).
- `editorSetup` (function, optional): `(el: HTMLElement, row: Record<string, unknown>, commit: (newVal: unknown) => void) => void` - Runs once after an editor element (from `editorTemplate`) is added to the DOM. Gives full control for wiring events, etc.
- `editorTemplate` (string, optional): Raw HTML string for the editor. `${value}` placeholder will be replaced with the current cell value.
- `header` (string | HTMLElement): Header content for the column.
- `id` (string): Unique identifier for the column.
- `sortable` (boolean, optional): Whether the column can be sorted.
- `width` (string, optional): Width style for the column (e.g., `'200px'`, `'50%'`).

### `IPaginationChangeEventDetail` Interface (for `paginationChange` event)

- `currentPage` (number): The current page number (1-based).
- `pageSize` (number): The number of items per page.

## Events

| Event                | Description                                                            | Type                                                                                                        |
| -------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `cellEditCommit`     | Emits when cell editing is committed with the new value.               | `CustomEvent<{ rowIndex: number; colId: string; newValue: unknown; updatedRow: Record<string, unknown>; }>` |
| `cellEditStart`      | Emits when cell editing starts.                                        | `CustomEvent<{ rowIndex: number; colId: string; }>`                                                         |
| `paginationChange`   | Emits when pagination changes with the new pagination state.           | `CustomEvent<IPaginationChangeEventDetail>`                                                                 |
| `rowClick`           | Emits when a row is clicked.                                           | `CustomEvent<{ row: Record<string, unknown>; index: number; }>`                                             |
| `rowSelectionChange` | Emits when row selection changes with the selected rows and their IDs. | `CustomEvent<{ selectedRows: Record<string, unknown>[]; selectedRowIds: string[]; }>`                       |
| `sortChange`         | Emits when sorting changes with the new sorting state.                 | `CustomEvent<ColumnSort[]>` (where `ColumnSort` is `{ id: string; desc: boolean }`)                         |

## Usage Examples

Here are some examples based on the `modus-wc-table.stories.ts` file:

**Basic Table:**

```html
<modus-wc-table
  aria-label="Basic employee table"
  .columns=${[
    { id: 'id', header: 'ID', accessor: 'id', width: '60px' },
    { id: 'name', header: 'Name', accessor: 'name', width: '150px' },
    { id: 'email', header: 'Email', accessor: 'email' },
    { id: 'role', header: 'Role', accessor: 'role' }
  ]}
  .data=${[
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: '2', name: 'Bob Williams', email: 'bob@example.com', role: 'User' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor' }
  ]}>
</modus-wc-table>

<script>
  // Example of setting columns and data programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const tableElement = document.querySelector('modus-wc-table');
    if (tableElement) {
      tableElement.columns = [
        { id: 'id', header: 'Employee ID', accessor: 'id', width: '100px' },
        { id: 'firstName', header: 'First Name', accessor: 'firstName' },
        { id: 'lastName', header: 'Last Name', accessor: 'lastName' },
        { id: 'department', header: 'Department', accessor: 'department', sortable: true }
      ];
      tableElement.data = [
        { id: '101', firstName: 'John', lastName: 'Doe', department: 'Engineering' },
        { id: '102', firstName: 'Jane', lastName: 'Smith', department: 'Marketing' },
      ];
    }
  });
</script>
```

````

**Table with Sorting:**

Enable sorting by setting `sortable="true"` on the table and `sortable: true` on individual column definitions.

```html
<modus-wc-table
  aria-label="Sortable user table"
  sortable="true"
  .columns=${[
    { id: 'name', header: 'Name', accessor: 'name', sortable: true },
    { id: 'role', header: 'Role', accessor: 'role', sortable: true },
    { id: 'status', header: 'Status', accessor: 'status' } // Not sortable
  ]}
  .data=${[
    { name: 'Zelda Fitzgerald', role: 'Writer', status: 'Active' },
    { name: 'Scott Joplin', role: 'Composer', status: 'Inactive' },
    { name: 'Ada Lovelace', role: 'Mathematician', status: 'Active' }
  ]}
  @sortChange=${(e) => console.log('Sort changed:', e.detail)}>
</modus-wc-table>
```

**Table with Pagination:**

Enable pagination by setting `paginated="true"`.

```html
<modus-wc-table
  aria-label="Paginated items table"
  paginated="true"
  .columns=${[{ id: 'item', header: 'Item', accessor: 'item' }]}
  .data=${Array.from({ length: 25 }, (_, i) => ({ item: `Item ${i + 1}` }))}
  current-page="1"
  .pageSizeOptions=${[5, 10, 20]}
  show-page-size-selector="true"
  @paginationChange=${(e) => console.log('Pagination changed:', e.detail)}>
</modus-wc-table>
```

**Table with Row Selection:**

Enable row selection using the `selectable` property (`'single'` or `'multi'`).

```html
<modus-wc-table
  aria-label="Selectable products table"
  selectable="multi"
  .columns=${[
    { id: 'productName', header: 'Product', accessor: 'productName' },
    { id: 'price', header: 'Price', accessor: 'price' }
  ]}
  .data=${[
    { id: 'p1', productName: 'Laptop', price: 1200 },
    { id: 'p2', productName: 'Mouse', price: 25 },
    { id: 'p3', productName: 'Keyboard', price: 75 }
  ]}
  @rowSelectionChange=${(e) => console.log('Selection changed:', e.detail.selectedRows)}>
</modus-wc-table>
```

**Table with Inline Editing:**

Enable cell editing with the `editable` prop. Configure individual columns for editing using `editor`, `editorTemplate`, `editorSetup`, or `customEditorRenderer`.

```html
<modus-wc-table
  aria-label="Editable task table"
  editable="true"
  .columns=${[
    { id: 'task', header: 'Task', accessor: 'task', editor: 'text' },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status',
      editor: 'custom',
      customEditorRenderer: (value, onCommit, row) => {
        const select = document.createElement('modus-wc-select');
        select.options = [
          { label: 'To Do', value: 'To Do' },
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Done', value: 'Done' }
        ];
        select.value = value as string;
        select.addEventListener('inputChange', (event) => {
          onCommit((event.target as HTMLModusWcSelectElement).value);
        });
        // Automatically focus the select when editing starts
        setTimeout(() => select.focus(), 0);
        return select;
      }
    }
  ]}
  .data=${[
    { id: 't1', task: 'Design new homepage', status: 'To Do' },
    { id: 't2', task: 'Develop API endpoints', status: 'In Progress' }
  ]}
  @cellEditStart=${(e) => console.log('Cell edit started:', e.detail)}
  @cellEditCommit=${(e) => console.log('Cell edit committed:', e.detail)}>
</modus-wc-table>
```

**Styling and Density:**
Use `density` (`'compact'`, `'comfortable'`, `'relaxed'`), `hover`, and `zebra` props for visual styling.

```html
<modus-wc-table
  aria-label="Styled table"
  density="compact"
  hover="true"
  zebra="true"
  .columns=${[
    { id: 'name', header: 'Name', accessor: 'name' },
    { id: 'email', header: 'Email', accessor: 'email' }
  ]}
  .data=${[
    { name: 'Compact Zebra', email: 'cz@example.com' },
    { name: 'Hover Effect', email: 'he@example.com' }
  ]}>
</modus-wc-table>
```

```

```
````
