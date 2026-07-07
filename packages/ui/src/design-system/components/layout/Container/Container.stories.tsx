import { Container } from "./Container";

export default {
  title: "Layout/Container",
  component: Container,
};

export const Default = {
  args: {
    children: (
      <div
        style={{ padding: 16, background: "var(--lm-color-surface-variant)" }}
      >
        Content
      </div>
    ),
    maxWidth: "xl",
    centered: true,
  },
};

export const Small = {
  args: {
    children: (
      <div
        style={{ padding: 16, background: "var(--lm-color-surface-variant)" }}
      >
        Narrow content
      </div>
    ),
    maxWidth: "sm",
  },
};

export const NoPadding = {
  args: {
    children: (
      <div
        style={{ padding: 16, background: "var(--lm-color-surface-variant)" }}
      >
        Edge to edge
      </div>
    ),
    padding: "none",
  },
};
