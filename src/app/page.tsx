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
  ThemeToggle,
  Typography,
} from "@/design-system";
import styles from "./page.module.css";

const principles = [
  ["01", "Accessible by default", "Keyboard behavior, focus states, semantic markup, and inclusive interaction patterns are part of every component API."],
  ["02", "Built to scale", "Composable React primitives and predictable TypeScript APIs help teams move quickly without sacrificing consistency."],
  ["03", "One shared language", "Design tokens connect visual decisions to code, keeping color, spacing, typography, and motion aligned."],
];

const systemLayers = [
  ["01", "Foundations", "Color, type, spacing, shape, elevation, and motion"],
  ["02", "Components", "23 reusable React components with typed APIs"],
  ["03", "Patterns", "Composition guidance for consistent product experiences"],
  ["04", "Tooling", "Storybook, Vitest, accessibility checks, and documentation"],
];

const Arrow = ({ direction = "right" }: { direction?: "right" | "down" | "external" }) => (
  <Icon size="sm">{direction === "down" ? "↓" : direction === "external" ? "↗" : "→"}</Icon>
);

export default function Page() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header>
        <Container maxWidth="xl" padding="lg">
          <Grid direction="row" align="center" justify="between" className={styles.header}>
            <a className={styles.brand} href="#top" aria-label="Elena Tsolakou home">ET<span>.</span></a>
            <nav className={styles.nav} aria-label="Main navigation">
              <Grid direction="row" gap="xl">
                <a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a>
              </Grid>
            </nav>
            <Grid direction="row" align="center" gap="md">
              <ThemeToggle />
              <Button href="mailto:el.tsolakou@gmail.com" variant="ghost" trailingIcon={<Arrow direction="external" />}>Let&apos;s talk</Button>
            </Grid>
          </Grid>
        </Container>
      </header>

      <main id="main-content" tabIndex={-1}>
      <section id="top" className={styles.heroSection}>
        <Container maxWidth="xl" padding="lg">
          <Grid columns="minmax(0, 1.02fr) minmax(430px, .98fr)" gap="xl" className={styles.heroGrid}>
            <Grid gap="lg" justify="center" className={styles.heroCopy}>
              <Badge size="sm" className={styles.eyebrow}>Senior UI Engineer · Design Systems</Badge>
              <Typography variant="h1" className={styles.heroTitle}>Building consistent <span>interfaces at scale.</span></Typography>
              <Typography className={styles.heroText}>I&apos;m Elena Tsolakou. I build accessible design systems that connect design and engineering, helping teams create cohesive digital products with confidence.</Typography>
              <Grid direction="row" gap="sm" wrap className={styles.heroActions}>
                <Button href="#work" size="lg" trailingIcon={<Arrow direction="down" />}>Explore Lumis UI</Button>
                <Button href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer" aria-label="View Lumis UI source on GitHub (opens in a new tab)" variant="secondary" size="lg" trailingIcon={<Arrow direction="external" />}>View source</Button>
              </Grid>
            </Grid>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualGlow} />
              <Card padding="none" className={styles.previewWindow}>
                <Grid direction="row" align="center" justify="between" className={styles.windowBar}>
                  <Grid direction="row" gap="xs" aria-hidden="true" className={styles.windowDots}><span /><span /><span /></Grid>
                  <Typography variant="caption">lumis-ui / components</Typography>
                  <Badge variant="success" size="sm" dot>Live</Badge>
                </Grid>
                <Grid gap="lg" className={styles.previewContent}>
                  <Grid direction="row" align="start" justify="between">
                    <Grid gap="xs"><Typography variant="caption">Team overview</Typography><Typography variant="h4" as="p">Design system health</Typography></Grid>
                    <Chip label="Stable" variant="success" size="sm" />
                  </Grid>
                  <Grid columns={2} gap="sm">
                    <Card padding="md" className={styles.previewCard}><Grid gap="xs"><Typography variant="caption">Components</Typography><Typography variant="h3" as="p">23</Typography><Typography variant="caption">Atoms to organisms</Typography></Grid></Card>
                    <Card padding="md" className={styles.previewCard}><Grid gap="xs"><Typography variant="caption">Coverage</Typography><Typography variant="h3" as="p">100%</Typography><Typography variant="caption">Stories and tests</Typography></Grid></Card>
                  </Grid>
                  <Card padding="md" className={styles.activityCard}>
                    <Grid gap="lg">
                      <Grid direction="row" justify="between" align="start"><Grid gap="xs"><Typography variant="caption">System model</Typography><Typography variant="body2">Consistent by design</Typography></Grid><Badge variant="success" size="sm">Token-driven</Badge></Grid>
                      <div className={styles.chart} aria-hidden="true">{[35, 48, 42, 61, 57, 72, 84, 92].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div>
                    </Grid>
                  </Card>
                </Grid>
              </Card>
              <Chip label="--lm-color-primary" variant="primary" size="sm" className={styles.tokenTag} />
            </div>
          </Grid>
        </Container>
      </section>

      <Divider />
      <Container maxWidth="full" padding="none">
        <Grid columns={4} gap="none" className={styles.metrics}>
          {[["23", "Components"], ["2", "Color themes"], ["23", "Story files"], ["6", "Token foundations"]].map(([value, label]) => <Grid key={label} gap="xs" align="center" justify="center"><Typography variant="h2" as="p">{value}</Typography><Typography variant="caption">{label}</Typography></Grid>)}
        </Grid>
      </Container>
      <Divider />

      <section id="work" className={styles.section}>
        <Container maxWidth="xl" padding="lg">
          <Grid gap="xl">
            <Grid columns="1fr 3fr" gap="xl" className={styles.sectionIntro}>
              <Badge size="sm">01 / Selected work</Badge>
              <Grid columns="1.5fr 1fr" gap="xl"><Typography variant="h2" className={styles.sectionTitle}>A system, not just a component library.</Typography><Typography>Lumis UI explores what it takes to create a dependable shared language between design and development.</Typography></Grid>
            </Grid>
            <Card padding="none" className={styles.projectCard}>
              <Grid gap="xl" className={styles.projectContent}>
                <Grid direction="row" justify="between" wrap><Typography variant="caption">Featured project · 2026</Typography><Typography variant="caption">React 19 · TypeScript · Storybook</Typography></Grid>
                <Divider />
                <Grid columns="1.2fr 1fr" gap="xl" className={styles.projectGrid}>
                  <Grid gap="sm"><Badge size="sm">Lumis UI</Badge><Typography variant="h2" className={styles.projectTitle}>Foundations for cohesive product experiences.</Typography></Grid>
                  <Grid gap="lg" align="start"><Typography>A themeable React design system covering foundations, accessible components, documentation, and testing. Every layer is designed to make consistency easier to achieve and maintain.</Typography><Button href="#architecture" variant="ghost" trailingIcon={<Arrow />}>Explore the architecture</Button></Grid>
                </Grid>
              </Grid>
              <div className={styles.componentCanvas} aria-hidden="true" inert>
                <Grid align="center" gap="xl" className={styles.componentSidebar}><Badge className={styles.canvasLogo}>L</Badge><Badge dotOnly /><Badge dotOnly variant="secondary" /><Badge dotOnly variant="secondary" /><Badge dotOnly variant="secondary" /></Grid>
                <Grid columns="1fr 220px" gap="none" className={styles.componentMain}>
                  <Grid direction="row" align="center" justify="between" className={styles.canvasHeader}><Grid gap="xs"><Typography variant="caption">Components</Typography><Typography variant="h5" as="p">Button</Typography></Grid><Chip label="v0.1" variant="primary" size="sm" /></Grid>
                  <Grid direction="row" align="center" justify="center" gap="sm" wrap className={styles.componentStage}><Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost action</Button></Grid>
                  <Grid gap="md" className={styles.componentProps}>{[["variant", "primary"], ["size", "medium"], ["state", "enabled"]].map(([name, value]) => <Grid direction="row" justify="between" key={name}><Typography variant="caption">{name}</Typography><code>{value}</code></Grid>)}</Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Container>
      </section>

      <section id="approach" className={`${styles.section} ${styles.approachSection}`}>
        <Container maxWidth="xl" padding="lg"><Grid gap="xl">
          <Grid columns="1fr 3fr" gap="xl" className={styles.sectionIntro}><Badge size="sm">02 / Approach</Badge><Grid columns="1.5fr 1fr" gap="xl"><Typography variant="h2" className={styles.sectionTitle}>Engineering the invisible details.</Typography><Typography>Strong design systems turn thoughtful constraints into a better experience for users and product teams.</Typography></Grid></Grid>
          <Grid columns={3} gap="md" className={styles.principleGrid}>{principles.map(([number, title, description]) => <Card padding="lg" hoverable key={number}><Grid gap="lg"><Badge size="sm">{number}</Badge><Grid gap="sm"><Typography variant="h4" as="h3">{title}</Typography><Typography variant="body2">{description}</Typography></Grid></Grid></Card>)}</Grid>
        </Grid></Container>
      </section>

      <section id="architecture" className={`${styles.section} ${styles.architectureSection}`}>
        <Container maxWidth="xl" padding="lg"><Grid columns="1fr 1.15fr" gap="xl" className={styles.architectureGrid}>
          <Grid gap="lg" align="start"><Badge size="sm">03 / Architecture</Badge><Typography variant="h2" className={styles.sectionTitle}>From foundations to product patterns.</Typography><Typography>Lumis UI separates design decisions from implementation, creating a system that can evolve without losing its visual language.</Typography></Grid>
          <Grid gap="sm">{systemLayers.map(([number, title, description]) => <Card padding="md" hoverable className={styles.layerCard} key={number}><Grid columns="42px 130px 1fr 20px" gap="md"><Badge size="sm">{number}</Badge><Typography variant="h6" as="h3">{title}</Typography><Typography variant="body2">{description}</Typography><Arrow direction="external" /></Grid></Card>)}</Grid>
        </Grid></Container>
      </section>

      <section id="about" className={styles.section}>
        <Container maxWidth="xl" padding="lg"><Grid gap="xl"><Badge size="sm">04 / About</Badge><Grid columns="1.45fr 1fr" gap="xl" className={styles.aboutGrid}><Typography variant="h2" className={styles.sectionTitle}>I turn complex UI decisions into systems teams can trust.</Typography><Grid gap="lg" align="start"><Typography>As a Senior UI Engineer, I work at the intersection of design, frontend architecture, and developer experience. I care about the details that make interfaces feel coherent—and the systems that keep them that way as products grow.</Typography><Button href="mailto:el.tsolakou@gmail.com" variant="ghost" trailingIcon={<Arrow direction="external" />}>Start a conversation</Button></Grid></Grid></Grid></Container>
      </section>

      <Divider />
      </main>
      <footer>
        <Container maxWidth="xl" padding="lg"><Grid direction="row" align="end" justify="between" wrap className={styles.footer}><Grid gap="xs"><Typography variant="h4" as="p">ET.</Typography><Typography variant="caption">Senior UI Engineer focused on design systems.</Typography></Grid><Grid direction="row" gap="lg"><Button href="https://github.com/eltsol" target="_blank" rel="noreferrer" aria-label="Elena Tsolakou on GitHub (opens in a new tab)" variant="ghost" size="sm" trailingIcon={<Arrow direction="external" />}>GitHub</Button><Button href="mailto:el.tsolakou@gmail.com" variant="ghost" size="sm" trailingIcon={<Arrow direction="external" />}>Email</Button></Grid><Typography variant="caption">© 2026 Elena Tsolakou</Typography></Grid></Container>
      </footer>
    </div>
  );
}
