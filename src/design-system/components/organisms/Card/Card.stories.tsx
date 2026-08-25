import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "../../atoms/Button";
import { Grid } from "../../layout/Grid";
import { Card } from "./Card";

const meta = {
  title: "Organisms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
    docs: {
      description: {
        component: `
Card groups related content and actions into a single visual surface. It is a
composition primitive, so its internal hierarchy should come from semantic
headings, text, and Lumis UI actions.

### Usage guidance

- Keep each card focused on one subject or decision.
- Use padding consistently within a collection.
- Use \`hoverable\` for surfaces that benefit from visual emphasis on hover.
- Use \`clickable\` only when the whole card performs one action; it supplies
  button semantics and keyboard activation. Do not nest other interactive
  controls inside a clickable card.
        `,
      },
    },
  },
  argTypes: {
    padding: {
      control: "inline-radio",
      options: ["none", "sm", "md", "lg"],
      description: "Controls the internal spacing of the surface.",
      table: { defaultValue: { summary: "md" } },
    },
    hoverable: {
      control: "boolean",
      description: "Adds elevation when the pointer hovers over the card.",
      table: { defaultValue: { summary: "false" } },
    },
    clickable: {
      control: "boolean",
      description: "Makes the complete surface keyboard and pointer actionable.",
      table: { defaultValue: { summary: "false" } },
    },
    children: { control: false },
    onClick: { table: { disable: true } },
  },
  args: {
    padding: "md",
    hoverable: false,
    clickable: false,
    children: (
      <Grid gap="sm">
        <h3 style={{ margin: 0 }}>Design system foundations</h3>
        <p style={{ margin: 0 }}>Tokens, principles, and accessible patterns for consistent product work.</p>
      </Grid>
    ),
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const PaddingOptions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Grid gap="md">
      {(["none", "sm", "md", "lg"] as const).map((padding) => (
        <Card key={padding} padding={padding}>Padding: {padding}</Card>
      ))}
    </Grid>
  ),
};

export const ComposedContent: Story = {
  args: {
    padding: "lg",
    children: (
      <Grid gap="md">
        <Grid gap="xs">
          <span>Case study</span>
          <h3 style={{ margin: 0 }}>Scaling a multi-brand design system</h3>
          <p style={{ margin: 0 }}>A token-led foundation that helped product teams ship consistent interfaces.</p>
        </Grid>
        <Grid direction="row" gap="sm">
          <Button size="sm">Read case study</Button>
          <Button size="sm" variant="ghost">View system</Button>
        </Grid>
      </Grid>
    ),
  },
};

export const Hoverable: Story = { args: { hoverable: true } };

export const Clickable: Story = {
  args: {
    clickable: true,
    hoverable: true,
    "aria-label": "Open design system foundations",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole("button", { name: "Open design system foundations" });
    card.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
