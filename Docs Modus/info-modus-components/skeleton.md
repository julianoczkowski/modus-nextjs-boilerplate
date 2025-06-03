# Modus Web Components: Skeleton (`modus-wc-skeleton`)

The `modus-wc-skeleton` component is used to display a placeholder preview of content before it has loaded. This provides a better user experience by indicating where content will appear and reducing layout shift. It can be customized in shape, width, and height.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-skeleton`:

| Property      | Attribute      | Description                                 | Type                                   | Default                            |
| ------------- | -------------- | ------------------------------------------- | -------------------------------------- | ---------------------------------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined`                  | `''`                               |
| `height`      | `height`       | The height of the skeleton.                 | `string`                               | `'var(--modus-wc-line-height-md)'` |
| `shape`       | `shape`        | The shape of the skeleton.                  | `"circle" \| "rectangle" \| undefined` | `'rectangle'`                      |
| `width`       | `width`        | The width of the skeleton.                  | `string`                               | `'100%'`                           |

## Usage Examples

Here are some examples based on the `modus-wc-skeleton.stories.ts` file:

**Default Skeleton (Rectangle):**

This is the basic usage, which defaults to a rectangular shape with a height based on line height and 100% width of its container.

```html
<modus-wc-skeleton aria-label="Loading content"></modus-wc-skeleton>
```

**Custom Dimensions:**

You can specify custom `width` and `height` for the skeleton placeholder.

```html
<modus-wc-skeleton
  height="50px"
  width="200px"
  aria-label="Loading content section"
>
</modus-wc-skeleton>
```

**Circle Shape:**

Set `shape="circle"` to create a circular skeleton placeholder. For a perfect circle, ensure `height` and `width` are equal.

```html
<modus-wc-skeleton
  shape="circle"
  height="5rem"
  width="5rem"
  aria-label="Loading profile picture"
>
</modus-wc-skeleton>
```

**Square Shape:**

To create a square, ensure `height` and `width` are equal, while keeping the default `shape="rectangle"` (or explicitly setting it).

```html
<modus-wc-skeleton
  height="5rem"
  width="5rem"
  shape="rectangle"
  aria-label="Loading image thumbnail"
>
</modus-wc-skeleton>
```

**Composed Skeleton Layout:**

Skeletons are often used together to mimic the layout of the content that will eventually load.

```html
<style>
  .skeleton-container-example {
    width: 13rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .skeleton-profile-example {
    display: flex;
    align-items: center; /* Align items vertically */
    gap: 1rem;
  }
  .skeleton-text-lines {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Smaller gap for text lines */
    flex-grow: 1; /* Allow text lines to take available space */
  }
</style>

<div
  class="skeleton-container-example"
  aria-label="Loading user profile and content"
>
  <div class="skeleton-profile-example">
    <modus-wc-skeleton
      height="4rem"
      shape="circle"
      width="4rem"
      aria-label="Loading avatar"
    >
    </modus-wc-skeleton>
    <div class="skeleton-text-lines">
      <modus-wc-skeleton
        width="80%"
        height="1rem"
        aria-label="Loading name"
      ></modus-wc-skeleton>
      <modus-wc-skeleton
        width="60%"
        height="0.75rem"
        aria-label="Loading subtitle"
      ></modus-wc-skeleton>
    </div>
  </div>
  <modus-wc-skeleton
    height="8rem"
    aria-label="Loading main content block"
  ></modus-wc-skeleton>
</div>
```

**Accessibility:**

- The component sets `aria-hidden="true"` by default as skeletons are typically presentational placeholders.
- If the skeleton itself needs to convey a loading status to assistive technologies (though usually the loading state is managed by the parent context), you could adjust ARIA attributes accordingly, but the default is to hide it.
- It's good practice to provide an `aria-label` on the container of the skeleton components to describe what section is loading, as shown in the "Composed" example.

```

```
