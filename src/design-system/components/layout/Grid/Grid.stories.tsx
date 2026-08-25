import { Grid } from "./Grid";

const Box = ({ children }: { children: string }) => (
  <div
    style={{
      padding: 24,
      background: "var(--lm-color-surface-variant)",
      borderRadius: "var(--lm-shape-xs)",
      textAlign: "center",
    }}
  >
    {children}
  </div>
);

export default {
  title: "Layout/Grid",
  component: Grid,
};

export const TwoColumns = {
  args: {
    columns: 2,
    gap: "md",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </>
    ),
  },
};

export const ThreeColumns = {
  args: {
    columns: 3,
    gap: "lg",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </>
    ),
  },
};

export const CustomColumns = {
  args: {
    columns: "2fr 1fr",
    gap: "md",
    children: (
      <>
        <Box>Main</Box>
        <Box>Side</Box>
      </>
    ),
  },
};
