# Modus Web Components: Rating (`modus-wc-rating`)

The `modus-wc-rating` component allows users to select a rating from a predefined set of options or symbols. It supports different visual variants like stars, hearts, smileys, and thumbs.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-rating`:

| Property           | Attribute             | Description                                                             | Type                                             | Default                                           |
| ------------------ | --------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- |
| `allowHalf`        | `allow-half`          | Whether to allow half-ratings. Only applies to star and heart variants. | `boolean \| undefined`                           | `false`                                           |
| `count`            | `count`               | The number of rating items to display.                                  | `number`                                         | `5`                                               |
| `customClass`      | `custom-class`        | Custom CSS class to apply.                                              | `string \| undefined`                            | `''`                                              |
| `disabled`         | `disabled`            | Whether the rating component is disabled.                               | `boolean \| undefined`                           | `false`                                           |
| `getAriaLabelText` | `get-aria-label-text` | Function to provide aria-label text for a given rating-item index.      | `((ratingValue: number) => string) \| undefined` | `(ratingValue) => \`Rating item ${ratingValue}\`` |
| `size`             | `size`                | The size of the rating component.                                       | `"lg" \| "md" \| "sm" \| undefined`              | `'md'`                                            |
| `value`            | `value`               | The current value of the rating.                                        | `number`                                         | `0`                                               |
| `variant`          | `variant`             | The variant of the rating scale.                                        | `"heart" \| "smiley" \| "star" \| "thumb"`       | `'smiley'`                                        |

### `IRatingChange` Interface (for `ratingChange` event)

- `newRating` (number): The newly selected rating value.

## Events

| Event          | Description                           | Type                         |
| -------------- | ------------------------------------- | ---------------------------- |
| `ratingChange` | Event emitted when the rating changes | `CustomEvent<IRatingChange>` |

## Usage Examples

Here are some examples based on the `modus-wc-rating.stories.ts` file:

**Default Rating (Smiley Variant):**

This is the basic usage, which defaults to the `smiley` variant with 5 items.

```html
<modus-wc-rating aria-label="Rate your experience"></modus-wc-rating>
```

_In a real application, you would typically bind the `value` property and listen to the `ratingChange` event to manage the selected rating._

**Different Variants:**

Change the visual style of the rating items using the `variant` property.

- **Star Variant:**
  ```html
  <modus-wc-rating variant="star" aria-label="Star rating"></modus-wc-rating>
  ```
- **Heart Variant:**
  ```html
  <modus-wc-rating variant="heart" aria-label="Heart rating"></modus-wc-rating>
  ```
- **Thumb Variant:** (Displays two items: thumb up, thumb down)
  ```html
  <modus-wc-rating
    variant="thumb"
    aria-label="Thumbs up or down rating"
  ></modus-wc-rating>
  ```

**Allow Half Ratings (Star/Heart only):**

Set `allow-half="true"` to enable selection of half-values for `star` and `heart` variants.

```html
<modus-wc-rating
  variant="star"
  allow-half="true"
  value="2.5"
  aria-label="Star rating with half steps"
></modus-wc-rating>
```

**Custom Number of Rating Items (`count`):**

Adjust the number of rating items displayed using the `count` property.
_For the `smiley` variant, `count` is clamped between 2 and 5. `thumb` variant always shows 2 items._

```html
<modus-wc-rating
  variant="star"
  count="10"
  aria-label="10-star rating"
></modus-wc-rating>
<modus-wc-rating
  variant="smiley"
  count="3"
  aria-label="3-smiley rating (dissatisfied, neutral, satisfied)"
></modus-wc-rating>
```

**Different Sizes:**

Control the size of the rating items using the `size` property (`sm`, `md`, `lg`).

```html
<modus-wc-rating
  variant="heart"
  size="sm"
  aria-label="Small heart rating"
></modus-wc-rating>
<modus-wc-rating
  variant="star"
  size="lg"
  aria-label="Large star rating"
></modus-wc-rating>
```

**Disabled Rating:**

Set `disabled="true"` to prevent user interaction. The selected value will still be visually represented but will be unchangeable.

```html
<modus-wc-rating
  variant="smiley"
  value="3"
  disabled="true"
  aria-label="Disabled smiley rating"
></modus-wc-rating>
```

**Custom Aria Labels:**

Provide a function to the `getAriaLabelText` property to customize the `aria-label` for each rating item, which is important for accessibility.

```html
<modus-wc-rating
  aria-label="Custom labeled rating"
  variant="star"
  count="3"
  .getAriaLabelText=${(ratingValue) => `Rate ${ratingValue} out of 3 stars`}>
</modus-wc-rating>

<script>
  // Example of setting getAriaLabelText programmatically
  document.addEventListener('DOMContentLoaded', () => {
    const ratingElement = document.querySelector('modus-wc-rating[aria-label="Custom labeled rating"]');
    if (ratingElement) {
      ratingElement.getAriaLabelText = (ratingValue) => \`Select rating: ${ratingValue}\`;
    }
  });
</script>
```

**Custom Colors:**

You can customize the color of the rating items using CSS custom properties or by targeting the elements with CSS. The primary CSS custom property is `--modus-wc-rating-item-color`.

```html
<style>
  .custom-color-rating .modus-wc-rating-item {
    /* This sets the color for the 'active' part of star/heart, or the fill for smiley/thumb */
    --modus-wc-rating-item-color: darkorange;
  }
  /* For star/heart, the inactive part uses opacity, so the base color is still relevant */
  .custom-color-rating.star-rating-inactive-part-example .modus-wc-rating-item {
    color: darkorange; /* This affects the color before opacity is applied */
  }
</style>

<modus-wc-rating
  variant="star"
  value="3"
  custom-class="custom-color-rating star-rating-inactive-part-example"
  aria-label="Star rating with custom color"
>
</modus-wc-rating>

<modus-wc-rating
  variant="smiley"
  value="4"
  custom-class="custom-color-rating"
  aria-label="Smiley rating with custom color"
>
</modus-wc-rating>
```

**Handling Rating Changes:**

Listen to the `ratingChange` event to get the new rating value when the user interacts with the component.

```html
<modus-wc-rating
  id="interactiveRating"
  variant="star"
  count="5"
></modus-wc-rating>
<p>Selected Rating: <span id="selectedRatingDisplay">0</span></p>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const ratingElement = document.getElementById("interactiveRating");
    const displayElement = document.getElementById("selectedRatingDisplay");

    ratingElement.addEventListener("ratingChange", (event) => {
      console.log("Rating changed:", event.detail.newRating);
      displayElement.textContent = event.detail.newRating;
      // Update your component's state with event.detail.newRating
      ratingElement.value = event.detail.newRating; // Reflect state back
    });
  });
</script>

The component includes a hidden radio input with value "0" that allows resetting
the rating.
```
