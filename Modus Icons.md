# Install

npm i @trimble-oss/modus-icons

## CDN

Include the icon fonts stylesheet—in your website <head> or via @import in CSS—from our CDN and get started in seconds. See icon font docs for examples.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.css">

@import url("https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.css");

## Usage

Modus Icons are SVG files, SVG sprites, and icon fonts, so you can include them into your HTML in a few ways depending on how your project is setup. For SVGs and SVG sprites we recommend using a width: 1em (and optionally height: 1em) for easy resizing via font-size.

### Icon font

Use in web applications, on buttons, and anywhere you need more than a few icons.
Icon fonts including every icon are also included for Modus Icons. Include the icon web fonts in your page via CSS, then reference the ligature names as needed in your HTML (e.g., <i class="modus-icons">lightbulb_on</i>).

Use font-size and color to change the icon appearance.

<i class="modus-icons">lightbulb_on</i>

<i class="modus-icons" style="font-size: 2rem; color: orange;">lightbulb_on</i>
<i class="modus-icons" style="font-size: 2rem">trimble-logo</i>

### CSS

Use when you don't want any dependency.
You can also use the SVG within your CSS (be sure to escape any characters, such as # to %23 when specifying hex color values). When no dimensions are specified via width and height on the <svg>, the icon will fill the available space.

The viewBox attribute is required if you wish to resize icons with background-size. Note that the xmlns attribute is required.

.modus-icons::before {
display: inline-block;
content: "";
vertical-align: -.125em;
background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' clip-rule='evenodd'/></svg>");
background-repeat: no-repeat;
background-size: 1rem 1rem;
}

### Styling

Color can be changed by setting a .text-\* class or custom CSS:

<svg class="text-danger" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  ...
</svg>

### Accessibility

For purely decorative icons, add aria-hidden="true". Otherwise, provide an appropriate text alternative. Depending on which method you’re using to add the icons, and where you’re using them (e.g. as standalone images, or as the only content of a button or similar control), there are various possible approaches. Here are a few examples:

<!-- alt="..." on <img> element -->

<img src="/assets/img/camera.svg" alt="Camera" ...>

<svg class="modus-icons" ... role="img" aria-label="Tools">
<use xlink:href="modus-icons.svg#tools"/>
</svg>

<!-- aria-label="..." on the control -->

<button ... aria-label="Mute">
<svg class="modus-icons" aria-hidden="true" ...>
...
</svg>
</button>

### Working with SVGs

SVGs are awesome to work with, but they do have some known quirks to work around. Given the numerous ways in which SVGs can be used, we haven’t included these attributes and workarounds in our code.

Known issues include:

When using SVGs with <img> elements, screen readers may not announce them as images, or skip the image completely. Include an additional role="img" on the <img> element to avoid any issues. See this article for details.

External SVG sprites may not function correctly in Internet Explorer. Use the svg4everybody polyfill as needed.
