import { Stack } from "./Stack";

export default { title: "Layout/Stack", component: Stack };

export const Vertical = {
  args: { children: [<span key="1">First</span>, <span key="2">Second</span>] },
};

export const Horizontal = {
  args: {
    direction: "row",
    gap: "lg",
    children: [<span key="1">First</span>, <span key="2">Second</span>],
  },
};
