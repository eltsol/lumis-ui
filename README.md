# Lumis UI

Elena Tsolakou's portfolio and component system, focused on design systems and
UI engineering.

## What is in this repository?

```text
apps/portfolio/     Portfolio website
packages/ui/        Components, tests, and Storybook documentation
packages/tokens/    Design tokens and theme definitions
```

The remaining configuration packages are shared by the portfolio and component
system. Turborepo currently coordinates their development and build commands.

## Get started

Install dependencies once from the repository root:

```bash
npm install
```

Start the portfolio:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Start Storybook in a second terminal:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006).

## Useful commands

```bash
npm run dev          # Start the portfolio
npm run build        # Build the portfolio
npm run test         # Run component unit tests
npm run lint         # Lint all workspaces
npm run check-types  # Check TypeScript across the repository
```

Run all commands from the repository root. You do not need a global Turborepo
installation.
