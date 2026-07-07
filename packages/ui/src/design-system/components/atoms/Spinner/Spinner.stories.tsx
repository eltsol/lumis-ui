import { Spinner } from "./Spinner";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
};

export const Default = {
  args: {},
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const WithLabel = {
  args: {
    label: "Loading...",
  },
};
