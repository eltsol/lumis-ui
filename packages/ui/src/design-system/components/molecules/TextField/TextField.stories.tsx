import { TextField } from "./TextField";

export default {
  title: "Molecules/TextField",
  component: TextField,
};

export const Basic = {
  args: {
    label: "Email",
    placeholder: "Enter email",
  },
};

export const WithHelper = {
  args: {
    label: "Username",
    helperText: "Must be unique",
  },
};

export const Error = {
  args: {
    label: "Email",
    error: true,
    errorMessage: "Invalid email format",
  },
};

export const WithIcons = {
  args: {
    label: "Search",
    leftIcon: "🔍",
  },
};
