import { Skeleton } from "./Skeleton";

export default {
  title: "Atoms/Skeleton",
  component: Skeleton,
};

export const Text = {
  args: {
    variant: "text",
  },
};

export const Circular = {
  args: {
    variant: "circular",
  },
};

export const Rectangular = {
  args: {
    variant: "rectangular",
  },
};

export const CustomSize = {
  args: {
    variant: "text",
    width: "300px",
    height: "24px",
  },
};
