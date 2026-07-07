import { Select } from "./Select";

export default {
  title: "Molecules/Select",
  component: Select,
};

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export const Default = {
  args: {
    label: "Fruit",
    options,
    placeholder: "Select a fruit",
  },
};

export const WithError = {
  args: {
    label: "Required field",
    options,
    error: true,
    errorMessage: "Please select an option",
  },
};

export const FullWidth = {
  args: {
    label: "Fruit",
    options,
    fullWidth: true,
  },
};
