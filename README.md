# Lumis UI

Elena Tsolakou's portfolio and design system, focused on accessible UI
engineering and scalable component architecture.

## Project structure

```text
src/
  app/                  Next.js portfolio
  design-system/        Components, tokens, themes, and Storybook docs
.storybook/             Storybook configuration
```

Everything now lives in one project. There are no workspaces or Turborepo
commands to manage.

## Get started

Install dependencies once:

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
npm run build            # Build the portfolio
npm run build-storybook  # Build Storybook
npm run test             # Run component unit tests
npm run test:stories     # Run Storybook browser tests
npm run lint             # Lint the project
npm run check-types      # Check TypeScript
```

Run every command from the repository root.
