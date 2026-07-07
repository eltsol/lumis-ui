import { Divider } from "./Divider";

export default {
  title: "Atoms/Divider",
  component: Divider,
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical = {
  args: {
    orientation: "vertical",
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ height: 100, display: "flex", alignItems: "center" }}>
        <div
          style={{ width: 40, background: "var(--lm-color-surface-variant)" }}
        />
        <Story />
        <div
          style={{ width: 40, background: "var(--lm-color-surface-variant)" }}
        />
      </div>
    ),
  ],
};
