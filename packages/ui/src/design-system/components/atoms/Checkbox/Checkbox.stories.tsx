import { Checkbox } from "./Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
};

export const Default = {
  args: {
    label: "I agree to the terms",
  },
};

export const Checked = {
  args: {
    label: "Subscribed",
    checked: true,
  },
};

export const Indeterminate = {
  args: {
    label: "Select all",
    indeterminate: true,
  },
};

export const Disabled = {
  args: {
    label: "Disabled option",
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: "Required field",
    error: true,
    errorMessage: "You must accept this",
  },
};
