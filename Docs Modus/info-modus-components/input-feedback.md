# Modus Web Components: Input Feedback (`modus-wc-input-feedback`)

The `modus-wc-input-feedback` component is used to provide contextual feedback related to form input interactions, such as error messages, success confirmations, or informational tips.

**Important:** To use a custom icon with this component, Modus icons need to be installed in the host application.

## Propertiesw

Based on the `readme.md` file, here are the properties for the `modus-wc-input-feedback`:

| Property      | Attribute      | Description                                                              | Type                                          | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------ | --------------------------------------------- | ----------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the outer div element.                      | `string \| undefined`                         | `''`        |
| `icon`        | `icon`         | The Modus icon name to use instead of the pre-defined icons.             | `string \| undefined`                         | `''`        |
| `level`       | `level`        | The level informs which icon and color that will be rendered. (Required) | `"error" \| "info" \| "success" \| "warning"` | `undefined` |
| `message`     | `message`      | The message to display.                                                  | `string \| undefined`                         | `''`        |
| `size`        | `size`         | The size of the feedback component.                                      | `"lg" \| "md" \| "sm" \| undefined`           | `'md'`      |

### `IInputFeedbackLevel`

The `level` property determines the visual style and default icon for the feedback. Possible values are:

- `error`
- `info`
- `success`
- `warning`

## Usage Examples

Here are some examples based on the `modus-wc-input-feedback.stories.ts` file:

**Default Feedback (Error Level):**

This example shows a basic error message. The component will automatically display an appropriate icon for the 'error' level.

```html
<modus-wc-input-feedback level="error" message="Uh oh. You done messed up.">
</modus-wc-input-feedback>
```

**Different Feedback Levels:**

You can change the `level` to display different types of feedback, which will also change the default icon and color scheme.

- **Informational Feedback:**
  ```html
  <modus-wc-input-feedback
    level="info"
    message="This is an informational message."
  >
  </modus-wc-input-feedback>
  ```
- **Success Feedback:**
  ```html
  <modus-wc-input-feedback
    level="success"
    message="Operation completed successfully!"
  >
  </modus-wc-input-feedback>
  ```
- **Warning Feedback:**
  ```html
  <modus-wc-input-feedback
    level="warning"
    message="Please double-check the entered information."
  >
  </modus-wc-input-feedback>
  ```

**Custom Icon:**

You can override the default icon by providing a Modus icon name to the `icon` property.

```html
<modus-wc-input-feedback
  level="success"
  message="Event added to calendar!"
  icon="calendar_check"
>
</modus-wc-input-feedback>
```

**Different Sizes:**

Control the size of the feedback component (which affects font size and icon size) using the `size` property.

```html
<modus-wc-input-feedback
  level="info"
  message="Small informational message."
  size="sm"
>
</modus-wc-input-feedback>

<modus-wc-input-feedback
  level="warning"
  message="Large warning message."
  size="lg"
>
</modus-wc-input-feedback>
```

**Integration with Input Components:**

This component is typically used alongside form input components like `modus-wc-text-input`, `modus-wc-select`, etc., to provide feedback based on user input or validation results.

```html
<modus-wc-text-input
  label="Username"
  value="testuser"
  .feedback=${{ level: 'success', message: 'Username is available!' }}>
</modus-wc-text-input>

<br><br>

<modus-wc-text-input
  label="Password"
  type="password"
  required
  .feedback=${{ level: 'error', message: 'Password is required.' }}>
</modus-wc-text-input>
```

_In a real application, the `.feedback` property on input components would be dynamically updated based on validation logic._
