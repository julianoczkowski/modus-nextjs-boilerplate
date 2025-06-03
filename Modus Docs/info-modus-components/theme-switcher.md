# Modus Web Components: Theme Switcher (`modus-wc-theme-switcher`)

The `modus-wc-theme-switcher` component provides a toggle control that allows users to switch between light and dark modes of an application's theme. It is designed to work in conjunction with a theme provider, such as `modus-wc-theme-provider`.

## Properties

Based on the `readme.md` file, here are the properties for the `modus-wc-theme-switcher`:

| Property      | Attribute      | Description                                              | Type                  | Default |
| ------------- | -------------- | -------------------------------------------------------- | --------------------- | ------- |
| `customClass` | `custom-class` | Custom CSS class to apply to the theme switcher element. | `string \| undefined` | `''`    |

## Events

| Event         | Description                                    | Type                        |
| ------------- | ---------------------------------------------- | --------------------------- |
| `themeChange` | An event that fires when the theme is changed. | `CustomEvent<IThemeConfig>` |

### `IThemeConfig` Interface (for `themeChange` event)

This interface represents the theme configuration. While the specific structure of `IThemeConfig` isn't detailed in the provided `readme.md` or `stories.ts` for the switcher itself, it generally includes at least the current mode (e.g., 'light' or 'dark') and potentially the theme name (e.g., 'modus-classic-light', 'modus-modern-dark'). The event detail will contain the updated theme configuration object after the switch.

## Usage Examples

Here's an example based on the `modus-wc-theme-switcher.stories.ts` file. This component is typically used within a `modus-wc-theme-provider`.

**Default Theme Switcher:**

This example shows how to integrate the theme switcher within a theme provider. Clicking the switcher will toggle between light and dark modes managed by the provider.

```html
<modus-wc-theme-provider>
  <header>
    <h1>My Application</h1>
    <modus-wc-theme-switcher
      aria-label="Toggle light and dark theme"
    ></modus-wc-theme-switcher>
  </header>
  <main>
    <p>This is content that will change based on the selected theme mode.</p>
    <modus-wc-button>Sample Button</modus-wc-button>
  </main>
</modus-wc-theme-provider>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.querySelector("modus-wc-theme-switcher");
    if (themeSwitcher) {
      themeSwitcher.addEventListener("themeChange", (event) => {
        console.log("Theme changed:", event.detail);
        // event.detail will contain the new theme configuration, e.g., { mode: 'dark', name: 'modus-classic-dark' }
        // You can use this to save user preference or perform other actions.
      });
    }

    // Example of setting an initial theme on the provider
    const themeProvider = document.querySelector("modus-wc-theme-provider");
    if (themeProvider) {
      // themeProvider.initialTheme = { mode: 'dark', name: 'modus-modern-dark' }; // Example
    }
  });
</script>
```

**Theme Switcher with Initial Theme Set on Provider:**

You can set an initial theme (including mode) on the `modus-wc-theme-provider`. The switcher will reflect this initial state.

```html
<modus-wc-theme-provider .initialTheme=${{ mode: 'dark', name: 'modus-classic-dark' }}>
  <nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: var(--modus-wc-color-primary-dark); color: white;">
    <span>App Title</span>
    <modus-wc-theme-switcher aria-label="Switch theme"></modus-wc-theme-switcher>
  </nav>
  <article style="padding: 1rem;">
    <p>Content area that respects the theme.</p>
  </article>
</modus-wc-theme-provider>

<script>
  // Example for storybook or direct JS manipulation
  document.addEventListener('DOMContentLoaded', () => {
    const provider = document.querySelector('modus-wc-theme-provider');
    if(provider) {
      provider.initialTheme = { mode: 'dark', name: 'modus-classic-dark' };
    }
  });
</script>
```

**Applying a Custom Class:**

Use the `custom-class` property for additional CSS styling if needed for positioning or minor appearance tweaks (though the core visual is usually theme-controlled).

```html
<style>
  .my-custom-switcher-style {
    border: 1px solid blue;
    border-radius: 8px;
  }
</style>

<modus-wc-theme-provider>
  <modus-wc-theme-switcher
    custom-class="my-custom-switcher-style"
    aria-label="Theme toggle with custom style"
  >
  </modus-wc-theme-switcher>
</modus-wc-theme-provider>
```

**How it Works:**
The `modus-wc-theme-switcher` internally listens to and updates a global theme store (like `themeStore` mentioned in its `.tsx` file). The `modus-wc-theme-provider` (or a similar mechanism in your application) would subscribe to this store and apply the appropriate theme styles (typically by setting a `data-theme` attribute on the `<html>` or a root application element). The switcher visually reflects the current mode (light/dark) and allows toggling it.
