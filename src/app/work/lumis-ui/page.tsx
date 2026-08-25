import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Icon,
  ThemeToggle,
  Typography,
} from "@/design-system";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Lumis UI Case Study | Elena Tsolakou",
  description:
    "How Elena Tsolakou designed and engineered Lumis UI: a token-driven, accessible React design system documented in Storybook.",
};

const facts = [
  ["Role", "Design system architecture and UI engineering"],
  ["Scope", "Foundations, components, themes, docs, and tests"],
  ["Stack", "React 19, TypeScript, Storybook, and Vitest"],
  ["Current system", "23 components across atoms, molecules, organisms, and layout"],
];

const layers = [
  ["01", "Foundations", "Semantic color, typography, spacing, shape, elevation, and motion tokens create a shared visual language."],
  ["02", "Components", "Typed React primitives are organized from atoms to organisms and designed to compose without one-off markup."],
  ["03", "Documentation", "Storybook keeps API guidance, states, examples, and accessibility behavior close to each component."],
  ["04", "Quality", "Unit tests and browser-level Storybook tests protect component behavior as the system evolves."],
];

const decisions = [
  ["Tokens before screens", "Visual decisions live in reusable foundations instead of being repeated inside individual components."],
  ["Accessibility in the API", "Keyboard behavior, semantic elements, focus states, and disabled states are treated as component responsibilities."],
  ["Documentation as part of delivery", "A component is not considered complete without examples and tests that explain how it should be used."],
];

const Arrow = ({ direction = "right" }: { direction?: "left" | "right" | "external" }) => (
  <Icon size="sm">{direction === "left" ? "←" : direction === "external" ? "↗" : "→"}</Icon>
);

