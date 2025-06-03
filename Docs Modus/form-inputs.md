# Form Inputs

## Controlled Input Pattern

The controlled input pattern is a design pattern where the form element's value is controlled by the application state rather than the DOM element itself. This pattern offers several benefits:

- Single source of truth for input values
- Ability to validate and transform input data in real-time
- Simplified form state management
- Improved testability and debugging

### React

React's controlled input pattern binds form elements to state values and handlers, making React a natural fit for controlled inputs.

```typescript jsx
import { useState } from "react";

function ControlledTextInput() {
  const [value, setValue] = useState("");

  // Handle input changes
  const handleChange = (event: CustomEvent) => {
    setValue(event.detail.target.value);
  };

  return <ModusWcTextInput onInputChange={handleChange} value={value} />;
}
```

### Web Components

Web Components can implement the controlled input pattern by exposing properties and events that allow parent applications to manage state externally.

```javascript
// Example of using the Modus Text Input as a controlled component
const textInput = document.getElementById("first-name");
let inputValue = ""; // State lives in the parent application

// Set initial value
textInput.value = inputValue;

// Listen for changes
textInput.addEventListener("inputChange", (event) => {
  // Update our state
  inputValue = event.detail.target.value;

  // You can perform validation or transformations here

  // Update the input to reflect the new state
  // This step is only needed if you transform the value
  textInput.value = inputValue;
});
```
