# Modus Next.js Boilerplate

A Next.js 15 boilerplate strictly conforming to the Modus Design System, using Modus Web Components 2.0, Modus Icons, and a robust theme system. This serves as a starting point for building modern, consistent web applications with enforced design and development standards.

---

## Table of Contents

- [Modus Next.js Boilerplate](#modus-nextjs-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Quick Start](#quick-start)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Development Principles](#development-principles)
  - [Project Structure](#project-structure)
  - [Modus Web Components & Icons](#modus-web-components--icons)
  - [Theming](#theming)
  - [Controlled Inputs](#controlled-inputs)
  - [Development & Quality](#development--quality)
  - [Resources](#resources)

---

## Key Features

- **Next.js 15 & App Router:** Modern React framework for server-side rendering and static site generation.
- **TypeScript:** Strongly typed language for enhanced code quality and maintainability.
- **Modus Web Components 2.0:** Utilizes the latest `@trimble-oss/moduswebcomponents-react` for a consistent UI based on the Modus Design System.
- **Modus Icons:** Exclusively uses Modus Icons, loaded via CDN, for a unified visual language.
- **Strict Styling Hierarchy:**
  1. Modus Web Component properties (primary).
  2. Tailwind CSS for layout and non-tokenized styling.
- **Dynamic Theming:** Supports `modus-classic-light`, `modus-classic-dark`, `modus-modern-light`, and `modus-modern-dark` themes, switchable and persisted via localStorage.
- **Controlled Inputs:** Enforces the controlled input pattern for all form elements.
- **Responsive Design:** Core principle for all components and layouts.
- **ESLint Integrated:** For maintaining high code quality standards.

---

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

---

## Development Principles

This project is architected and maintained with the following strict principles:

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI Library:** Modus Web Components 2.0 (React 19 compatible, `@trimble-oss/moduswebcomponents-react`)
- **Icons:** Modus Icons (CDN, referenced with `modus-icons` CSS class; _only_ Modus Icons permitted)
- **Styling:**
  1. **Modus Web Component Properties:** Always use component props (e.g., `color`, `variant`, `size`, `disabled`) for styling Modus components. These props are mapped to Modus CSS variables for theme consistency. _Do not override with custom CSS unless absolutely necessary._
  2. **Tailwind CSS Utility Classes:** Use Tailwind only for layout, spacing, positioning, and responsive adjustments around components, or for properties not governed by Modus design tokens.
  3. **Theming:** Supports `modus-classic-light`, `modus-classic-dark`, `modus-modern-light`, and `modus-modern-dark`. Switch themes by setting the `data-theme` attribute on `<html>`. Theme is persisted via localStorage.
  4. **Controlled Input Pattern:** All form elements must use the controlled input pattern in React for robust state management.
- **Responsiveness:** All layouts and components are built with responsive design as a core principle.
- **Code Quality:** Enforced via ESLint.

---

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

---

## Modus Web Components & Icons

- **Component Usage:**
  - Import components from `@trimble-oss/moduswebcomponents-react`.
  - Always use component props for styling (see Senior Frontend Developer Principles).
  - For a complete list of available components and their usage, refer to the local documentation in `Docs Modus/info-modus-components/`.
- **Icons:**

  - Use only Modus Icons, loaded via CDN:

    ```html
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
    />
    ```

  - Reference icons with:

    ```html
    <i className="modus-icons">icon_name</i>
    ```

  - See the [Modus Icons list](https://modus-icons.trimble.com) for available names.

---

## Theming

- Four supported themes: `modus-classic-light`, `modus-classic-dark`, `modus-modern-light`, `modus-modern-dark`.
- Switch themes by setting the `data-theme` attribute on `<html>` (handled by `ThemeProvider`).
- Theme persists via localStorage.

---

## Controlled Inputs

- All form elements (e.g., `ModusWcTextInput`, `ModusWcSelect`, etc.) must use the controlled input pattern in React.
- See examples in the local documentation: `Docs Modus/info-modus-components/`.

---

## Development & Quality

- **Scripts:**
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run start` - Start production server
  - `npm run lint` - Run ESLint
- **Code Quality:**
  - ESLint is configured and enforced.

---

## Resources

- [Local Modus Web Components Docs](./Docs%20Modus/info-modus-components/)
- [Modus Web Components Documentation (Online)](https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/documentation-getting-started--docs)
- [Modus Icons](https://modus-icons.trimble.com)
- [Modus Design System](https://modus.trimble.com)
- [Next.js Documentation](https://nextjs.org/docs)

---

## License

This project is licensed under the MIT License.

## Support

For issues related to:

- **Modus Web Components:** [GitHub Issues](https://github.com/trimble-oss/modus-web-components/issues)
- **Next.js:** [Next.js Documentation](https://nextjs.org/docs)
- **This boilerplate:** Create an issue in this repository
