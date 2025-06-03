# Styling

## Custom Styling

The Modus Web Components library provides several ways to customize the appearance of components.

### 1. Use a Theme

Our components ship preloaded with several themes. A list of themes can be found
[here](https://github.com/trimble-oss/modus-wc-2.0/blob/main/tailwind.config.ts)
within the `daisyui.themes` array. Themes can be applied in multiple ways.

#### a. Using the `ThemeSwitcher` component:

The Theme Switcher will automatically handle theme switching through our theme store. Theme
values are stored in local storage using the key `modus-theme-config`.

```html
<modus-wc-theme-provider initial-theme='{ "theme": "modus-modern-light" }'>
  <modus-wc-theme-switcher aria-label="Toggle theme" />
</modus-wc-theme-provider>
```

#### b. Manually applying the following HTML:

```html
<!-- Light theme -->
<html class="light" data-theme="modus-modern-light" data-mode="light">
  ...
</html>

<!-- Dark theme -->
<html class="dark" data-theme="modus-modern-dark" data-mode="dark">
  ...
</html>
```

### 2. Override CSS Custom Properties

Our components use CSS custom properties for styling. You can override these globally or at the component level.

A full list of overridable CSS custom properties can be found
[here](https://github.com/trimble-oss/modus-wc-2.0/blob/main/src/styles/variables.scss).

```css
:root {
  --modus-wc-primary-color: purple;
  --modus-wc-color-info: green;
  --modus-wc-font-weight-normal: 500;
}
```

```css
.modus-wc-btn {
  --modus-wc-border-radius-md: 20px;
}
```

### 3. Use Custom CSS Classes

Many components accept a `custom-class` attribute for additional styling:

```html
<modus-wc-button
  label="Custom Button"
  custom-class="my-custom-button"
></modus-wc-button>
```

```css
.my-custom-button {
  background-color: purple;
  border-color: purple;
}
```

### 4. Apply Direct CSS Overrides

Since Shadow DOM is disabled, you can directly target component classes.

Our component classes are all prefixed with `modus-wc-` to avoid collisions.

```css
.modus-wc-btn {
  background-color: yellow;
  color: black;
}
```

## CSS Reset (Tailwind Preflight)

Tailwind performs a CSS reset (preflight) that normalizes browser styles to ensure all component styles are applied
consistently across browsers. This reset is automatically loaded into applications consuming the library. We've
provided Modus-specific overrides in `styles/tailwind.css` to maintain compatibility with our design system, though
these overrides aren't exhaustive. If you need additional style adjustments, you can either:

1. Add custom CSS overrides in your application
2. Create a GitHub issue describing the needed override (contributions welcome)

---

Need help? Check out our [GitHub repository](https://github.com/trimble-oss/modus-web-components)
or [raise an issue](https://github.com/trimble-oss/modus-web-components/issues).
