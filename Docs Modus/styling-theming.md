## 1. Overview

This document provides a comprehensive guide to understanding and utilizing the Modus styling and theming system. It's designed to help developers, and provide context to LLMs, in applying consistent styles, managing themes, and leveraging the provided tools effectively.

The system is built upon:

- A robust set of CSS custom properties (variables).
- Global style definitions and resets.
- Integration with Tailwind CSS for utility-first styling.
- A flexible theming mechanism supporting multiple themes (Modus Classic, Modus Modern) with light and dark variants.

## 2. Core Concepts

### 2.2. Global Styles

**File:** `Styles/global.css`

This file applies base styles, resets, and crucially, the theme definitions by overriding CSS variables.

**Key Features:**

- **OKLCH Fallbacks:** Defines fallback variables (e.g., `--fallback-p`, `--fallback-pc`) for systems supporting `oklch` colors, mapping them to the standard Modus color variables (e.g. `var(--modus-wc-color-primary)`). These are within an `@supports (color: oklch(0% 0 0))` block.
- **Universal Resets:**
  - `box-sizing: border-box` for all elements (`*, *::before, *::after`).
  - Default `font-family` (`var(--modus-wc-font-family), sans-serif`) applied to all elements.
- **Body Styling:** Sets a default `background-color` for `body` using `--modus-wc-color-base-page`.
- **Utility Class:**
  - `.modus-wc-border`: A general-purpose border class using `--modus-wc-color-base-200` for border color.
- **Input Styling Resets:** Specific Modus input elements (`modus-wc-text-input`, `modus-wc-select`, etc.) have their background set to transparent and `--fallback-b1` (which defaults to `var(--modus-wc-color-base-100)`) also set to transparent.
- **Theme Definitions:** Contains the CSS rules that apply specific themes by overriding the default CSS variables. This is done via the `data-theme` attribute on the `:root` element (e.g., `[data-theme='modus-modern-light']:root`).

### 2.3. Tailwind CSS Integration

**Files:**

- `Styles/tailwind.css`
- `Styles/tailwind-themeable.ts`

The system integrates Tailwind CSS for utility-first styling.

**Setup (`Styles/tailwind.css`):**

- Imports `global.css` and `variables.css` to ensure Modus variables and base styles are loaded first.
- Includes Tailwind's core styles: `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
- **Modus Preflight Overrides:** Within an `@layer base`, this file customizes Tailwind's base (Preflight) styles for headings (h1-h6), links (`a`), and lists (`menu`, `ol`, `ul`, `li`) to align with Modus design principles, primarily using Modus CSS variables for font sizes, weights, and colors.
  ```css
  /* From tailwind.css, within @layer base */
  h1 {
    font-size: var(--modus-wc-font-size-3xl); /* */
    font-weight: var(--modus-wc-font-weight-normal); /* */
  }
  a {
    color: var(--modus-wc-color-highlight-blue); /* */
    text-decoration-line: underline; /* */
  }
  ```

**Themeable Classes (`Styles/tailwind-themeable.ts`):**

- This TypeScript file lists an array of Modus-specific CSS class names (e.g., `modus-wc-alert-error`, `modus-wc-btn-sm`, `modus-wc-text-primary`).
- **Purpose:** Its primary role is to ensure these classes are included by Tailwind's JIT compiler in the final CSS output, making them available for use. These classes likely represent pre-styled components or utilities specific to the Modus design system.

### 2.4. Theming System

**Files:**

- `Styles/themes/modus-classic.ts`
- `Styles/themes/modus-modern.ts`
- `Styles/global.css` (for theme application via CSS variable overrides)
- `Styles/variables.css` (for default themeable variables using `light-dark()`)

The system supports multiple themes (Modus Classic, Modus Modern) with light and dark variants.

**Theme Definitions (TypeScript Files - `modus-classic.ts`, `modus-modern.ts`):**

- These files export JavaScript objects (`modusClassic`, `modusModern`) containing `light` and `dark` sub-objects.
- Each sub-object defines a palette of color values (e.g., `primary`, `primary-focus`, `primary-content`, `secondary`, `base-100`, `error`, etc.).
- The `modus-classic.ts` also defines `--rounded-box` and `--rounded-btn` values.
  ```typescript
  // Example structure from modus-modern.ts (dark variant)
  // export const modusModern = {
  //   dark: {
  //     ...commonOverrides, // Common properties
  //     primary: '#019aeb', // Trimble Blue
  //     'primary-content': '#000000', // Black
  //     // ... other colors
  //     'base-100': '#171C1E', // Gray 10
  //     'base-content': '#FFFFFF', // White
  //     error: '#E86363', // Red
  //     'error-content': '#000', // Black
  //   },
  // };
  ```
- **Note on TypeScript Theme Files:** These TS objects are typically used in a JavaScript environment or build process (e.g., with Tailwind's `daisyui` plugin if it were being used, or a custom script to generate CSS variables or utility classes). For this specific setup, the _application_ of themes is primarily handled by CSS variable overrides in `Styles/global.css`. The TS files serve as a structured definition of theme palettes that are _manually translated_ into the CSS variable overrides in `global.css`.

**Theme Application (`Styles/global.css`):**

- Themes are activated by setting the `data-theme` attribute on the `:root` element (usually `<html>`).
- `Styles/global.css` contains selectors like `[data-theme='modus-modern-light']:root` that override the default CSS variables (many of which are defined in `variables.css`) with theme-specific values.

  ```css
  /* Example from global.css for Modus Modern Light theme */
  [data-theme="modus-modern-light"]:root {
    color-scheme: light; /* */
    --modus-wc-color-base-page: #fff; /* */
    --modus-wc-color-base-100: var(--modus-wc-color-gray-light); /* */
    --modus-wc-color-base-content: var(--modus-wc-color-gray-10); /* */
    --modus-wc-color-primary: var(--modus-wc-color-trimble-blue); /* */
    --modus-wc-color-primary-content: var(--modus-wc-color-white); /* */
    /* Other variables like secondary, accent, neutral, info, success, warning, error are NOT overridden here,
       so they would fall back to the definitions in :root from variables.css */
  }

  /* Example from global.css for Modus Modern Dark theme */
  [data-theme="modus-modern-dark"]:root {
    color-scheme: dark; /* */
    --modus-wc-color-base-page: #000; /* */
    --modus-wc-color-base-100: var(--modus-wc-color-trimble-gray); /* */
    --modus-wc-color-base-content: var(--modus-wc-color-gray-1); /* */
    --modus-wc-color-primary: var(--modus-wc-color-highlight-blue); /* */
    --modus-wc-color-primary-content: var(--modus-wc-color-black); /* */
    /* Again, other semantic colors (secondary, accent etc.) are not overridden here and would use defaults from variables.css */
  }
  ```

- The `color-scheme` property is also set per theme in `global.css`, influencing browser default styles and the behavior of the `light-dark()` function from `variables.css`.
- **Important Observation**: The theme overrides in `global.css` for `modus-modern-*` primarily adjust `base-*` and `primary-*` colors. For `modus-classic-*` themes, they adjust `base-*` colors and semantic colors like `info`, `success`, `error`, `warning`, but _not_ `primary`, `secondary`, or `accent` directly in those theme blocks. This implies that `primary`, `secondary`, `accent`, etc., for the classic themes would rely on their default `light-dark()` definitions in `variables.css` unless specified otherwise.
