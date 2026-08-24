"use client";

import {
  Badge,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Icon,
  Stack,
  ThemeToggle,
  Typography,
} from "@repo/ui";
import styles from "./page.module.css";

const principles = [
  ["01", "Accessible by default", "Keyboard behavior, focus states, semantic markup, and inclusive interaction patterns are part of every component API."],
  ["02", "Built to scale", "Composable React primitives and predictable TypeScript APIs help teams move quickly without sacrificing consistency."],
  ["03", "One shared language", "Design tokens connect visual decisions to code, keeping color, spacing, typography, and motion aligned."],
];

const systemLayers = [
  ["01", "Foundations", "Color, type, spacing, shape, elevation, and motion"],
  ["02", "Components", "24 reusable React components with typed APIs"],
  ["03", "Patterns", "Composition guidance for consistent product experiences"],
  ["04", "Tooling", "Storybook, Vitest, accessibility checks, and documentation"],
];

const Arrow = ({ direction = "right" }: { direction?: "right" | "down" | "external" }) => (
  <Icon size="sm">{direction === "down" ? "↓" : direction === "external" ? "↗" : "→"}</Icon>
);

export default function Page() {
  return (
    <main className={styles.page}>
      <header>
        <Container maxWidth="xl" padding="lg">
          <Stack direction="row" align="center" justify="between" className={styles.header}>
            <a className={styles.brand} href="#top" aria-label="Elena Tsolakou home">ET<span>.</span></a>
            <nav className={styles.nav} aria-label="Main navigation">
              <Stack direction="row" gap="xl">
                <a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a>
              </Stack>
            </nav>
            <Stack direction="row" align="center" gap="md">
              <ThemeToggle />
              <Button href="mailto:el.tsolakou@gmail.com" variant="ghost" trailingIcon={<Arrow direction="external" />}>Let&apos;s talk</Button>
            </Stack>
          </Stack>
        </Container>
      </header>

      <section id="top" className={styles.heroSection}>
        <Container maxWidth="xl" padding="lg">
          <Grid columns="minmax(0, 1.02fr) minmax(430px, .98fr)" gap="xl" className={styles.heroGrid}>
            <Stack gap="lg" justify="center" className={styles.heroCopy}>
              <Badge size="sm" className={styles.eyebrow}>Senior UI Engineer · Design Systems</Badge>
              <Typography variant="h1" className={styles.heroTitle}>Building consistent <span>interfaces at scale.</span></Typography>
              <Typography className={styles.heroText}>I&apos;m Elena Tsolakou. I build accessible design systems that connect design and engineering, helping teams create cohesive digital products with confidence.</Typography>
              <Stack direction="row" gap="sm" wrap className={styles.heroActions}>
                <Button href="#work" size="lg" trailingIcon={<Arrow direction="down" />}>Explore Lumis UI</Button>
                <Button href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer" variant="secondary" size="lg" trailingIcon={<Arrow direction="external" />}>View source</Button>
              </Stack>
            </Stack>

            <div className={styles.heroVisual} aria-label="Lumis UI component preview">
              <div className={styles.visualGlow} />
              <Card padding="none" className={styles.previewWindow}>
                <Stack direction="row" align="center" justify="between" className={styles.windowBar}>
                  <Stack direction="row" gap="xs" aria-hidden="true" className={styles.windowDots}><span /><span /><span /></Stack>
                  <Typography variant="caption">lumis-ui / components</Typography>
                  <Badge variant="success" size="sm" dot>Live</Badge>
                </Stack>
                <Stack gap="lg" className={styles.previewContent}>
                  <Stack direction="row" align="start" justify="between">
                    <Stack gap="xs"><Typography variant="caption">Team overview</Typography><Typography variant="h4">Design system health</Typography></Stack>
                    <Chip label="Stable" variant="success" size="sm" />
                  </Stack>
                  <Grid columns={2} gap="sm">
                    <Card padding="md" className={styles.previewCard}><Stack gap="xs"><Typography variant="caption">Components</Typography><Typography variant="h3">24</Typography><Typography variant="caption">Atoms to organisms</Typography></Stack></Card>
                    <Card padding="md" className={styles.previewCard}><Stack gap="xs"><Typography variant="caption">Coverage</Typography><Typography variant="h3">100%</Typography><Typography variant="caption">Stories and tests</Typography></Stack></Card>
                  </Grid>
                  <Card padding="md" className={styles.activityCard}>
                    <Stack gap="lg">
                      <Stack direction="row" justify="between" align="start"><Stack gap="xs"><Typography variant="caption">System model</Typography><Typography variant="body2">Consistent by design</Typography></Stack><Badge variant="success" size="sm">Token-driven</Badge></Stack>
                      <div className={styles.chart} aria-hidden="true">{[35, 48, 42, 61, 57, 72, 84, 92].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div>
                    </Stack>
                  </Card>
                </Stack>
              </Card>
              <Chip label="--lm-color-primary" variant="primary" size="sm" className={styles.tokenTag} />
            </div>
          </Grid>
        </Container>
      </section>

      <Divider />
      <Container maxWidth="full" padding="none">
        <Grid columns={4} gap="none" className={styles.metrics}>
          {[["24", "Components"], ["2", "Color themes"], ["24", "Story files"], ["6", "Token foundations"]].map(([value, label]) => <Stack key={label} gap="xs" align="center" justify="center"><Typography variant="h2">{value}</Typography><Typography variant="caption">{label}</Typography></Stack>)}
        </Grid>
      </Container>
      <Divider />

      <section id="work" className={styles.section}>
        <Container maxWidth="xl" padding="lg">
          <Stack gap="xl">
            <Grid columns="1fr 3fr" gap="xl" className={styles.sectionIntro}>
              <Badge size="sm">01 / Selected work</Badge>
              <Grid columns="1.5fr 1fr" gap="xl"><Typography variant="h2" className={styles.sectionTitle}>A system, not just a component library.</Typography><Typography>Lumis UI explores what it takes to create a dependable shared language between design and development.</Typography></Grid>
            </Grid>
            <Card padding="none" className={styles.projectCard}>
              <Stack gap="xl" className={styles.projectContent}>
                <Stack direction="row" justify="between" wrap><Typography variant="caption">Featured project · 2026</Typography><Typography variant="caption">React 19 · TypeScript · Storybook</Typography></Stack>
                <Divider />
                <Grid columns="1.2fr 1fr" gap="xl" className={styles.projectGrid}>
                  <Stack gap="sm"><Badge size="sm">Lumis UI</Badge><Typography variant="h2" className={styles.projectTitle}>Foundations for cohesive product experiences.</Typography></Stack>
                  <Stack gap="lg" align="start"><Typography>A themeable React design system covering foundations, accessible components, documentation, and testing. Every layer is designed to make consistency easier to achieve and maintain.</Typography><Button href="#architecture" variant="ghost" trailingIcon={<Arrow />}>Explore the architecture</Button></Stack>
                </Grid>
              </Stack>
              <div className={styles.componentCanvas}>
                <Stack align="center" gap="xl" className={styles.componentSidebar}><Badge className={styles.canvasLogo}>L</Badge><Badge dotOnly /><Badge dotOnly variant="secondary" /><Badge dotOnly variant="secondary" /><Badge dotOnly variant="secondary" /></Stack>
                <Grid columns="1fr 220px" gap="none" className={styles.componentMain}>
                  <Stack direction="row" align="center" justify="between" className={styles.canvasHeader}><Stack gap="xs"><Typography variant="caption">Components</Typography><Typography variant="h5">Button</Typography></Stack><Chip label="v0.1" variant="primary" size="sm" /></Stack>
                  <Stack direction="row" align="center" justify="center" gap="sm" wrap className={styles.componentStage}><Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost action</Button></Stack>
                  <Stack gap="md" className={styles.componentProps}>{[["variant", "primary"], ["size", "medium"], ["state", "enabled"]].map(([name, value]) => <Stack direction="row" justify="between" key={name}><Typography variant="caption">{name}</Typography><code>{value}</code></Stack>)}</Stack>
                </Grid>
              </div>
            </Card>
          </Stack>
        </Container>
      </section>

      <section id="approach" className={`${styles.section} ${styles.approachSection}`}>
        <Container maxWidth="xl" padding="lg"><Stack gap="xl">
          <Grid columns="1fr 3fr" gap="xl" className={styles.sectionIntro}><Badge size="sm">02 / Approach</Badge><Grid columns="1.5fr 1fr" gap="xl"><Typography variant="h2" className={styles.sectionTitle}>Engineering the invisible details.</Typography><Typography>Strong design systems turn thoughtful constraints into a better experience for users and product teams.</Typography></Grid></Grid>
          <Grid columns={3} gap="md" className={styles.principleGrid}>{principles.map(([number, title, description]) => <Card padding="lg" hoverable key={number}><Stack gap="lg"><Badge size="sm">{number}</Badge><Stack gap="sm"><Typography variant="h4">{title}</Typography><Typography variant="body2">{description}</Typography></Stack></Stack></Card>)}</Grid>
        </Stack></Container>
      </section>

      <section id="architecture" className={`${styles.section} ${styles.architectureSection}`}>
        <Container maxWidth="xl" padding="lg"><Grid columns="1fr 1.15fr" gap="xl" className={styles.architectureGrid}>
          <Stack gap="lg" align="start"><Badge size="sm">03 / Architecture</Badge><Typography variant="h2" className={styles.sectionTitle}>From foundations to product patterns.</Typography><Typography>Lumis UI separates design decisions from implementation, creating a system that can evolve without losing its visual language.</Typography></Stack>
          <Stack gap="sm">{systemLayers.map(([number, title, description]) => <Card padding="md" hoverable className={styles.layerCard} key={number}><Grid columns="42px 130px 1fr 20px" gap="md"><Badge size="sm">{number}</Badge><Typography variant="h6">{title}</Typography><Typography variant="body2">{description}</Typography><Arrow direction="external" /></Grid></Card>)}</Stack>
        </Grid></Container>
      </section>

      <section id="about" className={styles.section}>
        <Container maxWidth="xl" padding="lg"><Stack gap="xl"><Badge size="sm">04 / About</Badge><Grid columns="1.45fr 1fr" gap="xl" className={styles.aboutGrid}><Typography variant="h2" className={styles.sectionTitle}>I turn complex UI decisions into systems teams can trust.</Typography><Stack gap="lg" align="start"><Typography>As a Senior UI Engineer, I work at the intersection of design, frontend architecture, and developer experience. I care about the details that make interfaces feel coherent—and the systems that keep them that way as products grow.</Typography><Button href="mailto:el.tsolakou@gmail.com" variant="ghost" trailingIcon={<Arrow direction="external" />}>Start a conversation</Button></Stack></Grid></Stack></Container>
      </section>

      <Divider />
      <footer>
        <Container maxWidth="xl" padding="lg"><Stack direction="row" align="end" justify="between" wrap className={styles.footer}><Stack gap="xs"><Typography variant="h4">ET.</Typography><Typography variant="caption">Senior UI Engineer focused on design systems.</Typography></Stack><Stack direction="row" gap="lg"><Button href="https://github.com/eltsol" target="_blank" rel="noreferrer" variant="ghost" size="sm">GitHub ↗</Button><Button href="mailto:el.tsolakou@gmail.com" variant="ghost" size="sm">Email ↗</Button></Stack><Typography variant="caption">© 2026 Elena Tsolakou</Typography></Stack></Container>
      </footer>
    </main>
  );
}
