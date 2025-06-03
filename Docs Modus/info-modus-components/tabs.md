# Modus Web Components: Tabs (`modus-wc-tabs`)

The `modus-wc-tabs` component is used to create groups of tabs, allowing users to switch between different views or sections of content.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-tabs`:

| Property         | Attribute          | Description                                 | Type                                                       | Default      |
| ---------------- | ------------------ | ------------------------------------------- | ---------------------------------------------------------- | ------------ |
| `activeTabIndex` | `active-tab-index` | The current active tab index (0-based).     | `number`                                                   | `0`          |
| `customClass`    | `custom-class`     | Custom CSS class to apply to the inner div. | `string \| undefined`                                      | `''`         |
| `size`           | `size`             | The size of the tabs.                       | `"lg" \| "md" \| "sm" \| undefined`                        | `'md'`       |
| `tabStyle`       | `tab-style`        | Additional styling for the tabs.            | `"bordered" \| "boxed" \| "lifted" \| "none" \| undefined` | `'bordered'` |
| `tabs`           | `tabs`             | The tabs to display. (See `ITab` below)     | `ITab[]`                                                   | `[]`         |

### `ITab` Interface

Each item in the `tabs` array should follow this interface:

- `customClass` (string, optional): Custom CSS class for the inner button of the tab.
- `disabled` (boolean, optional): Whether the tab is disabled.
- `icon` (string, optional): A Modus Icon name to display in the tab.
- `iconPosition` ('left' | 'right', optional): The position of the icon relative to the label.
- `label` (string, optional): The content (text) to display in the tab.

## Events

| Event       | Description                                                        | Type                                                    |
| ----------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| `tabChange` | When a tab is switched to, this event outputs the relevant indices | `CustomEvent<{ previousTab: number; newTab: number; }>` |

## Slots

The `modus-wc-tabs` component supports dynamic slots for tab panel content. For each tab defined in the `tabs` array, you can provide corresponding content by using a slot named `tab-N`, where `N` is the 0-based index of the tab.

- `tab-0`: Content for the first tab.
- `tab-1`: Content for the second tab.
- ... and so on.

## Usage Examples

Here are some examples based on the `modus-wc-tabs.stories.ts` file:

**Default Tabs (Bordered Style):**

This example shows a basic set of tabs. The `tabs` property is an array of `ITab` objects.

```html
<modus-wc-tabs
  aria-label="Example tab group"
  .tabs=${[
    { label: 'Tab 1' },
    { label: 'Tab 2' },
    { label: 'Tab 3', disabled: true },
    { icon: 'home' }
  ]}>
</modus-wc-tabs>

<script>
  // Example of setting tabs programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const tabsElement = document.querySelector('modus-wc-tabs');
    if (tabsElement) {
      tabsElement.tabs = [
        { label: 'Overview' },
        { label: 'Details' },
        { label: 'Settings', icon: 'settings', iconPosition: 'left' }
      ];
    }
  });
</script>
```

````

**Different Tab Styles:**

You can change the visual appearance of the tabs using the `tab-style` property.

- **Boxed Style:**
  ```html
  <modus-wc-tabs tab-style="boxed" .tabs=${[{label: 'Boxed Tab 1'}, {label: 'Boxed Tab 2'}]}></modus-wc-tabs>
  ```
- **Lifted Style:**
  ```html
  <modus-wc-tabs tab-style="lifted" .tabs=${[{label: 'Lifted Tab 1'}, {label: 'Lifted Tab 2'}]}></modus-wc-tabs>
  ```
- **No Style (None):**
  ```html
  <modus-wc-tabs tab-style="none" .tabs=${[{label: 'No Style Tab 1'}, {label: 'No Style Tab 2'}]}></modus-wc-tabs>
  ```

**Tab Sizes:**

Control the size of the tabs using the `size` property (`xs`, `sm`, `md`, `lg`).

```html
<modus-wc-tabs
  size="sm"
  .tabs=${[{label: 'Small Tab'}, {icon: 'info'}]}>
</modus-wc-tabs>

<modus-wc-tabs
  size="lg"
  .tabs=${[{label: 'Large Tab'}, {label: 'Another Large Tab'}]}>
</modus-wc-tabs>
```

**Tabs with Icons:**

Tabs can include icons, with configurable positions.

```html
<modus-wc-tabs
  .tabs=${[
    { icon: 'home', label: 'Home', iconPosition: 'left' },
    { label: 'Profile', icon: 'user', iconPosition: 'right' },
    { icon: 'notifications' } /* Icon only */
  ]}>
</modus-wc-tabs>
```

**Active and Disabled Tabs:**

Set the initially active tab using `active-tab-index`. Disable tabs by setting `disabled: true` in their definition.

```html
<modus-wc-tabs
  active-tab-index="1"
  .tabs=${[
    { label: 'Normal Tab' },
    { label: 'Active Tab' },
    { label: 'Disabled Tab', disabled: true }
  ]}>
</modus-wc-tabs>
```

**Tabs with Panel Content (Slotted):**

Provide content for each tab panel using named slots `tab-0`, `tab-1`, etc.

```html
<modus-wc-tabs
  aria-label="Content tabs"
  .tabs=${[
    { label: 'Definition' },
    { label: 'Input Info' },
    { label: 'Secrets' }
  ]}>
  <div slot="tab-0">
    <p>Modus (noun): a mode of procedure : a way of doing something.</p>
  </div>
  <div slot="tab-1">
    <p>Input (noun): information fed into a data processing system or computer.</p>
  </div>
  <div slot="tab-2">
    <p>Secret (noun): kept from knowledge or view : hidden.</p>
  </div>
</modus-wc-tabs>
```

**Handling Tab Changes:**

Listen to the `tabChange` event to react when the active tab changes. The event detail includes `previousTab` and `newTab` (0-based indices).

```html
<modus-wc-tabs id="interactiveTabs" .tabs=${[{label: 'One'}, {label: 'Two'}]}></modus-wc-tabs>
<p>Active Tab Index: <span id="activeTabIndexDisplay">0</span></p>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const tabsElement = document.getElementById('interactiveTabs');
    const displayElement = document.getElementById('activeTabIndexDisplay');

    tabsElement.addEventListener('tabChange', (event) => {
      console.log('Tab changed:', event.detail);
      displayElement.textContent = event.detail.newTab;
      // Update your component's state if needed, for example, by setting activeTabIndex
      // tabsElement.activeTabIndex = event.detail.newTab; // If you want to control it
    });
  });
</script>
```
````
