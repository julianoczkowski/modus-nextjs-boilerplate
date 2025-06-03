# Modus Web Components: Slider (`modus-wc-slider`)

The `modus-wc-slider` component is a standard HTML range input styled according to the Modus design system. It allows users to select a value from a continuous or stepped range.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-slider`:

| Property        | Attribute         | Description                                                                     | Type                                | Default                           |
| --------------- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------- |
| `customClass`   | `custom-class`    | Custom CSS class to apply to the inner div.                                     | `string \| undefined`               | `''`                              |
| `disabled`      | `disabled`        | The disabled state of the slider.                                               | `boolean \| undefined`              | `false`                           |
| `inputId`       | `input-id`        | The ID of the input element.                                                    | `string \| undefined`               | `undefined`                       |
| `inputTabIndex` | `input-tab-index` | The tabindex of the input.                                                      | `number \| undefined`               | `undefined`                       |
| `label`         | `label`           | The text to display within the label associated with the slider.                | `string \| undefined`               | `undefined`                       |
| `max`           | `max`             | The maximum slider value.                                                       | `number \| undefined`               | `undefined` (HTML default is 100) |
| `min`           | `min`             | The minimum slider value.                                                       | `number \| undefined`               | `undefined` (HTML default is 0)   |
| `name`          | `name`            | Name of the form control. Submitted with the form as part of a name/value pair. | `string \| undefined`               | `''`                              |
| `required`      | `required`        | A value is required for the form to be submittable.                             | `boolean \| undefined`              | `false`                           |
| `size`          | `size`            | The size of the input. This primarily affects the label styling if present.     | `"lg" \| "md" \| "sm" \| undefined` | `'md'`                            |
| `step`          | `step`            | The increment of the slider.                                                    | `number \| undefined`               | `undefined` (HTML default is 1)   |
| `value`         | `value`           | The current value of the slider.                                                | `number`                            | `0`                               |

## Events

| Event         | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| `inputBlur`   | Emitted when the input loses focus.   | `CustomEvent<FocusEvent>` |
| `inputChange` | Emitted when the input value changes. | `CustomEvent<InputEvent>` |
| `inputFocus`  | Emitted when the input gains focus.   | `CustomEvent<FocusEvent>` |

## Usage Examples

Here are some examples based on the `modus-wc-slider.stories.ts` file:

**Default Slider:**

This is the basic usage of the slider with a label. The default range is typically 0 to 100.

```html
<modus-wc-slider aria-label="Volume control" label="Volume" value="50">
</modus-wc-slider>
```

_In a real application, you would typically bind the `value` property and listen to the `inputChange` event to manage the slider's value._

**Slider with Min, Max, and Step:**

Define the range and increment of the slider.

```html
<modus-wc-slider
  label="Brightness (0-200, step 10)"
  min="0"
  max="200"
  step="10"
  value="100"
  aria-label="Brightness control"
>
</modus-wc-slider>
```

**Disabled Slider:**

Set the `disabled` property to `true` to prevent user interaction.

```html
<modus-wc-slider
  label="Disabled Slider"
  value="25"
  disabled="true"
  aria-label="Disabled intensity slider"
>
</modus-wc-slider>
```

**Required Slider:**

While `required` is a prop, its direct visual or functional impact on a standard range slider is minimal without custom form validation logic. It's more of a semantic attribute for forms.

```html
<modus-wc-slider
  label="Required Setting"
  required="true"
  value="75"
  aria-label="Required setting slider"
>
</modus-wc-slider>
```

**Different Sizes (affects label):**

The `size` property primarily affects the associated `modus-wc-input-label` if one is used. The slider track and thumb size are generally consistent but can be styled with CSS.

```html
<modus-wc-slider
  label="Small Slider"
  size="sm"
  value="30"
  aria-label="Small size slider"
></modus-wc-slider>
<modus-wc-slider
  label="Medium Slider"
  size="md"
  value="50"
  aria-label="Medium size slider"
></modus-wc-slider>
<modus-wc-slider
  label="Large Slider"
  size="lg"
  value="70"
  aria-label="Large size slider"
></modus-wc-slider>
```

**Slider without Label:**

If you don't provide a `label`, ensure you provide an `aria-label` directly on the `modus-wc-slider` element for accessibility.

```html
<modus-wc-slider aria-label="Unlabeled slider" value="60"></modus-wc-slider>
```

**Handling Input Events:**

You can listen to `inputChange`, `inputFocus`, and `inputBlur` events. The `inputChange` event is the most common for tracking value changes as the user interacts with the slider.

```html
<modus-wc-slider
  id="mySlider"
  label="Interactive Slider"
  min="1"
  max="10"
  value="3"
></modus-wc-slider>
<p>Current Value: <span id="sliderValueDisplay">3</span></p>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const sliderElement = document.getElementById("mySlider");
    const valueDisplay = document.getElementById("sliderValueDisplay");

    sliderElement.addEventListener("inputChange", (event) => {
      const newValue = event.target.value;
      console.log("Slider value changed:", newValue);
      valueDisplay.textContent = newValue;
      // Update your component's state with newValue
      // sliderElement.value = newValue; // Reflect state back if managing externally
    });

    sliderElement.addEventListener("inputFocus", () => {
      console.log("Slider focused");
    });

    sliderElement.addEventListener("inputBlur", () => {
      console.log("Slider blurred");
    });
  });
</script>
```

_Note: The `value` property of the `modus-wc-slider` and the `event.target.value` will be a string. You'll need to parse it to a number if numerical operations are required._

```

```
