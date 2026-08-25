import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Tabs } from "./Tabs";
import type { TabsProps } from "./Tabs.types";

const tabs = [
  { label: "Overview", value: "overview" },
  { label: "Components", value: "components" },
  { label: "Guidelines", value: "guidelines" },
];

const ControlledTabs = (props: TabsProps) => {
  const [value, setValue] = useState(props.value);
  const handleChange = (nextValue: string) => {
    setValue(nextValue);
    props.onChange(nextValue);
  };

  return (
    <div style={{ width: props.fullWidth ? 520 : "auto" }}>
      <Tabs {...props} value={value} onChange={handleChange} />
      <div role="tabpanel" style={{ paddingTop: 16 }}>
        {tabs.find((tab) => tab.value === value)?.label} content
      </div>
    </div>
  );
};

const meta = {
  title: "Molecules/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
    docs: {
      description: {
        component: `
Tabs switch between related views without leaving the current context. The
component uses a controlled value and follows the horizontal ARIA tabs keyboard
pattern.

### Keyboard behaviour

- **Left / Right Arrow** moves selection between enabled tabs and wraps.
- **Home / End** moves to the first or last enabled tab.
- **Tab** leaves the tab list from the currently selected tab.

### Usage guidance

- Use short, parallel labels and keep the number of tabs manageable.
- Keep tab order stable and avoid using tabs for sequential steps.
- Render the active content in a tabpanel immediately after the tab list.
        `,
      },
    },
  },
  argTypes: {
    tabs: { control: "object", description: "Ordered tab labels, values, icons, and disabled states." },
    value: { control: "select", options: tabs.map(({ value }) => value), description: "Value of the selected tab." },
    onChange: { table: { disable: true }, description: "Called when selection changes." },
    fullWidth: {
      control: "boolean",
      description: "Distributes tabs evenly across the available width.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    tabs,
    value: "overview",
    onChange: fn(),
    fullWidth: false,
    "aria-label": "Design system sections",
  },
  render: (args) => <ControlledTabs {...args} />,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FullWidth: Story = { args: { fullWidth: true } };

export const WithIcons: Story = {
  args: {
    tabs: tabs.map((tab, index) => ({
      ...tab,
      icon: <span aria-hidden="true">{["◎", "◇", "✓"][index]}</span>,
    })),
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: tabs.map((tab) => ({ ...tab, disabled: tab.value === "components" })),
  },
  parameters: {
    docs: { description: { story: "Arrow-key navigation skips disabled tabs." } },
  },
};

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const overview = canvas.getByRole("tab", { name: "Overview" });
    const components = canvas.getByRole("tab", { name: "Components" });
    overview.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(components).toHaveFocus();
    await expect(components).toHaveAttribute("aria-selected", "true");
    await expect(args.onChange).toHaveBeenCalledWith("components");
  },
};
