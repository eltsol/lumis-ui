import { Radio } from "./Radio";

export default {
  title: "Atoms/Radio",
  component: Radio,
};

export const Default = {
  args: {
    label: "Option 1",
    value: "option1",
    name: "demo",
  },
};

export const Checked = {
  args: {
    label: "Selected",
    value: "selected",
    name: "demo",
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    value: "disabled",
    name: "demo",
    disabled: true,
  },
};
