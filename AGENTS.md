# Agent Instructions & Project Styling Guidelines

Welcome! This codebase has been migrated from **Tailwind CSS** to a styling system powered by **Sass (SCSS) Modules**, **Vanilla Framework**, and the official **@canonical/react-components** suite. 

When working on this repository, please strictly adhere to the guidelines, architectures, and conventions detailed below.

---

## 1. Technology Stack
- **Framework**: Next.js 15 + React 19 + TypeScript.
- **Styling**: Vanilla CSS/SCSS (no Tailwind CSS is allowed).
- **Design System**: [Vanilla Framework](https://vanillaframework.io) (compiled via `@include vanilla;` globally).
- **Component Suite**: `@canonical/react-components` (React wrappers for Vanilla UI elements).

---

## 2. Style Directory Structure
All global style configurations, tokens, and variables are centered in `src/styles/`:
- `globals.scss`: The main entry-point stylesheet importing external systems and core partials in compile order.
- `_variables.scss`: Stores SCSS theme token mappings to CSS variables. Holds color coordinates, layout breakpoints, and theme properties. **Must not emit any CSS selectors directly.**
- `_mixins.scss`: Houses custom mixins (e.g., `@mixin media-sm`, `@mixin media-md`) matching Tailwind responsive breakpoints.
- `_typography.scss`: Custom typographic overrides.
- `_layout.scss`: Custom layout structures (like `.container-custom`).
- `_utilities.scss`: Base utility wrappers.
- `_animations.scss`: Custom keyframes.

---

## 3. SCSS & CSS Modules Coding Guidelines

### Use the Sass Module System (`@use` / `@forward`)
- Do **not** use the deprecated `@import` rule for local modules in page component sheets.
- Use `@use 'path/to/module' as *;` to load variables or mixins globally into a file's local scope without prefixing:
  ```scss
  @use '@/styles/variables' as *;
  @use '@/styles/mixins' as *;

  .customCard {
    background-color: $card;
    
    @include media-md {
      padding: 2rem;
    }
  }
  ```
- **CSS Module Purity**: Do not declare global selectors (like `:root` or class names without wrapping in `:global()`) inside scoped CSS module stylesheets (`*.module.scss`). Group variables in `globals.scss` or `_variables.scss` (without raw CSS selectors).

---

## 4. Next.js 15 & React 19 Components Rules

### Client Components and Context Hooks
- `@canonical/react-components` uses React client hooks (e.g. `useId`, `createContext`). Therefore, any page or component importing these elements **must** include the `"use client";` directive at the top of the file.

### Asynchronous Route Parameters
- In Next.js 15, page-level parameters (`params`) are passed as a Promise. Since these pages are Client Components, unwrap the promise synchronously using `React.use()`:
  ```tsx
  "use client";

  import React from "react";
  
  export default function EventPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = React.use(params);
    // ...
  }
  ```

### Link & Button Router Navigation
- Use the `@canonical/react-components` `Button` with the `element` prop for client-side routing, passing Next.js's `<Link>` component:
  ```tsx
  import Link from "next/link";
  import { Button } from "@canonical/react-components";

  <Button element={Link} href="/events" appearance="brand">
    View Events
  </Button>
  ```

---

## 5. Development & Verification Commands
If you make changes to style sheets, verify the build process compiles successfully:
- **Typecheck**: `pnpm typecheck`
- **Build**: `pnpm build`
- **Webpack Dev Server**: `pnpm dev` (Note: We use standard Next.js Webpack to support Windows path-resolution of internal SCSS files inside `node_modules`).
