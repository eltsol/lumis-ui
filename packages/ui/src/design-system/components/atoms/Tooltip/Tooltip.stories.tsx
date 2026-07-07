import { Tooltip } from "./Tooltip";

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
};

export const Top = {
  args: {
    content: "Tooltip on top",
    children: <span style={{ padding: 8, cursor: "pointer" }}>Hover me</span>,
    placement: "top",
  },
};

export const Bottom = {
  args: {
    content: "Tooltip on bottom",
    children: <span style={{ padding: 8, cursor: "pointer" }}>Hover me</span>,
    placement: "bottom",
  },
};

export const Left = {
  args: {
    content: "Left tooltip",
    children: <span style={{ padding: 8, cursor: "pointer" }}>Hover me</span>,
    placement: "left",
  },
};

export const Right = {
  args: {
    content: "Right tooltip",
    children: <span style={{ padding: 8, cursor: "pointer" }}>Hover me</span>,
    placement: "right",
  },
};
