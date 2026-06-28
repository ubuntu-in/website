# AGENTS.md

## Purpose

This file defines the development standards and operating rules for AI agents contributing to this repository. These instructions apply unless explicitly overridden by the user. Always follow these instructions before making changes.

---

# Project Overview

This repository contains the official website for **UbuCon 2026**.

Technology Stack:

* React 19
* TypeScript
* Vite
* PNPM
* Canonical Vanilla Framework
* SCSS

The objective is to build a fast, accessible, maintainable, Ubuntu-inspired website that follows Canonical's design language.

---

# Instruction Priority

When multiple instructions exist, follow this priority:

1. User instructions
2. Repository-specific instructions
3. This AGENTS.md
4. Tool or editor defaults

Never ignore higher-priority instructions.

---

# General Principles

* Understand existing code before modifying it.
* Prefer improving existing code instead of replacing it.
* Make the smallest change necessary.
* Preserve existing behavior unless explicitly instructed otherwise.
* Keep commits logically scoped.
* Never introduce unnecessary complexity.

---

# Technology Rules

Use only the approved technologies.

Preferred stack:

* React
* TypeScript
* Vanilla Framework
* SCSS

Do not introduce additional UI frameworks without explicit approval.

Specifically avoid introducing:

* Tailwind CSS
* Bootstrap
* Material UI
* Chakra UI
* Bulma
* Ant Design

unless explicitly requested.

---

# Vanilla Framework Rules

Canonical Vanilla Framework is the primary design system.

Before creating any UI:

1. Check whether Vanilla Framework already provides an appropriate component.
2. Use official Vanilla components whenever possible.
3. Use Vanilla utility classes before writing custom SCSS.
4. Write custom SCSS only when no Vanilla solution exists.

Do not recreate components that already exist within Vanilla Framework.

---

# Styling Rules

Priority order:

1. Vanilla component classes
2. Vanilla utility classes
3. Component SCSS
4. Global SCSS

Avoid:

* Inline styles
* Large global CSS files
* Duplicated styling
* Magic values

---

# Theme

The website is permanently Light Theme.

Do not:

* Add dark mode
* Add theme toggles
* Add color mode logic

unless explicitly requested.

---

# React Rules

Use:

* Functional components
* Hooks
* TypeScript
* Named interfaces where appropriate

Avoid:

* Class components
* Unnecessary state
* Unnecessary effects
* Duplicate logic

---

# Component Design

Components should:

* Have one responsibility.
* Be reusable.
* Accept props.
* Avoid duplicated markup.
* Remain easy to understand.

Prefer composition over inheritance.

---

# TypeScript

Never remove types to satisfy the compiler.

Prefer:

* Explicit interfaces
* Utility types
* Strong typing

Avoid:

* any
* ts-ignore
* unsafe casting

unless absolutely necessary.

---

# Accessibility

Accessibility is mandatory.

Maintain:

* Semantic HTML
* Keyboard navigation
* Focus states
* Proper headings
* Labels
* ARIA attributes where required

Never reduce accessibility for aesthetics.

---

# Responsiveness

Every component must function correctly on:

* Mobile
* Tablet
* Desktop

Never assume desktop-only layouts.

---

# Performance

Prefer:

* Smaller bundles
* Lazy loading when appropriate
* Memoization only when beneficial
* Efficient rendering

Avoid premature optimization.

---

# Code Organization

Maintain the existing project structure.

When adding new features:

* Reuse existing folders.
* Keep components modular.
* Keep utilities reusable.
* Avoid circular dependencies.

---

# Refactoring

When refactoring:

* Preserve functionality.
* Preserve API compatibility.
* Preserve component behavior.
* Avoid unrelated formatting changes.

Refactor only what is necessary.

---

# Dependencies

Before adding a dependency:

1. Verify the feature cannot be implemented with existing project dependencies.
2. Verify React or Vanilla Framework does not already provide the solution.
3. Minimize dependency count.

Never introduce a dependency for trivial functionality.

---

# Code Generation

Generated code should:

* Compile successfully.
* Pass TypeScript checks.
* Follow project conventions.
* Be production ready.
* Include meaningful names.
* Avoid placeholder implementations.

---

# Pull Requests

When producing changes:

* Keep diffs focused.
* Avoid unrelated modifications.
* Preserve formatting.
* Do not rename files without reason.

---

# What To Avoid

Never:

* Rewrite the project architecture.
* Replace the styling framework.
* Introduce dark mode.
* Add unnecessary libraries.
* Remove accessibility.
* Break existing APIs.
* Duplicate existing components.
* Replace working code without justification.

---

# Preferred Workflow

For every requested task:

1. Read relevant files.
2. Understand the existing implementation.
3. Plan the smallest safe modification.
4. Implement.
5. Verify consistency.
6. Preserve project conventions.
7. Minimize unnecessary code changes.

---

# Expected Output

Unless requested otherwise:

* Produce clean production-quality code.
* Follow existing naming conventions.
* Preserve existing architecture.
* Minimize custom SCSS.
* Maximize Vanilla Framework usage.
* Keep implementations maintainable.
* Explain non-obvious decisions briefly when appropriate.

---

# Repository Goal

Every contribution should move the project toward being a maintainable, accessible, performant, and Ubuntu-native website that reflects Canonical's design philosophy while preserving a clean React architecture.
