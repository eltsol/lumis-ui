import { Card } from "./Card";

export default {
  title: "Organisms/Card",
  component: Card,
};

export const Default = {
  args: {
    children: "Card content",
    padding: "md",
  },
};

export const Hoverable = {
  args: {
    children: "Hover me",
    hoverable: true,
  },
};

export const Clickable = {
  args: {
    children: "Click me",
    clickable: true,
  },
};

export const LargePadding = {
  args: {
    children: "More padding",
    padding: "lg",
  },
};
