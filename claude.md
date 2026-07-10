# Instructions for Claude

You are assisting a developer on this Next.js 15 + React 19 + TypeScript repository. 
The styling architecture has been fully migrated from Tailwind CSS to Sass (SCSS) Modules, Vanilla Framework, and `@canonical/react-components`.

Please adhere to the following coding rules:

## 1. Style Architecture Rules
- **No Tailwind CSS**: Do not use Tailwind classes.
- **SCSS Module Files**: Place local styles in `*.module.scss` files.
- **Sass `@use` Imports**:
  - Always use `@use` instead of `@import` inside `*.module.scss` files.
  - Group variable and mixin imports globally using `as *`:
    ```scss
    @use '@/styles/variables' as *;
    @use '@/styles/mixins' as *;
    ```
- **Global Variables**: Declare CSS Custom Properties globally inside `src/styles/globals.scss`. Scoped partials (like `_variables.scss`) must contain *only* Sass variables and no CSS selectors.

## 2. Next.js 15 & React 19 Integration
- **RSC & Client Components**:
  - Components from `@canonical/react-components` (e.g., `Button`, `Card`, `Navigation`) use client-side hooks.
  - Any page or component importing them **must** start with `"use client";`.
- **Dynamic Route Params**:
  - In Next.js 15 client-side components, `params` is a Promise.
  - Synchronously unwrap dynamic parameters using `React.use()`:
    ```tsx
    const { id } = React.use(params);
    ```
- **Next.js Link Integration**:
  - Use the Canonical `Button` with the `element` prop for router navigation:
    ```tsx
    <Button element={Link} href="/about">About Us</Button>
    ```

## 3. Style Path Configurations
- All style configs are located in `src/styles/`:
  - `globals.scss`: Main entry point (imported in `src/app/layout.tsx`).
  - `_variables.scss`: Global Sass variable theme mapping.
  - `_mixins.scss`: Breakpoint mixins (`media-sm`, `media-md`, etc.).
