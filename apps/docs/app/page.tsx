"use client";

import { useMemo, useState } from "react";
import { Card, Chip, ThemeProvider, ThemeToggle } from "@repo/ui";
import styles from "./page.module.css";

const componentGroups = [
  { title: "Atoms", items: ["Avatar", "Badge", "Button", "Checkbox", "Chip", "Divider", "Icon", "Radio", "Skeleton", "Spinner", "Switch", "ThemeToggle", "Tooltip", "Typography"] },
  { title: "Molecules", items: ["List", "Select", "Snackbar", "Tabs", "TextField"] },
  { title: "Organisms", items: ["Card", "Modal"] },
  { title: "Layout", items: ["Container", "Grid", "Stack"] },
];

const foundations = [
  { name: "Color", detail: "Semantic roles and theme-ready palettes", visual: "color" },
  { name: "Typography", detail: "A clear, responsive type hierarchy", visual: "type" },
  { name: "Spacing", detail: "A predictable 4px-based spatial scale", visual: "spacing" },
  { name: "Motion", detail: "Purposeful duration and easing tokens", visual: "motion" },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const filteredGroups = useMemo(
    () => componentGroups.map((group) => ({ ...group, items: group.items.filter((item) => item.toLowerCase().includes(query.toLowerCase())) })).filter((group) => group.items.length),
    [query],
  );

  const copyInstallCommand = async () => {
    await navigator.clipboard.writeText("npm install");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <ThemeProvider>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <a className={styles.logo} href="#overview"><span>L</span><strong>Lumis UI</strong><small>v0.1</small></a>
          <label className={styles.search}><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search components..." aria-label="Search components" /><kbd>⌘ K</kbd></label>
          <div className={styles.topActions}><a href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer">GitHub ↗</a><ThemeToggle /></div>
        </header>

        <aside className={styles.sidebar}>
          <nav aria-label="Documentation navigation">
            <p>Getting started</p>
            <a className={styles.active} href="#overview">Overview</a>
            <a href="#installation">Installation</a>
            <p>Foundations</p>
            <a href="#foundations">Color</a><a href="#foundations">Typography</a><a href="#foundations">Spacing</a><a href="#foundations">Motion</a>
            <p>Components</p>
            {componentGroups.map((group) => <a href="#components" key={group.title}>{group.title}<span>{group.items.length}</span></a>)}
          </nav>
          <div className={styles.sideFooter}><span>ET.</span><p>Designed and engineered by Elena Tsolakou.</p></div>
        </aside>

        <main className={styles.content}>
          <section className={styles.hero} id="overview">
            <div className={styles.heroCopy}>
              <Chip label="Design system" variant="primary" size="sm" />
              <h1>Build cohesive interfaces with confidence.</h1>
              <p>Lumis UI is an accessible, themeable React design system with typed components and shared foundations for consistent product development.</p>
              <div className={styles.heroActions}><a className={styles.primaryButton} href="#installation">Get started <span>→</span></a><a className={styles.textButton} href="#components">Browse components</a></div>
            </div>
            <div className={styles.codePreview} aria-label="Button usage example">
              <div className={styles.codeHeader}><span>ButtonExample.tsx</span><span>TSX</span></div>
              <pre><code><span className={styles.codePurple}>import</span>{` { Button } `}<span className={styles.codePurple}>from</span>{` `}<span className={styles.codeGreen}>&quot;@repo/ui&quot;</span>{`;\n\n`}<span className={styles.codePurple}>export function</span>{` SaveAction() {\n  `}<span className={styles.codePurple}>return</span>{` (\n    `}<span className={styles.codeBlue}>&lt;Button</span>{` variant=`}<span className={styles.codeGreen}>&quot;primary&quot;</span><span className={styles.codeBlue}>&gt;</span>{`\n      Save changes\n    `}<span className={styles.codeBlue}>&lt;/Button&gt;</span>{`\n  );\n}`}</code></pre>
            </div>
          </section>

          <section className={styles.stats} aria-label="System statistics">
            <div><strong>24</strong><span>Components</span></div><div><strong>24</strong><span>Stories</span></div><div><strong>24</strong><span>Test suites</span></div><div><strong>2</strong><span>Themes</span></div>
          </section>

          <section className={styles.section} id="installation">
            <div className={styles.sectionHeading}><p>Getting started</p><h2>Start with the foundations.</h2><span>Clone the repository, install its workspace dependencies, and explore the system through the playground and Storybook.</span></div>
            <Card padding="none" className={styles.installCard}>
              <div className={styles.tabs}><span className={styles.selectedTab}>Repository setup</span></div>
              <div className={styles.command}><code>npm install</code><button type="button" onClick={copyInstallCommand} aria-label="Copy installation command">{copied ? "Copied" : "Copy"}</button></div>
            </Card>
          </section>

          <section className={styles.section} id="foundations">
            <div className={styles.sectionHeading}><p>Foundations</p><h2>Decisions encoded as tokens.</h2><span>Foundations keep the system expressive and consistent across themes, components, and product experiences.</span></div>
            <div className={styles.foundationGrid}>
              {foundations.map((foundation) => <Card padding="none" hoverable className={styles.foundationCard} key={foundation.name}><div className={`${styles.foundationVisual} ${styles[foundation.visual]}`}>{foundation.visual === "type" && <><strong>Aa</strong><span>16 / 24</span></>}{foundation.visual === "spacing" && <><i /><i /><i /><i /></>}{foundation.visual === "motion" && <><i /><i /><i /></>}</div><div className={styles.foundationCopy}><h3>{foundation.name}</h3><p>{foundation.detail}</p><span aria-hidden="true">↗</span></div></Card>)}
            </div>
          </section>

          <section className={styles.section} id="components">
            <div className={styles.sectionHeading}><p>Components</p><h2>Composable building blocks.</h2><span>Every component includes a typed API, usage stories, interaction tests, and theme support.</span></div>
            {filteredGroups.length ? <div className={styles.componentGroups}>{filteredGroups.map((group) => <div className={styles.componentGroup} key={group.title}><div className={styles.groupTitle}><h3>{group.title}</h3><span>{group.items.length} components</span></div><div className={styles.componentGrid}>{group.items.map((item) => <a href={item === "Button" ? "/components/button" : `#${item.toLowerCase()}`} key={item}><span className={styles.componentIcon}>{item.slice(0, 1)}</span><strong>{item}</strong><span aria-hidden="true">→</span></a>)}</div></div>)}</div> : <div className={styles.emptyState}><strong>No components found</strong><p>Try a different search term.</p></div>}
          </section>

          <footer className={styles.footer}><p>Lumis UI · Built by Elena Tsolakou</p><div><a href="mailto:el.tsolakou@gmail.com">Contact</a><a href="https://github.com/eltsol/lumis-ui" target="_blank" rel="noreferrer">GitHub</a></div></footer>
        </main>
      </div>
    </ThemeProvider>
  );
}
