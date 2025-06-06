## LLM Guidance: What to Use and When

Refernace documentation in https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/documentation-getting-started--docs

When assisting with coding or styling tasks using this Modus system:

For basic styling (colors, fonts, spacing, borders, radii):

Primary Choice: Use standard Tailwind CSS utility classes.
Example: class="flex items-center justify-between p-4 md:p-6"
Context: Tailwind is integrated for its utility-first approach to building layouts quickly.
For common UI components/patterns (alerts, buttons, badges, specific text styles):

Mechanism: Themes are switched by setting the data-theme attribute on the < html > element (e.g., document.documentElement.setAttribute('data-theme', 'modus-modern-dark');).
Available themes: modus-modern-light, modus-modern-dark, modus-classic-light, modus-classic-dark.
Impact: Changing the data-theme will apply the corresponding block of CSS variable overrides from Styles/global.css, thus changing the appearance of elements styled with these variables.
Understanding Light/Dark Mode behavior:

The system defaults to respecting OS light/dark preferences for variables defined with light-dark() in Styles/variables.css because of color-scheme: light dark; on :root.
When a specific data-theme is applied, the color-scheme set by that theme in Styles/global.css (e.g., color-scheme: dark; for modus-modern-dark) takes control. Any light-dark() variables not explicitly overridden by the theme will resolve based on this theme-defined scheme.

If asked to create a new themed UI element:

Define its structure with HTML.
Apply Tailwind utilities for layout and generic styling.
Test its appearance by switching the data-theme attribute on the < html > element to ensure it adapts correctly to different themes (e.g., modus-modern-light, modus-modern-dark).
