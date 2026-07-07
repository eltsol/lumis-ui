import { Chip } from "./Chip";

export default {
  title: "Atoms/Chip",
  component: Chip,
};

export const Default = {
  args: {
    label: "Default Chip",
  },
};

export const Primary = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const WithDelete = {
  args: {
    label: "Removable",
    variant: "primary",
    onDelete: () => {},
  },
};

export const Selectable = {
  args: {
    label: "Selectable",
    selectable: true,
    selected: true,
  },
};

export const Small = {
  args: {
    label: "Small Chip",
    size: "sm",
  },
};
