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
    leadingIcon: "🔥",
    trailingIcon: "→",
  },
};

export const FullWidth = {
  args: {
    children: "Button",
    fullWidth: true,
  },
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

export const Disabled = {
  args: {
    children: "Button",
    disabled: true,
  },
};
