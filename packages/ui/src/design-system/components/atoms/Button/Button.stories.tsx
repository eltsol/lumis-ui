import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Primary = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Loading = {
  args: {
    children: "Button",
    loading: true,
  },
};

export const WithIcons = {
  args: {
    children: "Button",
    leftIcon: "🔥",
    rightIcon: "→",
  },
};

export const FullWidth = {
  args: {
    children: "Button",
    fullWidth: true,
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Small = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Medium = {
  args: {
    children: "Button",
    size: "md",
  },
};

export const Large = {
  args: {
    children: "Button",
    size: "lg",
  },
};
