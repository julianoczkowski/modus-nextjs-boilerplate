# Modus Web Components: Card (`modus-wc-card`)

The `modus-wc-card` component is a versatile container used to group and display content in a structured and easily readable format. It supports various slots for different types of content and offers layout and styling options.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-card`:

| Property           | Attribute           | Description                                                    | Type                                      | Default      |
| ------------------ | ------------------- | -------------------------------------------------------------- | ----------------------------------------- | ------------ |
| `backgroundFigure` | `background-figure` | Makes any `<figure>` in the 'header' slot cover the background | `boolean \| undefined`                    | `false`      |
| `bordered`         | `bordered`          | Adds a hard border to the card                                 | `boolean \| undefined`                    | `false`      |
| `customClass`      | `custom-class`      | Custom CSS class to apply                                      | `string \| undefined`                     | `''`         |
| `layout`           | `layout`            | Determines how the card is laid out                            | `"horizontal" \| "vertical" \| undefined` | `'vertical'` |
| `padding`          | `padding`           | Determines if the interior padding is compact or not           | `"compact" \| "normal" \| undefined`      | `'normal'`   |

## Slots

The `modus-wc-card` component utilizes several named slots to structure its content:

- **`header`**: For content at the top of the card, often used for images or figures.
- **`title`**: For the main title of the card.
- **`subtitle`**: For a subtitle or secondary text below the title.
- **`(default)`**: For the primary body content of the card.
- **`actions`**: For action buttons or controls, typically at the bottom of the card body.
- **`footer`**: For content at the very bottom of the card, outside the main body padding.

## Usage Examples

Here are some examples based on the `modus-wc-card.stories.ts` file:

**Default Card:**

This example shows a card with a title, subtitle, body text, and an action button.

```html
<style>
  /* Optional: Define a width for the card in your application */
  modus-wc-card {
    width: 400px;
  }
</style>
<modus-wc-card aria-label="Sample card">
  <span slot="title">Card Title</span>
  <span slot="subtitle">Card Subtitle</span>
  <p>This is a sample card content. You can place any content here.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Click me">Click me</modus-wc-button>
  </div>
</modus-wc-card>
```

````

**Simple Card (Body Content Only):**

A card can be used with just basic content in the default slot.

```html
<modus-wc-card aria-label="Simple Card"> Raw card content. </modus-wc-card>
```

**Card with All Slots:**

This example demonstrates how to use all available slots to structure content.

```html
<style>
  .slot-box {
    /* Example styling for slotted content */
    background: #ccccff;
    border: 2px solid rebeccapurple;
    color: rebeccapurple;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
  }
</style>
<modus-wc-card aria-label="Card with all slots">
  <div slot="header" class="slot-box">Header Slot</div>
  <div slot="title" class="slot-box">Title Slot</div>
  <div slot="subtitle" class="slot-box">Subtitle Slot</div>
  <div class="slot-box">Default (Body) Slot</div>
  <div slot="actions" class="slot-box">Actions Slot</div>
  <div slot="footer" class="slot-box">Footer Slot</div>
</modus-wc-card>
```

**Complex Card with Header Image:**

This demonstrates a card with a header image, title, subtitle, body, and multiple actions.

```html
<modus-wc-card aria-label="Complex card with image">
  <figure slot="header">
    <img
      src="[https://picsum.photos/id/643/750/300](https://picsum.photos/id/643/750/300)"
      alt="Sample Header Image"
    />
  </figure>
  <span slot="title">Complex Card</span>
  <span slot="subtitle">With Image</span>
  <p>This card features a header image, content, and multiple buttons.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Action 1">Action 1</modus-wc-button>
    <modus-wc-button aria-label="Action 2">Action 2</modus-wc-button>
  </div>
</modus-wc-card>
```

**Horizontal Layout with Image:**

Set `layout="horizontal"` to arrange the header (e.g., an image) 옆side the body content.

```html
<modus-wc-card aria-label="Horizontal image card" layout="horizontal">
  <figure slot="header">
    <img
      src="[https://picsum.photos/id/1025/200/300](https://picsum.photos/id/1025/200/300)"
      alt="Pug"
    />
  </figure>
  <p>
    This card uses a horizontal layout, placing the image to the side of this
    text.
  </p>
</modus-wc-card>
```

**Background Figure Image:**

Use the `background-figure` property to make an image in the `header` slot act as a background for the card content.

```html
<modus-wc-card aria-label="Full image card" background-figure>
  <figure slot="header">
    <img
      src="[https://picsum.photos/id/1045/600/400](https://picsum.photos/id/1045/600/400)"
      alt="Scenic Background"
    />
  </figure>
  <span slot="title" style="color: white; text-shadow: 1px 1px 2px black;"
    >Image Background Card</span
  >
  <p style="color: white; text-shadow: 1px 1px 2px black;">
    This card has a figure image in the background, and text is overlaid.
  </p>
</modus-wc-card>
```

**Card with Compact Padding:**

Set `padding="compact"` for reduced internal padding.

```html
<modus-wc-card aria-label="Compact padding card" padding="compact">
  <span slot="title">Compact Card</span>
  <p>This card has less internal padding.</p>
</modus-wc-card>
```

**Bordered Card:**

Set `bordered` to `true` to add a visible border around the card.

```html
<modus-wc-card aria-label="Bordered card" bordered>
  <span slot="title">Bordered Card</span>
  <p>This card has a visible border.</p>
</modus-wc-card>
```
````
