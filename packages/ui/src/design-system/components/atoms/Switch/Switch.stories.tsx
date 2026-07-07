import { Switch } from "./Switch";

export default {
  title: "Atoms/Switch",
  component: Switch,
};

export const Default = {
  args: {
    label: "Toggle me",
  },
};

export const Checked = {
  args: {
    label: "Enabled",
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const WithoutLabel = {
  args: {},
};
