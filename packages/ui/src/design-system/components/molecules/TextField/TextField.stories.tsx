import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { TextField } from "./TextField";

const meta = {
  title: "Molecules/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
    docs: {
      description: {
        component: `
TextField collects a short piece of free-form text and keeps its label,
supporting guidance, and validation message programmatically connected.

### Usage guidance

- Keep labels visible; placeholders are examples, not replacements for labels.
- Use helper text for format or context before validation occurs.
- Pair \`error\` with a specific, actionable \`errorMessage\`.
- Use \`readOnly\` when information may be selected but not edited, and
  \`disabled\` only when the field is unavailable.
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Visible name for the input." },
    helperText: { control: "text", description: "Persistent supporting guidance." },
    error: {
      control: "boolean",
      description: "Marks the input as invalid and applies error styling.",
      table: { defaultValue: { summary: "false" } },
    },
    errorMessage: { control: "text", description: "Actionable validation feedback." },
    fullWidth: {
      control: "boolean",
      description: "Expands the field to fill its container.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: { control: "boolean", description: "Prevents focus and editing." },
    readOnly: { control: "boolean", description: "Allows focus and selection without editing." },
    leftIcon: { control: false, description: "Optional leading visual." },
    rightIcon: { control: false, description: "Optional trailing visual." },
    onChange: { table: { disable: true } },
  },
  args: {
    label: "Work email",
    placeholder: "elena@example.com",
    helperText: "We will only use this for project updates.",
    error: false,
    fullWidth: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithIcons: Story = {
  args: {
    label: "Search components",
    placeholder: "Button, Modal, Tabs…",
    helperText: "Search by component name.",
    leftIcon: <span aria-hidden="true">⌕</span>,
  },
};

export const ValidationError: Story = {
  args: {
    label: "Work email",
    defaultValue: "elena@",
    helperText: undefined,
    error: true,
    errorMessage: "Enter a complete email address.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Work email" });
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(input).toHaveAccessibleDescription(
      "Enter a complete email address.",
    );
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Account ID",
    defaultValue: "LUM-2048",
    helperText: "This identifier is generated automatically.",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Organisation",
    defaultValue: "Lumis UI",
    helperText: "Available after joining a workspace.",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(Story) => <div style={{ width: 420 }}><Story /></div>],
};

export const Interaction: Story = {
  args: {
    label: "Project name",
    placeholder: "New project",
    helperText: "Use a descriptive name.",
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Project name" });
    await userEvent.type(input, "Design system");
    await expect(input).toHaveValue("Design system");
    await expect(args.onChange).toHaveBeenCalled();
  },
};
