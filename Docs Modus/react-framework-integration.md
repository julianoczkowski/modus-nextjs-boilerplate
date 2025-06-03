# React Framework Integration

This guide will help you get started with consuming the Modus React Web Component library in your React project.

We highly recommend using the Modus React Components library for React based projects.
These components are automatically generated using the Stencil React Framework Integration.

Follow the steps outlined below to integrate and use Modus React Web Components effectively.

Please refer to the [official stencil documentation](https://stenciljs.com/docs/react#consumer-usage) for more information on how to integrate with your React project.

## Usage

Modus React Components have a peer dependency with Modus Web Components and require the
installation of both packages.

### 1. Install `modus-wc-react`:

Ensure that you specify the target version of React for the `modus-wc-react` package (e.g., `react18` for React 18).

<b>
  Lock the installed package versions to avoid unintended breakages on future
  npm installs.
</b>

```bash
npm install @trimble-oss/moduswebcomponents-react@<latest-version>-react<target-version>
# e.g.,
npm install @trimble-oss/moduswebcomponents-react@1.0.0-react18
```

### 2. Set up the styling:

You will need to import our styling in your main JavaScript or CSS file:

```js
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
```

### 3. Use the component library as normal.

```tsx
import { ModusWcBadge } from "@trimble-oss/moduswebcomponents-react";

<ModusWcBadge aria-label="Badge" content="Words" />;
```

### Using the Controlled Input Pattern

The controlled input pattern involves maintaining the state of the input's value within the React application or
component. The [React Docs](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
describe this in more detail.

```tsx
import React, { useState } from "react";
import { ModusWcTextInput } from "@trimble-oss/moduswebcomponents-react";

interface Props extends React.ComponentProps<typeof ModusWcTextInput> {}

const MyComponent: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");

  const handleInputChange = (
    e: CustomEvent<HTMLModusWcTextInputElementEventMap["inputChange"]>
  ) => {
    const value = e.detail.target.value;
    setValue(value);
  };

  return (
    <ModusWcTextInput
      {...props}
      onInputChange={handleInputChange}
      value={value}
    />
  );
};

export default MyComponent;
```

### Wrapping Components

When using Modus React Components directly, it is recommended to wrap it in corresponding React components within your application.
This will abstract away from the library dependency, allowing more flexibility for you and your application in the future.

Wrapped Modus component example:

```tsx
import React from "react";
import { ModusWcAvatar } from "@trimble-oss/moduswebcomponents-react";

interface Props extends React.ComponentProps<typeof ModusWcAvatar> {}

const Avatar: React.FC<Props> = (props) => {
  return <ModusWcAvatar {...props} />;
};

export default Avatar;
```

or, a more complex wrapper:

```tsx
import React from "react";
import { ModusWcTextInput } from "@trimble-oss/moduswebcomponents-react";

interface Props
  extends Omit<React.ComponentProps<typeof ModusWcTextInput>, "inputChange"> {
  onValueChange: (value: string) => void;
}

const TextInput: React.FC<Props> = (props) => {
  const handleInputChange = (
    e: CustomEvent<HTMLModusWcTextInputElementEventMap["inputChange"]>
  ) => {
    const value = e.detail.target.value;
    props.onValueChange(value);
  };

  return <ModusWcTextInput {...props} onInputChange={handleInputChange} />;
};

export default TextInput;
```
