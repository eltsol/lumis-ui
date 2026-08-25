import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Select } from "./Select";

const options = [
  { label: "Design systems", value: "design-systems" },
  { label: "UI engineering", value: "ui-engineering" },
  { label: "Product design", value: "product-design" },
];

const meta = {
  title: "Molecules/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
    docs: {
      description: {
        component: `
Select uses the native select element for choosing one option from a known
list, preserving platform keyboard and assistive-technology behaviour.

### Usage guidance

- Use Select when the available choices are fixed and compact.
- Write parallel, mutually exclusive option labels.
- Add a placeholder when an explicit choice is required.
- Use helper text before validation and a specific error message afterwards.
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Visible name for the select." },
    options: { control: "object", description: "Available labels, values, and disabled states." },
    placeholder: { control: "text", description: "Disabled prompt shown before selection." },
    helperText: { control: "text", description: "Persistent supporting guidance." },
    error: {
      control: "boolean",
      description: "Marks the select as invalid and applies error styling.",
      table: { defaultValue: { summary: "false" } },
    },
    errorMessage: { control: "text", description: "Actionable validation feedback." },
    fullWidth: {
      control: "boolean",
      description: "Expands the select to fill its container.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: { control: "boolean", description: "Prevents selection and focus." },
    children: { control: false },
    onChange: { table: { disable: true } },
  },
  args: {
    label: "Primary discipline",
    options,
    placeholder: "Choose a discipline",
    helperText: "Select the closest match.",
    error: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const ValidationError: Story = {
  args: {
    label: "Primary discipline",
    helperText: undefined,
    error: true,
    errorMessage: "Choose a discipline to continue.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", { name: "Primary discipline" });
    await expect(select).toHaveAttribute("aria-invalid", "true");
    await expect(select).toHaveAccessibleDescription(
      "Choose a discipline to continue.",
    );
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [...options, { label: "Content design — unavailable", value: "content", disabled: true }],
  },
};

export const Disabled: Story = { args: { disabled: true } };

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(Story) => <div style={{ width: 420 }}><Story /></div>],
};

export const Interaction: Story = {
  args: { onChange: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", { name: "Primary discipline" });
    await userEvent.selectOptions(select, "ui-engineering");
    await expect(select).toHaveValue("ui-engineering");
    await expect(args.onChange).toHaveBeenCalled();
  },
};
