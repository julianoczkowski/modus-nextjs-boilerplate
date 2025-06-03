# Modus Web Components: Modal (`modus-wc-modal`)

The `modus-wc-modal` component is used to display content in a dialog overlay, often for important messages, forms, or detailed information, without navigating the user away from the current page. It utilizes the native HTML `<dialog>` element.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-modal`:

| Property               | Attribute                | Description                                                                                                                | Type                                         | Default     |
| ---------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| `backdrop`             | `backdrop`               | The modal's backdrop. Specify 'static' for a backdrop that doesn't close the modal when clicked outside the modal content. | `"default" \| "static" \| undefined`         | `'default'` |
| `customClass`          | `custom-class`           | Custom CSS class to apply to the modal.                                                                                    | `string \| undefined`                        | `''`        |
| `fullscreen`           | `fullscreen`             | Specifies whether the modal should be displayed full-screen.                                                               | `boolean \| undefined`                       | `false`     |
| `modalId`              | `modal-id`               | The ID of the inner dialog element. (Required)                                                                             | `string`                                     | `undefined` |
| `position`             | `position`               | Specifies the position of the modal.                                                                                       | `"bottom" \| "center" \| "top" \| undefined` | `'center'`  |
| `showClose`            | `show-close`             | Specifies whether to show the close icon button at the top right of the modal.                                             | `boolean \| undefined`                       | `true`      |
| `showFullscreenToggle` | `show-fullscreen-toggle` | Specifies whether to show the fullscreen toggle icon button.                                                               | `boolean \| undefined`                       | `false`     |

## Slots

The `modus-wc-modal` component provides several named slots for structuring its content:

- **`header`**: For the title or header content of the modal.
- **`content`**: For the main body content of the modal.
- **`footer`**: For action buttons or other footer content, typically displayed at the bottom of the modal.

## Usage Examples

Here are some examples based on the `modus-wc-modal.stories.ts` file:

**Default Modal:**

This example shows a basic modal with a header, content, and a close button in the footer. The `modalId` is essential for controlling the modal programmatically.

```html
<modus-wc-button id="openModalBtn">Open modal</modus-wc-button>

<modus-wc-modal aria-label="Example modal" modal-id="myDefaultModal">
  <span slot="header">Modal Title</span>
  <span slot="content">This is sample modal content.</span>
  <modus-wc-button slot="footer" id="closeModalBtn">Close</modus-wc-button>
</modus-wc-modal>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myDefaultModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");

    openBtn.addEventListener("click", () => modal.showModal());
    closeBtn.addEventListener("click", () => modal.close());

    // Optional: Close modal if backdrop is clicked (for backdrop="default")
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });
</script>
```

**Modal Positions:**

You can control the modal's position on the screen using the `position` property.

- **Top Position:**
  ```html
  <modus-wc-modal modal-id="topModal" position="top">
    <span slot="header">Top Modal</span>
    <span slot="content">This modal appears at the top.</span>
  </modus-wc-modal>
  ```
- **Bottom Position:**
  ```html
  <modus-wc-modal modal-id="bottomModal" position="bottom">
    <span slot="header">Bottom Modal</span>
    <span slot="content">This modal appears at the bottom.</span>
  </modus-wc-modal>
  ```

**Static Backdrop:**

Set `backdrop="static"` to prevent the modal from closing when the user clicks on the overlay. The user will need to use an explicit close button or the Escape key.

```html
<modus-wc-modal modal-id="staticBackdropModal" backdrop="static">
  <span slot="header">Static Backdrop</span>
  <span slot="content">Clicking outside this modal will not close it.</span>
  <modus-wc-button
    slot="footer"
    onclick="document.getElementById('staticBackdropModal').close()"
  >
    Close
  </modus-wc-button>
</modus-wc-modal>
```

**Fullscreen Modal:**

Set `fullscreen="true"` to make the modal take up the entire viewport. You can also enable a toggle button.

```html
<modus-wc-modal
  modal-id="fullscreenModal"
  fullscreen="false" /* Can be dynamically toggled */
  show-fullscreen-toggle="true">
  <span slot="header">Fullscreen Toggle Modal</span>
  <span slot="content">This modal can be toggled to fullscreen.</span>
  <modus-wc-button slot="footer" onclick="document.getElementById('fullscreenModal').close()">
    Close
  </modus-wc-button>
</modus-wc-modal>
```

_The `show-fullscreen-toggle` adds a button to the modal header that internally toggles the `fullscreen` property._

**Hiding the Default Close Button:**

Set `show-close="false"` to remove the 'X' icon button from the top-right corner of the modal. You will need to provide your own means of closing the modal (e.g., a button in the footer).

```html
<modus-wc-modal modal-id="noCloseButtonModal" show-close="false">
  <span slot="header">Modal Without Default Close</span>
  <span slot="content"
    >You must use the button in the footer to close this modal.</span
  >
  <modus-wc-button
    slot="footer"
    onclick="document.getElementById('noCloseButtonModal').close()"
  >
    Dismiss
  </modus-wc-button>
</modus-wc-modal>
```

**Custom Width and Height:**

You can apply custom CSS to change the modal's dimensions using the `custom-class` property or by targeting the modal directly.

```html
<style>
  .expanded-modal .modus-wc-modal-box {
    /* Targets the inner dialog box */
    width: 80%;
    max-width: none; /* Override DaisyUI's default max-width if needed */
    height: 60%;
    max-height: none; /* Override DaisyUI's default max-height */
  }
</style>

<modus-wc-modal modal-id="customSizeModal" custom-class="expanded-modal">
  <span slot="header">Custom Size Modal</span>
  <span slot="content">This modal has custom width and height.</span>
  <modus-wc-button
    slot="footer"
    onclick="document.getElementById('customSizeModal').close()"
  >
    Close
  </modus-wc-button>
</modus-wc-modal>
```

**Programmatic Control:**
To open the modal, get a reference to the `modus-wc-modal` element and call its `showModal()` method (which is a method of the native `<dialog>` element it wraps). To close it, call the `close()` method.

```javascript
// Assuming you have: <modus-wc-modal modal-id="myProgrammaticModal">...</modus-wc-modal>
const modalElement = document.getElementById("myProgrammaticModal");

// To open:
modalElement.showModal();

// To close:
modalElement.close();
```
