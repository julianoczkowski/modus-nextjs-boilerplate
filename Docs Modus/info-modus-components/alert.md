# Modus Web Components: Alert (`modus-wc-alert`)

The `modus-wc-alert` component is used to display important messages or notifications to the user. It can be customized with different variants, icons, and can be made dismissible.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-alert`:

| Property           | Attribute           | Description                                         | Type                                                       | Default     |
| ------------------ | ------------------- | --------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| `alertDescription` | `alert-description` | The description of the alert.                       | `string \| undefined`                                      | `undefined` |
| `alertTitle`       | `alert-title`       | The title of the alert. (Required)                  | `string`                                                   | `undefined` |
| `customClass`      | `custom-class`      | Custom CSS class to apply to the outer div element. | `string \| undefined`                                      | `''`        |
| `dismissible`      | `dismissible`       | Whether the alert has a dismiss button.             | `boolean \| undefined`                                     | `false`     |
| `icon`             | `icon`              | The Modus icon to render.                           | `string \| undefined`                                      | `undefined` |
| `role`             | `role`              | Role taken by the alert. Defaults to 'status'.      | `"alert" \| "log" \| "marquee" \| "status" \| "timer"`     | `'status'`  |
| `variant`          | `variant`           | The variant of the alert.                           | `"error" \| "info" \| "success" \| "warning" \| undefined` | `'info'`    |

### Events

| Event          | Description                                     | Type               |
| -------------- | ----------------------------------------------- | ------------------ |
| `dismissClick` | An event that fires when the alert is dismissed | `CustomEvent<any>` |

### Usage Examples

Here are some examples based on the `modus-wc-alert.stories.ts` file:

**Default Alert:**

This is a basic alert with a title and description. It defaults to the 'info' variant.

```html
<modus-wc-alert
  alert-title="New message!"
  alert-description="You have 3 new messages."
>
</modus-wc-alert>
```

**Alert Variants:**

You can change the appearance and default icon of the alert using the `variant` property.

- **Error Alert:**

html
<modus-wc-alert
alert-title="Error!"
alert-description="Something went wrong."
variant="error"

>   </modus-wc-alert>

````
- **Success Alert:**
```html
<modus-wc-alert
  alert-title="Success!"
  alert-description="The operation was successful."
  variant="success"
>
</modus-wc-alert>
````

- **Warning Alert:**
  ```html
  <modus-wc-alert
    alert-title="Warning!"
    alert-description="Please check the details."
    variant="warning"
  >
  </modus-wc-alert>
  ```

**Dismissible Alert:**

Set the `dismissible` property to `true` to add a dismiss button.

```html
<modus-wc-alert
  alert-title="Dismissible Alert"
  alert-description="This alert can be closed."
  dismissible
>
</modus-wc-alert>
```

**Alert with Custom Icon:**

You can provide a custom icon using the `icon` property. This will override the default icon for the chosen variant.

```html
<modus-wc-alert
  alert-title="Custom Icon Alert"
  alert-description="This alert uses a custom help icon."
  icon="help"
  variant="info"
>
</modus-wc-alert>
```

**Alert with Custom Button (Slotted Content):**

You can add custom buttons or other content within the alert by using the `button` slot.

```html
<modus-wc-alert
  alert-title="New message!"
  alert-description="You have 3 new messages."
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
    variant="outlined"
  >
    View Messages
  </modus-wc-button>
</modus-wc-alert>
```

**Alert with Custom Content (Slotted Content):**

If `alertTitle` and `alertDescription` are not provided, you can use the `content` slot to render custom HTML content within the main body of the alert.

```html
<modus-wc-alert variant="success">
  <div slot="content">
    <strong>Well done!</strong> You successfully read this important alert
    message.
  </div>
</modus-wc-alert>
```

### Migration from Version 1.0

The `modus-wc-alert.stories.ts` file also provides a migration guide from version 1.0:

- **Content Slot:** Version 2.0 can render custom HTML in the `content` slot (if `alertTitle` and `alertDescription` are not used).
- **Button Slot:** Version 1.0 rendered a button by default. Version 2.0 allows for a custom HTML button (or other elements) in the `button` slot.
- **Prop Mapping:**
  - `aria-label` (v1) -> `aria-label` (v2)
  - `button-aria-label` (v1) -> Not carried over, use `button` slot.
  - `button-text` (v1) -> Not carried over, use `button` slot.
  - `dismissible` (v1) -> `dismissible` (v2)
  - `message` (v1) -> `alert-title` (v2) (Note: `alert-description` is also available in v2 for more detailed messages)
  - `type` (v1) -> `variant` (v2)
- **Event Mapping:**
  - `actionClick` (v1) -> Not carried over, handle clicks on custom elements in the `button` slot.
  - `dismissClick` (v1) -> `dismissClick` (v2)

Shall we move on to the next component?
