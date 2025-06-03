## LLM Guidance: What to Use and When

When assisting with coding or styling tasks using this Modus system:

For basic styling (colors, fonts, spacing, borders, radii):

Primary Choice: Directly apply CSS variables from Styles/variables.css in your CSS rules.
Example: color: var(--modus-wc-color-text-primary); (Note: text-primary isn't explicitly in variables.css, but semantic variables like --modus-wc-color-primary and content counterparts like --modus-wc-color-primary-content are. Base content is --modus-wc-color-base-content)
Example: padding: var(--modus-wc-spacing-md);
Context: These variables are the single source of truth for design tokens and ensure that elements will respond correctly to theme changes.
For layout, positioning, responsive design, flexbox, grid:

Primary Choice: Use standard Tailwind CSS utility classes.
Example: class="flex items-center justify-between p-4 md:p-6"
Context: Tailwind is integrated for its utility-first approach to building layouts quickly.
For common UI components/patterns (alerts, buttons, badges, specific text styles):

First Check: Consult Styles/tailwind-themeable.ts for a list of pre-defined modus-wc-_ classes.
Example: class="modus-wc-alert-success", class="modus-wc-btn-lg", class="modus-wc-text-info".
If a suitable modus-wc-_ class exists: Use it. These are designed to be theme-aware.
If not available: Construct the component's style using a combination of custom CSS (leveraging Modus CSS variables) and Tailwind utilities for structure and minor adjustments.
When applying or changing themes:

Mechanism: Themes are switched by setting the data-theme attribute on the <html> element (e.g., document.documentElement.setAttribute('data-theme', 'modus-modern-dark');).
Available themes: modus-modern-light, modus-modern-dark, modus-classic-light, modus-classic-dark.
Impact: Changing the data-theme will apply the corresponding block of CSS variable overrides from Styles/global.css, thus changing the appearance of elements styled with these variables.
Understanding Light/Dark Mode behavior:

The system defaults to respecting OS light/dark preferences for variables defined with light-dark() in Styles/variables.css because of color-scheme: light dark; on :root.
When a specific data-theme is applied, the color-scheme set by that theme in Styles/global.css (e.g., color-scheme: dark; for modus-modern-dark) takes control. Any light-dark() variables not explicitly overridden by the theme will resolve based on this theme-defined scheme.
Hierarchy & Precedence (Simplified):

Theme Overrides in Styles/global.css (via data-theme): These are the most specific for themed appearances as they directly override the CSS variables.
Default CSS Variables in Styles/variables.css: These are the base values. Many use light-dark() for automatic light/dark mode adaptation if not overridden by an active theme.
Tailwind Utilities & modus-wc-_ classes: Applied directly in HTML. The modus-wc-_ classes are expected to use the aforementioned CSS variables.
Custom Component CSS: Should be written to utilize the Modus CSS variables for theming consistency.
If asked to create a new themed UI element:

Define its structure with HTML.
Apply Tailwind utilities for layout and generic styling.
For all theme-sensitive properties (colors, fonts, spacing, borders related to theme), use the appropriate --modus-wc-\* CSS variables in its stylesheet or inline styles (less preferred for components).
Test its appearance by switching the data-theme attribute on the <html> element to ensure it adapts correctly to different themes (e.g., modus-modern-light, modus-modern-dark).
