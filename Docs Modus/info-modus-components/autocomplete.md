# Modus Web Components: Autocomplete (`modus-wc-autocomplete`)

The `modus-wc-autocomplete` component is a customizable input field that provides users with a list of suggestions as they type. It can be configured for single or multiple selections and offers various options for behavior and appearance.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-autocomplete`:

| Property        | Attribute         | Description                                                                                             | Type                                  | Default                                                                                                                  |
| --------------- | ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `bordered`      | `bordered`        | Indicates that the autocomplete should have a border.                                                   | `boolean \| undefined`                | `true`                                                                                                                   |
| `customClass`   | `custom-class`    | Custom CSS class to apply to host element.                                                              | `string \| undefined`                 | `''`                                                                                                                     |
| `debounceMs`    | `debounce-ms`     | The debounce timeout in milliseconds. Set to 0 to disable debouncing.                                   | `number \| undefined`                 | `300`                                                                                                                    |
| `disabled`      | `disabled`        | Whether the form control is disabled.                                                                   | `boolean \| undefined`                | `false`                                                                                                                  |
| `inputId`       | `input-id`        | The ID of the input element.                                                                            | `string \| undefined`                 | `undefined`                                                                                                              |
| `inputTabIndex` | `input-tab-index` | Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). | `number \| undefined`                 | `undefined`                                                                                                              |
| `items`         | `items`           | The items to display in the menu. Creating a new array of items will ensure proper component re-render. | `IAutocompleteItem[] \| undefined`    | `[]`                                                                                                                     |
| `label`         | `label`           | The text to display within the label.                                                                   | `string \| undefined`                 | `undefined`                                                                                                              |
| `leaveMenuOpen` | `leave-menu-open` | Whether the menu should remain open after an item is selected.                                          | `boolean \| undefined`                | `false`                                                                                                                  |
| `minChars`      | `min-chars`       | The minimum number of characters required to render the menu.                                           | `number`                              | `0`                                                                                                                      |
| `multiSelect`   | `multi-select`    | Whether the input allows multiple items to be selected.                                                 | `boolean \| undefined`                | `false`                                                                                                                  |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair.                         | `string \| undefined`                 | `undefined`                                                                                                              |
| `noResults`     | `no-results`      | The content to display when no results are found.                                                       | `IAutocompleteNoResults \| undefined` | `{ ariaLabel: 'No results found', label: 'No results found', subLabel: 'Check spelling or try a different keyword',   }` |
| `placeholder`   | `placeholder`     | Text that appears in the form control when it has no value set.                                         | `string \| undefined`                 | `''`                                                                                                                     |
| `readOnly`      | `read-only`       | Whether the value is editable.                                                                          | `boolean \| undefined`                | `false`                                                                                                                  |
| `required`      | `required`        | A value is required for the form to be submittable.                                                     | `boolean \| undefined`                | `false`                                                                                                                  |
| `showSpinner`   | `show-spinner`    | A spinner that appears when set to true                                                                 | `boolean \| undefined`                | `false`                                                                                                                  |
| `size`          | `size`            | The size of the autocomplete (input and menu).                                                          | `"lg" \| "md" \| "sm" \| undefined`   | `'md'`                                                                                                                   |
| `value`         | `value`           | The value of the control.                                                                               | `string`                              | `''`                                                                                                                     |

### `IAutocompleteItem` Interface

This interface defines the structure for each item in the `items` array:

- `label` (string): The display text shown for the autocomplete item.
- `selected` (boolean, optional): Whether the item is currently selected.
- `focused` (boolean, optional): Whether the item is focused (e.g., via keyboard navigation).
- `value` (string): The unique value identifier for the item.
- `visibleInMenu` (boolean): Whether the item should be shown in the dropdown menu.
- `disabled` (boolean, optional): Whether the item is disabled and cannot be selected.

### `IAutocompleteNoResults` Interface

This interface defines the structure for the content displayed when no items match the search:

- `ariaLabel` (string, optional): The aria-label for the no results section.
- `label` (string): The main label to display.
- `subLabel` (string): Additional text to display below the main label.

## Events

| Event         | Description                                                                                         | Type                             |
| ------------- | --------------------------------------------------------------------------------------------------- | -------------------------------- |
| `chipRemove`  | Event emitted when a selected item chip is removed (in multi-select mode).                          | `CustomEvent<IAutocompleteItem>` |
| `inputBlur`   | Event emitted when the input loses focus.                                                           | `CustomEvent<FocusEvent>`        |
| `inputChange` | Event emitted when the input value changes. This event is debounced based on the `debounceMs` prop. | `CustomEvent<Event>`             |
| `inputFocus`  | Event emitted when the input gains focus.                                                           | `CustomEvent<FocusEvent>`        |
| `itemSelect`  | Event emitted when a menu item is selected.                                                         | `CustomEvent<IAutocompleteItem>` |

## Usage Examples

Here are some examples based on `modus-wc-autocomplete.stories.ts`:

**Default Autocomplete (Single Select):**

This example demonstrates a basic single-select autocomplete. The `items` array is dynamically filtered based on user input.

````html
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  label="Select a Fruit"
  placeholder="Type to search..."
  .items=${
    [
      { label: 'Apple', value: 'apple', visibleInMenu: true, focused: false },
      { label: 'Banana', value: 'banana', visibleInMenu: true, focused: false },
      { label: 'Blueberry', value: 'blueberry', visibleInMenu: true, focused: false },
      // ... more items
    ]
  }
  @inputChange=${(e) => {
    // Handle input change: filter items, update 'visibleInMenu' and 'focused'
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    const searchText = (e.detail.target as HTMLInputElement).value.toLowerCase();
    inputElement.items = inputElement.items.map(item => ({
      ...item,
      visibleInMenu: item.label.toLowerCase().includes(searchText),
      focused: false,
      selected: searchText ? item.selected : false, // Clear selection if input is cleared
    }));
    inputElement.value = (e.detail.target as HTMLInputElement).value;
  }}
  @itemSelect=${(e) => {
    // Handle item selection: update selected state and input value
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    const selectedItemValue = e.detail.value;
    inputElement.items = inputElement.items.map(item => ({
      ...item,
      selected: item.value === selectedItemValue,
      focused: false,
    }));
    inputElement.value = e.detail.label;
  }}
  @inputBlur=${(e) => {
    // Handle blur: reset focused state and visibility
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    inputElement.items = inputElement.items.map(item => ({
      ...item,
      focused: false,
      visibleInMenu: true, // Or your default visibility logic
    }));
  }}
  @keydown=${(e) => {
    // Handle keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
    // This requires more complex logic to manage 'focused' state of items
    // See the .stories.ts file for a detailed example.
  }}>
</modus-wc-autocomplete>

*Note: The JavaScript event handlers (`@inputChange`, `@itemSelect`, `@inputBlur`, `@keydown`) are shown as inline examples for clarity. In a real application, you would typically define these as methods in your component or script.*

**Multi-Select Autocomplete:**

Set `multi-select="true"` to allow multiple selections. Selected items are often displayed as chips.

```html
<modus-wc-autocomplete
  aria-label="Fruit autocomplete (multi-select)"
  label="Select Fruits"
  placeholder="Type to search..."
  multi-select
  .items=${
    [
      { label: 'Apple', value: 'apple', visibleInMenu: true, selected: false },
      { label: 'Banana', value: 'banana', visibleInMenu: true, selected: false },
      // ... more items
    ]
  }
  @inputChange=${(e) => {
    // Filter items, update 'visibleInMenu'
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    const searchText = (e.detail.target as HTMLInputElement).value.toLowerCase();
    inputElement.items = inputElement.items.map(item => ({
      ...item,
      visibleInMenu: item.label.toLowerCase().includes(searchText),
      focused: false,
    }));
    inputElement.value = (e.detail.target as HTMLInputElement).value;
  }}
  @itemSelect=${(e) => {
    // Toggle selected state, clear input value
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    const selectedItemValue = e.detail.value;
    inputElement.items = inputElement.items.map(item =>
      item.value === selectedItemValue ? { ...item, selected: !item.selected, focused: false } : item
    );
    inputElement.value = ''; // Clear input after selection in multi-select
  }}
  @chipRemove=${(e) => {
    // Handle chip removal: update selected state
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    const removedItemValue = e.detail.value;
    inputElement.items = inputElement.items.map(item =>
      item.value === removedItemValue ? { ...item, selected: false } : item
    );
  }}
  @inputBlur=${(e) => {
    const inputElement = e.target as HTMLModusWcAutocompleteElement;
    inputElement.items = inputElement.items.map(item => ({
      ...item,
      focused: false,
      visibleInMenu: true,
    }));
  }}
  @keydown=${(e) => {
    // Handle keyboard navigation
    // See the .stories.ts file for a detailed example.
  }}>
