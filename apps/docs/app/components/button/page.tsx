"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  ThemeProvider,
  ThemeToggle,
  Typography,
} from "@repo/ui";
import homeStyles from "../../page.module.css";
import styles from "./page.module.css";

const buttonPropsData = [
  ["variant", '"primary" | "secondary" | "ghost"', '"primary"', "Visual emphasis of the action."],
  ["size", '"sm" | "md" | "lg"', '"md"', "Controls height, spacing, and label size."],
  ["loading", "boolean", "false", "Shows a loading label and prevents interaction."],
  ["leadingIcon", "ReactNode", "-", "Places an icon before the label."],
  ["trailingIcon", "ReactNode", "-", "Places an icon after the label."],
  ["fullWidth", "boolean", "false", "Expands the button to its container width."],
  ["disabled", "boolean", "false", "Prevents interaction and communicates disabled state."],
  ["href", "string", "-", "Renders the component as an accessible link."],
];

const codeExample = `import { Button } from "@repo/ui";

export function SaveActions() {
  return (
    <>
      <Button>Save changes</Button>
      <Button variant="secondary">Cancel</Button>
    </>
  );
}`;

export default function ButtonDocumentation() {
  const [copied, setCopied] = useState(false);

  const copyExample = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <ThemeProvider>
      <div className={homeStyles.shell}>
        <header className={homeStyles.topbar}>
          <Link className={homeStyles.logo} href="/"><span>L</span><strong>Lumis UI</strong><small>v0.1</small></Link>
          <div className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Docs</Link><span>/</span><Link href="/#components">Components</Link><span>/</span><strong>Button</strong></div>
          <div className={homeStyles.topActions}><a href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer">GitHub ↗</a><ThemeToggle /></div>
        </header>

        <aside className={homeStyles.sidebar}>
          <nav aria-label="Documentation navigation">
            <p>Getting started</p><Link href="/">Overview</Link><Link href="/#installation">Installation</Link>
            <p>Foundations</p><Link href="/#foundations">Color</Link><Link href="/#foundations">Typography</Link><Link href="/#foundations">Spacing</Link><Link href="/#foundations">Motion</Link>
            <p>Components</p><Link href="/#components">All components</Link><Link className={homeStyles.active} href="/components/button">Button</Link>
          </nav>
          <div className={homeStyles.sideFooter}><span>ET.</span><p>Designed and engineered by Elena Tsolakou.</p></div>
        </aside>

        <main className={homeStyles.content}>
          <Container maxWidth="lg" padding="lg" className={styles.content}>
            <Stack gap="xl">
              <Stack gap="md" align="start" className={styles.intro}>
                <Stack direction="row" gap="sm" align="center"><Badge size="sm">Atom</Badge><Chip label="Stable" variant="success" size="sm" /></Stack>
                <Typography variant="h1" className={styles.title}>Button</Typography>
                <Typography className={styles.lead}>Buttons trigger actions or navigate users to a new destination. Their visual emphasis communicates the importance of each available action.</Typography>
                <Stack direction="row" gap="sm" wrap><Button href="#examples" trailingIcon="↓">View examples</Button><Button href="https://github.com/eltsol/lumis-ui/tree/main/packages/ui/src/design-system/components/atoms/Button" target="_blank" rel="noreferrer" variant="secondary" trailingIcon="↗">View source</Button></Stack>
              </Stack>

              <Divider />

              <section id="examples" className={styles.section}>
                <Stack gap="lg"><Stack gap="xs"><Typography variant="h2">Variants</Typography><Typography variant="body2">Use visual hierarchy to distinguish the primary action from supporting actions.</Typography></Stack>
                  <Card padding="lg" className={styles.specimen}><Stack direction="row" gap="md" wrap align="center"><Button>Primary action</Button><Button variant="secondary">Secondary action</Button><Button variant="ghost">Ghost action</Button></Stack></Card>
                </Stack>
              </section>

              <section className={styles.section}>
                <Grid columns={2} gap="xl" className={styles.twoColumn}>
                  <Stack gap="lg"><Stack gap="xs"><Typography variant="h2">Sizes</Typography><Typography variant="body2">Choose a size based on interface density and prominence.</Typography></Stack><Card padding="lg" className={styles.specimen}><Stack direction="row" gap="md" wrap align="center"><Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button></Stack></Card></Stack>
                  <Stack gap="lg"><Stack gap="xs"><Typography variant="h2">States</Typography><Typography variant="body2">Loading and disabled states prevent duplicate or unavailable actions.</Typography></Stack><Card padding="lg" className={styles.specimen}><Stack direction="row" gap="md" wrap align="center"><Button loading>Saving</Button><Button disabled>Disabled</Button></Stack></Card></Stack>
                </Grid>
              </section>

              <section className={styles.section}>
                <Stack gap="lg"><Stack gap="xs"><Typography variant="h2">With icons and links</Typography><Typography variant="body2">Icons reinforce direction or meaning. Supplying an href renders a semantic anchor with button styling.</Typography></Stack>
                  <Card padding="lg" className={styles.specimen}><Stack direction="row" gap="md" wrap align="center"><Button leadingIcon="+">Create item</Button><Button variant="secondary" trailingIcon="→">Continue</Button><Button href="/#components" variant="ghost" trailingIcon="↗">Browse components</Button></Stack></Card>
                </Stack>
              </section>

              <section className={styles.section}>
                <Stack gap="lg"><Stack direction="row" justify="between" align="center"><Stack gap="xs"><Typography variant="h2">Usage</Typography><Typography variant="body2">Import the component from the shared UI package.</Typography></Stack><Button variant="ghost" size="sm" onClick={copyExample}>{copied ? "Copied" : "Copy code"}</Button></Stack>
                  <Card padding="none" className={styles.codeCard}><div className={styles.codeHeader}><Typography variant="caption">ButtonExample.tsx</Typography><Badge size="sm" variant="secondary">TSX</Badge></div><pre><code>{codeExample}</code></pre></Card>
                </Stack>
              </section>

              <section className={styles.section}>
                <Stack gap="lg"><Stack gap="xs"><Typography variant="h2">API</Typography><Typography variant="body2">Button also accepts the native attributes for its rendered button or anchor element.</Typography></Stack>
                  <div className={styles.tableWrap}><table><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>{buttonPropsData.map(([name, type, defaultValue, description]) => <tr key={name}><td><code>{name}</code></td><td><code>{type}</code></td><td><code>{defaultValue}</code></td><td>{description}</td></tr>)}</tbody></table></div>
                </Stack>
              </section>

              <section className={styles.section}>
                <Grid columns={2} gap="md" className={styles.twoColumn}>
                  <Card padding="lg"><Stack gap="md"><Badge variant="success" size="sm">Do</Badge><Typography variant="h4">Use a clear action label</Typography><Typography variant="body2">Describe the result with concise verbs such as “Save changes” or “Create project”.</Typography></Stack></Card>
                  <Card padding="lg"><Stack gap="md"><Badge variant="error" size="sm">Avoid</Badge><Typography variant="h4">Do not overuse primary actions</Typography><Typography variant="body2">Keep one primary action per context so the hierarchy remains meaningful.</Typography></Stack></Card>
                </Grid>
              </section>

              <section className={styles.section}>
                <Card padding="lg" className={styles.accessibilityCard}><Stack gap="md"><Badge size="sm">Accessibility</Badge><Typography variant="h3">Interaction is part of the API.</Typography><ul><li>Use descriptive labels that make sense outside the surrounding layout.</li><li>Prefer <code>href</code> for navigation and <code>onClick</code> for actions.</li><li>Keep visible focus styles and sufficient contrast in every theme.</li><li>Use the loading state when an action is processing to prevent duplicate submissions.</li></ul></Stack></Card>
              </section>
            </Stack>

            <footer className={styles.footer}><Divider /><Stack direction="row" justify="between" align="center" wrap><Button href="/#components" variant="ghost" leadingIcon="←">All components</Button><Typography variant="caption">Next: Checkbox →</Typography></Stack></footer>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