export default function LumisUiCaseStudy() {
  return (
    <main className={styles.page}>
      <header className={styles.headerShell}>
        <Container maxWidth="xl" padding="lg">
          <Grid direction="row" align="center" justify="between" className={styles.header}>
            <Link className={styles.brand} href="/" aria-label="Elena Tsolakou home">
              ET<span>.</span>
            </Link>
            <Grid direction="row" align="center" gap="md">
              <ThemeToggle />
              <Button href="/" variant="ghost" size="sm" leadingIcon={<Arrow direction="left" />}>
                Back to portfolio
              </Button>
            </Grid>
          </Grid>
        </Container>
      </header>

      <section className={styles.hero}>
        <Container maxWidth="xl" padding="lg">
          <Grid columns="minmax(0, 1.45fr) minmax(280px, .55fr)" gap="xl" className={styles.heroGrid}>
            <Grid gap="lg" align="start">
              <Badge size="sm">Case study · Lumis UI</Badge>
              <Typography variant="h1" className={styles.heroTitle}>
                Building a shared language between <span>design and engineering.</span>
              </Typography>
              <Typography className={styles.lead}>
                Lumis UI is a themeable React design system built to explore how accessible components, clear APIs, and practical documentation can help product teams create consistent interfaces.
              </Typography>
            </Grid>
            <Card padding="lg" className={styles.summaryCard}>
              <Grid gap="lg">
                <Typography variant="caption">PROJECT SUMMARY</Typography>
                <Divider />
                <Grid gap="md">
                  <Grid gap="xs"><Typography variant="caption">FOCUS</Typography><Typography variant="body2">Design systems · UI engineering</Typography></Grid>
                  <Grid gap="xs"><Typography variant="caption">STATUS</Typography><Badge variant="success" size="sm" dot>Active</Badge></Grid>
                  <Grid gap="xs"><Typography variant="caption">YEAR</Typography><Typography variant="body2">2026</Typography></Grid>
                </Grid>
                <Button href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer" variant="secondary" trailingIcon={<Arrow direction="external" />}>
                  View source
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Container>
      </section>

      <Divider />
      <section className={styles.factsSection} aria-label="Project facts">
        <Container maxWidth="xl" padding="lg">
          <Grid columns={4} gap="md" className={styles.factsGrid}>
            {facts.map(([label, value]) => (
              <Grid gap="sm" key={label} className={styles.fact}>
                <Typography variant="caption">{label}</Typography>
                <Typography variant="body2">{value}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Divider />

      <section className={styles.section}>
        <Container maxWidth="xl" padding="lg">
          <Grid columns="1fr 2fr" gap="xl" className={styles.contentGrid}>
            <Badge size="sm">01 / Context</Badge>
            <Grid gap="xl">
              <Grid gap="md">
                <Typography variant="h2" className={styles.sectionTitle}>The challenge</Typography>
                <Typography className={styles.bodyCopy}>
                  A component library can look consistent while still being difficult to adopt. The deeper challenge is connecting visual foundations, component behavior, documentation, and testing into one system that remains understandable as it grows.
                </Typography>
              </Grid>
              <Card padding="lg" className={styles.statementCard}>
                <Typography variant="h3" className={styles.statement}>
                  The goal was not to collect UI elements. It was to create a dependable workflow for making interface decisions once and reusing them with confidence.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.systemSection}`}>
        <Container maxWidth="xl" padding="lg">
          <Grid gap="xl">
            <Grid columns="1fr 2fr" gap="xl" className={styles.contentGrid}>
              <Badge size="sm">02 / System</Badge>
              <Grid gap="md">
                <Typography variant="h2" className={styles.sectionTitle}>One system, four connected layers.</Typography>
                <Typography className={styles.bodyCopy}>Each layer has a clear responsibility, making the architecture easier to understand, test, and extend.</Typography>
              </Grid>
            </Grid>
            <Grid columns={2} gap="md" className={styles.layerGrid}>
              {layers.map(([number, title, description]) => (
                <Card padding="lg" hoverable key={number}>
                  <Grid gap="lg">
                    <Grid direction="row" justify="between" align="center"><Badge size="sm">{number}</Badge><Arrow direction="external" /></Grid>
                    <Grid gap="sm"><Typography variant="h4">{title}</Typography><Typography variant="body2" className={styles.muted}>{description}</Typography></Grid>
                  </Grid>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.section}>
        <Container maxWidth="xl" padding="lg">
          <Grid columns="1fr 2fr" gap="xl" className={styles.contentGrid}>
            <Badge size="sm">03 / Decisions</Badge>
            <Grid gap="xl">
              <Typography variant="h2" className={styles.sectionTitle}>Principles expressed in code.</Typography>
              <Grid gap="none" className={styles.decisionList}>
                {decisions.map(([title, description], index) => (
                  <Grid columns="44px 1fr 1.5fr" gap="lg" className={styles.decision} key={title}>
                    <Typography variant="caption">0{index + 1}</Typography>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2" className={styles.muted}>{description}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.outcomeSection}`}>
        <Container maxWidth="xl" padding="lg">
          <Grid columns="1fr 2fr" gap="xl" className={styles.contentGrid}>
            <Badge size="sm">04 / Current outcome</Badge>
            <Grid gap="xl">
              <Typography variant="h2" className={styles.sectionTitle}>A working design system, not a static concept.</Typography>
              <Typography className={styles.bodyCopy}>
                The current system includes 23 reusable components, light and dark themes, token foundations, Storybook documentation, and automated component tests. The portfolio itself uses those same components, turning the case study into a live example of the system in use.
              </Typography>
              <Grid direction="row" gap="sm" wrap>
                <Button href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer" trailingIcon={<Arrow direction="external" />}>Explore the repository</Button>
                <Button href="mailto:el.tsolakou@gmail.com" variant="secondary" trailingIcon={<Arrow direction="external" />}>Discuss design systems</Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Divider />
      <footer>
        <Container maxWidth="xl" padding="lg">
          <Grid direction="row" align="center" justify="between" wrap className={styles.footer}>
            <Typography variant="caption">© 2026 Elena Tsolakou</Typography>
            <Button href="/" variant="ghost" size="sm" leadingIcon={<Arrow direction="left" />}>Back to portfolio</Button>
          </Grid>
        </Container>
      </footer>
    </main>
  );
}