</modus-wc-autocomplete>
````

**Autocomplete with Spinner:**

Set `show-spinner="true"` to display a loading indicator, useful when fetching items asynchronously.

````html
<modus-wc-autocomplete
  aria-label="Fruit autocomplete with spinner"
  label="Search Fruits (loading...)"
  show-spinner
  .items=${[]}>
</modus-wc-autocomplete>

*You would dynamically set `show-spinner` to `false` and populate `items` once the data is loaded.*

**Custom Menu Items (Slotted Content):**

You can provide completely custom HTML for the dropdown menu items by using the `menu-items` slot.

```html
<style>
  /* Example custom styling for slotted items */
  .custom-list-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }
  .custom-list-item img {
    height: 28px;
    width: 28px;
    border-radius: 50%;
  }
  .item-info .title {
    font-weight: 600;
  }
  .item-info .description {
    font-size: 0.875rem;
    color: #666;
  }
  li.custom-list-item:hover {
    background-color: #f0f0f0;
  }
  li.custom-list-item.selected {
    background-color: #dcedf9; /* Example selected style */
  }
</style>

<modus-wc-autocomplete
  aria-label="Custom items autocomplete"
  label="Select Project"
  placeholder="Search projects..."
  @inputChange=${(e) => {
    // Logic to filter custom slotted items based on inputElement.value
    const autocomplete = e.target as HTMLModusWcAutocompleteElement;
    const searchText = (e.detail.target as HTMLInputElement).value.toLowerCase();
    const menuItems = autocomplete.querySelectorAll('.custom-list-item');
    let allHidden = true;
    menuItems.forEach(item => {
      const title = item.querySelector('.title')?.textContent?.toLowerCase() || '';
      if (title.includes(searchText)) {
        (item as HTMLElement).style.display = '';
        allHidden = false;
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
    // Update noResults display if needed
    autocomplete.noResults = allHidden ? { ariaLabel: 'No projects found', label: 'No projects found', subLabel: 'Try a different search' } : { ariaLabel: '', label: '', subLabel: ''};
  }}
  @itemSelect=${(e) => {
    // This event won't fire for custom slotted items unless you emit it yourself.
    // Handle selection based on click events on your custom items.
    const autocomplete = e.target as HTMLModusWcAutocompleteElement;
    const clickedItem = (e.detail.target as HTMLElement).closest('.custom-list-item');
    if (clickedItem) {
      autocomplete.value = clickedItem.querySelector('.title')?.textContent || '';
      // Add 'selected' class or manage state
      autocomplete.querySelectorAll('.custom-list-item').forEach(item => item.classList.remove('selected'));
      clickedItem.classList.add('selected');
    }
  }}
  >
  <ul slot="menu-items">
    <li class="custom-list-item" data-value="project1" @click=${(e) => (e.target as HTMLElement).closest('modus-wc-autocomplete')?.dispatchEvent(new CustomEvent('itemSelect', {detail: e.target}))}>
      <img src="[https://cdn-icons-png.flaticon.com/512/5166/5166970.png](https://cdn-icons-png.flaticon.com/512/5166/5166970.png)" alt="Project 1"/>
      <div class="item-info">
        <div class="title">Project Alpha</div>
        <div class="description">Web development project</div>
      </div>
    </li>
    <li class="custom-list-item" data-value="project2" @click=${(e) => (e.target as HTMLElement).closest('modus-wc-autocomplete')?.dispatchEvent(new CustomEvent('itemSelect', {detail: e.target}))}>
      <img src="[https://cdn-icons-png.flaticon.com/512/1087/1087927.png](https://cdn-icons-png.flaticon.com/512/1087/1087927.png)" alt="Project 2"/>
      <div class="item-info">
        <div class="title">Project Beta</div>
        <div class="description">Mobile app development</div>
      </div>
    </li>
    </ul>
</modus-wc-autocomplete>

*When using custom slotted items, you are responsible for handling their filtering, selection state, and emitting the `itemSelect` event if needed for consistency with non-slotted behavior.*

## Migration from Version 1.0

The `modus-wc-autocomplete.stories.ts` file provides a migration guide:

**State Management:** In v1.0, input state was maintained by the component. v2.0 components encourage users to follow a controlled input model.
**Item Filtering:** The v1.0 prop `filter-options` is no longer necessary. In v2.0, you dynamically update the `items` prop by creating a new array of items to ensure the component re-renders correctly.
**Size Values:** Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).

**Prop Mapping:**

| 1.0 Prop                      | 2.0 Prop            | Notes                                                       |
|-------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                    | aria-label          |                                                             |
| clearable                     |                     | Upcoming feature                                            |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | `leaveMenuOpen`     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | `feedback.message`  | Use `feedback.level = 'error'`                              |
| filter-options                |                     | Rebind `items` prop with filtered array                     |
| include-search-icon           |                     | Upcoming feature (currently, search icon is part of `modus-wc-text-input` when `includeSearch` is true, which `modus-wc-autocomplete` uses internally by default) |
| label                         | label               |                                                             |
| loading                       | `showSpinner`       |                                                             |
| multiple                      | `multiSelect`       |                                                             |
| no-results-found-text         | `noResults.label`   |                                                             |
| no-results-found-subtext      | `noResults.subLabel`|                                                             |
| options                       | `items`             | Interface changed from `ModusAutocompleteOption` to `IAutocompleteItem` |
| placeholder                   | placeholder         |                                                             |
| read-only                     | `readOnly`          |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use `noResults` prop (object)             |
| show-options-on-focus         |                     | Not carried over (menu visibility is based on `minChars` and input) |
| size                          | size                | `small` → `sm`, `medium` → `md`, `large` → `lg`             |
| value                         | value               |                                                             |

````
