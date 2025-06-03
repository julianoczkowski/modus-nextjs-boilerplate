## 3. How to Use

### 3.1. Applying CSS Variables

Always prefer using the defined CSS variables from `Styles/variables.css` for colors, fonts, spacing, etc., to maintain consistency and themeability.

```css
.my-custom-button {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-md);
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-primary); /* Or a border-color variable */
  border-radius: var(--modus-wc-border-radius-btn);
  font-size: var(--modus-wc-font-size-md);
  font-family: var(--modus-wc-font-family);
}

.my-text-element {
  color: var(
    --modus-wc-color-base-content
  ); /* Ensures text color contrasts with background */
  font-family: var(--modus-wc-font-family);
  line-height: var(--modus-wc-line-height-md);
}
```

### 3.2. Using Tailwind CSS and Modus Utility Classes

- Leverage standard Tailwind CSS utility classes for layout (flexbox, grid), responsive design, margins, paddings (if not using Modus spacing variables directly in CSS), and other common styling needs.
- For Modus-specific component appearances or utilities (like themed alerts, buttons, text colors), look for classes prefixed with `modus-wc-` as listed in `Styles/tailwind-themeable.ts`. These classes are designed to work seamlessly with the theming system by presumably using the Modus CSS variables internally.

**Example:**

```html
<div class="modus-wc-alert-error p-4 rounded-md">This is an error message.</div>

<div class="flex items-center my-custom-container">
  <button class="my-custom-button">Click Me</button>
</div>
```

### 3.3. Managing Themes

**Setting a Theme:**
To apply a theme, set the `data-theme` attribute on the `<html>` element. This is typically done via JavaScript.

```javascript
// To set Modus Modern Light theme
document.documentElement.setAttribute("data-theme", "modus-modern-light");

// To set Modus Classic Dark theme
document.documentElement.setAttribute("data-theme", "modus-classic-dark");

// To remove explicit theme and fall back to OS preference (via light-dark() in variables.css)
document.documentElement.removeAttribute("data-theme");
```

The available themes defined in `Styles/global.css` are:

- `modus-modern-light`
- `modus-modern-dark`
- `modus-classic-light`
- `modus-classic-dark`

**Automatic Light/Dark Mode (via `light-dark()`):**
Many CSS variables in `Styles/variables.css` (e.g., `--modus-wc-color-base-page`, `--modus-wc-color-primary`, `--modus-wc-color-base-content`) use the `light-dark()` CSS function.

- If no `data-theme` attribute is set on `:root`, these variables will automatically adapt to the user's operating system light or dark mode preference because `:root` in `variables.css` has `color-scheme: light dark;`.
- When a `data-theme` (e.g., `modus-modern-dark`) is applied, the `color-scheme` property specified for that theme in `Styles/global.css` (e.g., `color-scheme: dark;`) takes precedence. This `color-scheme` will then determine how the `light-dark()` function resolves for any variables that are _not_ explicitly overridden by that theme.

### 3.4. Styling Components

When creating or styling components:

1.  **Use CSS Variables:** For all design tokens (colors, fonts, spacing, radii), use the appropriate `--modus-wc-*` variables from `Styles/variables.css`. This is crucial for consistency and theme adaptability.
2.  **Leverage Tailwind Utilities:** Use Tailwind for layout, responsive design, and other general styling tasks that are not covered by specific Modus variables.
3.  **Check `tailwind-themeable.ts`:** For common UI elements like alerts, badges, buttons, form controls, etc., see if there's an existing `modus-wc-*` class that provides the necessary styling.
4.  **Write Custom CSS:** For component-specific styles not covered by variables or existing utilities, write custom CSS. Aim to use Modus variables within this custom CSS wherever possible.

### 3.5. Customization and Extension

- **Adding New CSS Variables:** If new global design tokens are required, add them to `Styles/variables.css`, following existing naming conventions (e.g., `--modus-wc-new-variable-name`).
- **Modifying Themes:**
  - To adjust colors or other properties within an existing theme, modify the corresponding CSS variable overrides in `Styles/global.css` under the relevant `[data-theme='...']:root` selector.
  - The TypeScript theme files (`modus-classic.ts`, `modus-modern.ts`) serve as a design reference for the values used in `global.css`. If you update these TS files, ensure you manually update the corresponding values in `global.css` as there's no automated link apparent from the provided files.
- **Adding New Themes:**
  1.  Optionally, define your new theme's palette in a new `.ts` file (e.g., `my-new-theme.ts`) for documentation and reference, similar to `modus-classic.ts`.
  2.  In `Styles/global.css` (or a new CSS file imported into `tailwind.css`), add a new selector for your theme:
      ```css
      [data-theme="my-new-theme-light"]:root {
        color-scheme: light;
        --modus-wc-color-primary: /* your theme's primary color */ ;
        --modus-wc-color-primary-content: /* your theme's primary content color */ ;
        --modus-wc-color-base-page: /* ... */ ;
        /* ... other variable overrides ... */
      }
      ```
  3.  Ensure you override all necessary variables to achieve the desired look and feel for your new theme.

```

```
