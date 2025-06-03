# Modus Icon Usage

Several components require [Modus icons](https://modus-icons.trimble.com) to be installed in the host application. To install
icons, add the following html to your application.

<b>
  Modus (font) icons currently only supports the usage of one icon set
  (outlined, filled, transportation) per application. If you require multiple
  sets, reach out to [Modus
  Design](https://mail.google.com/chat/u/0/#chat/space/AAAAexugR1k) and comment
  on this [GitHub Issue](https://github.com/trimble-oss/modus-icons/issues/363).
</b>

```html
<head>
  <link
    rel="preload"
    href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
    as="style"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
  />
</head>
```

## Offline usage

For applications requiring offline capability or improved performance, you can bundle Modus icons directly with your app.

### 1. Install the `@trimble-oss/modus-icons` package:

```bash
npm install @trimble-oss/modus-icons
```

### 2. Copy the required font files and styles to your application:

- From `node_modules/@trimble-oss/modus-icons/dist/modus-outlined/fonts/`, copy:
  - `modus-icons.css`
  - Font files (.woff, .woff2, etc.)
- Place them in a publicly accessible directory (e.g., /public/fonts/).

### 3. Reference the local stylesheet in your application:

```html
<head>
  <link
    rel="preload"
    href="/path-to-your-local-modus-icons-font.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="/path-to-your-local-modus-icons.css" />
</head>
```
