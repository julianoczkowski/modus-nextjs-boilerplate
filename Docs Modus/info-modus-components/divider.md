# Modus Web Components: Divider (`modus-wc-divider`)

The `modus-wc-divider` component is used to create a visual separation between sections of content, either horizontally or vertically. It can also include text content within the divider itself.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-divider`:

| Property      | Attribute      | Description                                                                                              | Type                                                                                                           | Default      |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------ |
| `color`       | `color`        | The color of the divider line.                                                                           | `"danger" \| "high-contrast" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| undefined` | `'tertiary'` |
| `content`     | `content`      | The content (text) to display in the divider.                                                            | `string \| undefined`                                                                                          | `''`         |
| `customClass` | `custom-class` | Custom CSS class to apply to the divider element.                                                        | `string \| undefined`                                                                                          | `''`         |
| `orientation` | `orientation`  | The orientation of the divider. This is in reference to how content will be rendered around the divider. | `"horizontal" \| "vertical" \| undefined`                                                                      | `'vertical'` |
| `position`    | `position`     | The position of the divider (and its content, if any).                                                   | `"center" \| "end" \| "start" \| undefined`                                                                    | `'center'`   |
| `responsive`  | `responsive`   | Whether the divider is responsive or not.                                                                | `boolean \| undefined`                                                                                         | `true`       |

## Usage Examples

Here are some examples based on the `modus-wc-divider.stories.ts` file:

**Default Vertical Divider:**

This is the basic usage, which defaults to a vertical orientation and tertiary color. For a vertical divider to be visible and behave as expected, it usually needs to be placed within a container that uses flexbox or grid layout.

```html
<div style="display: flex; height: 100px; align-items: center;">
  <span>Left Content</span>
  <modus-wc-divider aria-label="Vertical Divider"></modus-wc-divider>
  <span>Right Content</span>
</div>
```

**Horizontal Divider:**

Set `orientation="horizontal"` to create a horizontal line.

```html
<div>Top Content</div>
<modus-wc-divider aria-label="Horizontal Divider" orientation="horizontal">
</modus-wc-divider>
<div>Bottom Content</div>
```

**Divider with Content:**

You can add text content to the divider using the `content` property. The `position` property controls where this content appears along the divider line.

- **Content Centered (Horizontal):**
  ```html
  <modus-wc-divider orientation="horizontal" content="OR" position="center">
  </modus-wc-divider>
  ```
- **Content Start (Horizontal):**
  ```html
  <modus-wc-divider
    orientation="horizontal"
    content="Start Text"
    position="start"
  >
  </modus-wc-divider>
  ```
- **Content End (Vertical):**
  ```html
  <div style="display: flex; height: 150px;">
    <modus-wc-divider orientation="vertical" content="End Text" position="end">
    </modus-wc-divider>
  </div>
  ```

**Customizing Color:**

Use the `color` property to change the divider line's color.

```html
<modus-wc-divider
  orientation="horizontal"
  content="Primary Color"
  color="primary"
>
</modus-wc-divider>

<modus-wc-divider
  orientation="horizontal"
  content="Warning Color"
  color="warning"
>
</modus-wc-divider>
```

**Responsive Behavior:**

The `responsive` property (defaulting to `true`) affects how the divider behaves in different layouts, particularly when it has content and is used within flex containers. When `responsive="false"`, the divider might not expand to fill available space in the same way.

```html
<div style="display: flex; width: 300px;">
  <span>Item 1</span>
  <modus-wc-divider
    content="Responsive"
    orientation="vertical"
    responsive="true"
  ></modus-wc-divider>
  <span>Item 2</span>
</div>

<div style="display: flex; width: 300px; margin-top: 20px;">
  <span>Item A</span>
  <modus-wc-divider
    content="Not Responsive"
    orientation="vertical"
    responsive="false"
  ></modus-wc-divider>
  <span>Item B</span>
</div>
```

**Styling in Storybook:**
The story examples often include inline styles on the parent container (e.g., `style="display: flex; height: 100px"`) to properly demonstrate the vertical divider's appearance. In a real application, these layout styles would come from your application's CSS.
