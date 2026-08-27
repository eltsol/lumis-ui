# Lumis UI

An accessible, themeable React design system built by Elena Tsolakou to
explore the engineering decisions behind scalable product interfaces.

[View the portfolio](https://elena-tsolakou-lumis-ui.el-tsolakou.chatgpt.site) ·
[Explore Storybook](https://elena-tsolakou-lumis-ui.el-tsolakou.chatgpt.site/storybook/) ·
[Browse the source](https://github.com/eltsol/lumis-ui)

## Why I built it

As products and teams grow, interface inconsistencies rarely come from a lack
of components. They come from unclear decisions: which values are semantic,
how components should be composed, what accessibility guarantees their APIs
provide, and how teams can change the system without breaking its consumers.

Lumis UI is a focused exploration of those decisions. It brings foundations,
components, documentation, testing, and a portfolio into one project so the
system can be evaluated as an engineering product rather than a collection of
isolated UI examples.

## What the system demonstrates

- Semantic tokens for color, typography, spacing, shape, elevation, and motion.
- Light and dark themes generated from a shared typed token model.
- Reusable React components with predictable TypeScript APIs.
- Accessibility considered as part of component behavior and documentation.
- Storybook stories for variants, states, interaction, and usage guidance.
- Unit and interaction tests using Vitest, Testing Library, and Playwright.
- A responsive Next.js portfolio built with the design system itself.

## Engineering decisions

### Semantic tokens over raw values

Components consume purpose-based values such as surface, outline, and primary
rather than palette values directly. This separates design intent from a
specific theme and makes visual changes less likely to leak into component
implementation.

### Accessible behavior belongs in the component API

Keyboard behavior, focus management, semantic markup, and accessible naming
are treated as component responsibilities rather than an application-level
cleanup pass. Stories and tests document the supported states and interactions.

### Composition over rigid abstractions

APIs provide strong defaults while preserving native React and HTML behavior
where possible. The goal is to make the expected path straightforward without
preventing legitimate product-specific composition.

### One source project for the portfolio and system

The portfolio imports the same components and tokens documented in Storybook.
This keeps the public demonstration honest: the design system is used to build
a real responsive interface, not maintained as a disconnected gallery.

## Architecture

```text
src/
  app/                  Next.js portfolio built with Lumis UI
  design-system/
    components/         Atoms, molecules, organisms, and layout primitives
    docs/               Storybook introduction and foundation guidance
    hooks/              Shared design-system hooks
    providers/          Theme context and runtime CSS-variable application
    tokens/             Typed foundations, themes, and CSS-variable mapping
.storybook/             Documentation, accessibility, and test configuration
scripts/                Hosting preparation
```

The token layer produces typed light and dark themes. `ThemeProvider` maps the
active theme to CSS custom properties, allowing components to consume semantic
values without depending on a particular palette. Storybook acts as the
component workbench and documentation surface, while the Next.js application
demonstrates the system in context.

## Accessibility and quality

Accessibility is part of the definition of done for a component. Depending on
the interaction, implementation and tests cover semantic HTML, keyboard input,
focus behavior, accessible names, disabled states, and reduced-motion support.
Storybook's accessibility tooling provides an additional feedback layer during
component development.

The current repository includes component-level unit tests and Storybook
stories across the library. The project is checked with TypeScript and ESLint,
and both the portfolio and Storybook are built as production artifacts before
deployment.

## Current scope and next steps

Lumis UI is a portfolio project and active design-system exploration, not a
published production package. Its current focus is component architecture,
tokens, theming, accessibility, documentation, and testing.

The next production-oriented steps would be to introduce package versioning and
release automation, define a formal contribution model, add visual regression
coverage, measure adoption and system health, and expand theming toward
multi-brand use cases.

## Run locally

Requirements: Node.js 18 or later and npm.

```bash
npm install
npm run dev
```

The portfolio runs at [http://localhost:3000](http://localhost:3000).

Run Storybook in a second terminal:

```bash
npm run storybook
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

## Quality commands

```bash
npm run check-types      # Generate Next.js route types and check TypeScript
npm run lint             # Run ESLint with zero warnings allowed
npm run test             # Run component unit tests
npm run test:stories     # Run Storybook browser tests
npm run build            # Build the portfolio
npm run build-storybook  # Build Storybook
npm run build:hosting    # Build the deployable portfolio and Storybook bundle
```

## Tech stack

React 19 · TypeScript · Next.js · Storybook · Sass · Vitest · Testing Library ·
Playwright

## About

Lumis UI was designed and built by [Elena Tsolakou](https://www.linkedin.com/in/elena-tsolakou),
a Senior UI Engineer focused on accessible interfaces, Design Systems, and the
connection between design and frontend engineering.
