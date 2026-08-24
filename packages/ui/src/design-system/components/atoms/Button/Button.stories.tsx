import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
    docs: {
      description: {
        component: `
Buttons trigger actions or navigate users to a destination. Their visual
emphasis communicates the relative importance of each action.

### Usage guidance

- Use **primary** for the single most important action in a context.
- Use **secondary** for supporting actions.
- Use **ghost** for low-emphasis or compact actions.
- Pass an \`href\` for navigation and \`onClick\` for an interface action.
- Prefer concise, outcome-oriented labels such as “Save changes”.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
      description: "Sets the visual emphasis of the action.",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Controls the button height, spacing, and label size.",
      table: { defaultValue: { summary: "md" } },
    },
    loading: {
      control: "boolean",
      description: "Shows progress and prevents repeated interaction.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction when an action is unavailable.",
      table: { defaultValue: { summary: "false" } },
    },
    fullWidth: {
      control: "boolean",
      description: "Expands the button to fill its container.",
      table: { defaultValue: { summary: "false" } },
    },
    href: {
      control: "text",
      description: "Renders a semantic anchor for navigation.",
    },
    leadingIcon: {
      control: false,
      description: "Optional icon placed before the label.",
    },
    trailingIcon: {
      control: false,
      description: "Optional icon placed after the label.",
    },
    className: { table: { disable: true } },
  },
  args: {
    children: "Save changes",
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Use emphasis intentionally. A view should normally contain only one primary action.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
      <Button>Primary action</Button>
      <Button variant="secondary">Secondary action</Button>
      <Button variant="ghost">Ghost action</Button>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Choose size based on interface density and the prominence of the action.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: "Continue",
    leadingIcon: <span aria-hidden="true">+</span>,
    trailingIcon: <span aria-hidden="true">→</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Use icons only when they reinforce the label. Decorative icons should be hidden from assistive technology.",
      },
    },
  },
};

export const Loading: Story = {
  args: { loading: true },
  parameters: {
    docs: {
      description: {
        story: "Use loading while an action is processing to prevent duplicate submissions.",
      },
    },
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  parameters: {
    docs: {
      description: {
        story: "Disabled actions should remain exceptional; explain why the action is unavailable when the reason is not obvious.",
      },
    },
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [
    (Story) => <div style={{ width: 360 }}><Story /></div>,
  ],
};

export const AsLink: Story = {
  args: {
    children: "View documentation",
    href: "#button-documentation",
    trailingIcon: <span aria-hidden="true">↗</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Supplying href renders an anchor while preserving the Button visual language.",
      },
    },
  },
};

export const Interaction: Story = {
  args: {
    children: "Create project",
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "This story verifies the primary pointer interaction through Storybook's test runner.",
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Create project" }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
