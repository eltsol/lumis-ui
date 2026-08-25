import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "../../atoms/Button";
import { Stack } from "../../layout/Stack";
import { TextField } from "../../molecules/TextField";
import { Modal } from "./Modal";
import type { ModalProps } from "./Modal.types";

const ModalExample = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const close = () => {
    setIsOpen(false);
    props.onClose();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Edit profile</Button>
      <Modal {...props} isOpen={isOpen} onClose={close}>
        {props.children}
      </Modal>
    </>
  );
};

const meta = {
  title: "Organisms/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
    docs: {
      description: {
        component: `
Modal places a focused task above the current page. It exposes dialog semantics,
moves focus into the dialog, traps keyboard focus while open, closes on Escape,
and restores focus to the trigger after closing.

### Usage guidance

- Reserve modals for short, focused tasks that interrupt the current flow.
- Give every modal a concise title and place the primary action last.
- Keep destructive actions explicit and avoid stacking modals.
- Disable overlay closing when accidental dismissal could lose meaningful work.
        `,
      },
    },
  },
  argTypes: {
    isOpen: { control: "boolean", description: "Controls whether the dialog is mounted." },
    title: { control: "text", description: "Accessible visible heading for the dialog." },
    description: { control: "text", description: "Supporting text announced with the dialog." },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl"],
      description: "Sets the dialog's maximum width.",
      table: { defaultValue: { summary: "md" } },
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "Allows pointer dismissal from the backdrop.",
      table: { defaultValue: { summary: "true" } },
    },
    children: { control: false },
    onClose: { table: { disable: true } },
  },
  args: {
    isOpen: false,
    onClose: fn(),
    title: "Edit profile",
    description: "Update the information shown on your portfolio.",
    size: "md",
    closeOnOverlayClick: true,
    children: (
      <Stack gap="lg">
        <TextField label="Display name" defaultValue="Elena Tsolakou" fullWidth />
        <Stack direction="row" gap="sm" justify="end">
          <Button variant="secondary">Cancel</Button>
          <Button>Save changes</Button>
        </Stack>
      </Stack>
    ),
  },
  render: (args) => <ModalExample {...args} />,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  args: { size: "lg", title: "Large modal", description: "Use larger sizes only when the task genuinely needs space." },
};

export const Persistent: Story = {
  args: { closeOnOverlayClick: false },
  parameters: {
    docs: { description: { story: "Overlay dismissal is disabled when losing progress would be costly." } },
  },
};

export const FocusAndEscape: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "Edit profile" });
    await userEvent.click(trigger);
    const dialog = await canvas.findByRole("dialog", { name: "Edit profile" });
    await expect(dialog).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await expect(args.onClose).toHaveBeenCalledOnce();
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  },
};

export const FocusTrap: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Edit profile" }));
    const closeButton = await canvas.findByRole("button", { name: "Close dialog" });
    closeButton.focus();
    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.getByRole("button", { name: "Save changes" })).toHaveFocus();
  },
};
