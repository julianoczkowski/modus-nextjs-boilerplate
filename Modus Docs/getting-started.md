# Getting Started

## Installation

<b>
  Lock the installed package version to avoid unintended breakages on future npm
  installs.
</b>

```bash
npm install @trimble-oss/moduswebcomponents
```

## Usage

### 1. Set up the styling:

You will need to import our styling in your main JavaScript or CSS file:

```js
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
```

### 2. Set the theme:

The theme can be set manually or by using the `ThemeSwitcher` component. See the "Use a Theme" section of [Styling](/docs/documentation-styling--docs) for guidance.

Available themes are:

- `modus-classic-light`
- `modus-classic-dark`
- `modus-modern-light` (default)
- `modus-modern-dark`

### 3. Register custom elements:

```javascript
import { defineCustomElements } from "@trimble-oss/moduswebcomponents/loader";

// Call during the initial loading of your application
const Root = () => {
  defineCustomElements();

  return <App />;
};
```

### 4. Use the components:

```javascript
// Use in HTML
<modus-wc-button variant="primary">Click me</modus-wc-button>
```

## Types

Types are a crucial part of our component library, providing robust type safety and enhanced developer experience through comprehensive TypeScript definitions for all components.

```javascript
import {
  ISelectOption,
  ModusWcSelectCustomEvent,
} from "@trimble-oss/moduswebcomponents";

const options: ISelectOption[] = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
];

const handleEvent = (e: ModusWcSelectCustomEvent<ISelectOption>) => {};
```
