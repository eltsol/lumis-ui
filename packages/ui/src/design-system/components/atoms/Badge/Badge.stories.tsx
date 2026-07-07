import { Badge } from "./Badge";

export default {
  title: "Atoms/Badge",
  component: Badge,
};

export const Primary = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Success = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Error = {
  args: {
    children: "Error",
    variant: "error",
  },
};

export const WithDot = {
  args: {
    children: "Online",
    variant: "success",
    dot: true,
  },
};
