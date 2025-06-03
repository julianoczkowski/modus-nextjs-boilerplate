# Modus Web Components: Avatar (`modus-wc-avatar`)

The `modus-wc-avatar` component is used to display an image representing a user or entity, typically in a circular or square shape.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-avatar`:

| Property      | Attribute      | Description                                 | Type                                        | Default                |
| ------------- | -------------- | ------------------------------------------- | ------------------------------------------- | ---------------------- |
| `alt`         | `alt`          | The image alt attribute for accessibility.  | `string`                                    | `undefined` (Required) |
| `customClass` | `custom-class` | Custom CSS class to apply to the inner div. | `string \| undefined`                       | `''`                   |
| `imgSrc`      | `img-src`      | The location of the image.                  | `string`                                    | `''`                   |
| `shape`       | `shape`        | The shape of the avatar.                    | `"circle" \| "square" \| undefined`         | `'circle'`             |
| `size`        | `size`         | The size of the avatar.                     | `"lg" \| "md" \| "sm" \| "xs" \| undefined` | `'md'`                 |

## Usage Examples

Here are some examples based on the `modus-wc-avatar.stories.ts` file:

**Default Avatar:**

This is the basic usage of the avatar. The `alt` and `img-src` attributes are fundamental.

```html
<modus-wc-avatar
  alt="Example avatar"
  img-src="[https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg](https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg)"
>
</modus-wc-avatar>
```

**Customizing Shape and Size:**

You can change the shape to `square` and adjust the size using the `size` property (`xs`, `sm`, `md`, `lg`).

- **Square Avatar, Small Size:**

  ```html
  <modus-wc-avatar
    alt="Square avatar"
    img-src="[https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg](https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg)"
    shape="square"
    size="sm"
  >
  </modus-wc-avatar>
  ```

- **Circle Avatar (default), Large Size:**
  ```html
  <modus-wc-avatar
    alt="Large circle avatar"
    img-src="[https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg](https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg)"
    shape="circle"
    size="lg"
  >
  </modus-wc-avatar>
  ```

**Applying a Custom Class:**

You can use the `custom-class` property to add your own CSS classes for further styling.

```html
<style>
  .special-avatar-border {
    border: 3px solid blue;
  }
</style>

<modus-wc-avatar
  alt="Avatar with custom border"
  img-src="[https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg](https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg)"
  custom-class="special-avatar-border"
>
</modus-wc-avatar>
```

## Notes

- The `alt` property is crucial for accessibility and should always be provided.
- Placeholder support (for when `img-src` is missing or broken) was noted as a "TODO" in the source, so its behavior might change or be enhanced in future versions.

```

Would you like me to proceed with the next component?
```
