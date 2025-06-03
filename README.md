# Modus Next.js Boilerplate

A Next.js boilerplate with Modus Web Components 2.0, Modus Icons, and theme support. This serves as a starting point for building modern web applications with the Modus Design System.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Modus Web Components 2.0** (React 19 compatible)
- ✅ **Modus Icons** with CDN integration
- ✅ **Theme System** with light/dark mode support
- ✅ **Modus Classic Theme** pre-configured
- ✅ **Tailwind CSS** integration
- ✅ **ESLint** for code quality
- ✅ **Responsive Design** ready

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone or download this boilerplate
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## What's Included

### Modus Web Components

This boilerplate includes the latest Modus Web Components React library with support for:

- Buttons with various styles and colors
- Cards for content organization
- Badges for status indicators
- Alerts for notifications
- Theme switcher for light/dark mode toggle

### Modus Icons

Modus Icons are loaded via CDN and ready to use:

```html
<i className="modus-icons">home</i>
<i className="modus-icons">settings</i>
<i className="modus-icons">person</i>
```

### Theme System

The boilerplate comes with:

- **Modus Classic Theme** as the default
- **Light and Dark modes** with automatic switching
- **Theme persistence** via localStorage
- **Theme provider** wrapping the entire application

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Modus integration
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Demo page showcasing components
├── components/
│   └── ThemeSwitcher.tsx    # Theme toggle component
└── providers/
    └── ThemeProvider.tsx    # Theme context provider
```

## Customization

### Adding New Themes

To add a new theme, refer to the [custom themes documentation](https://github.com/trimble-oss/modus-wc-2.0/blob/main/docs/custom-themes.md).

### Using Different Icon Sets

By default, this boilerplate uses the outlined icon set. To use filled or transportation icons, update the CDN links in `layout.tsx`:

```html
<!-- For filled icons -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-filled/fonts/modus-icons.css"
/>

<!-- For transportation icons -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-transportation/fonts/modus-icons.css"
/>
```

### Offline Icon Usage

For offline capability, install the icons package locally:

```bash
npm install @trimble-oss/modus-icons
```

Then copy the font files to your `public` directory and update the links accordingly.

## Available Components

This boilerplate demonstrates several Modus Web Components:

- `ModusWcButton` - Buttons with various styles
- `ModusWcCard` - Content containers
- `ModusWcBadge` - Status indicators
- `ModusWcAlert` - Notification messages
- `ModusWcThemeSwitcher` - Theme toggle control

For a complete list of available components, visit the [Modus Web Components documentation](https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/documentation-getting-started--docs).

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding Components

When adding new Modus components, import them from the React library:

```tsx
import {
  ModusWcTextInput,
  ModusWcSelect,
} from "@trimble-oss/moduswebcomponents-react";
```

## Deployment

This boilerplate can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker**

## Resources

- [Modus Web Components Documentation](https://github.com/trimble-oss/modus-web-components)
- [Modus Icons](https://modus-icons.trimble.com)
- [Modus Design System](https://modus.trimble.com)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is licensed under the MIT License.

## Support

For issues related to:

- **Modus Web Components**: [GitHub Issues](https://github.com/trimble-oss/modus-web-components/issues)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **This boilerplate**: Create an issue in this repository
