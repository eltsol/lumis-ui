import { Badge } from "./Badge";

export default {
  title: "Atoms/Badge",
  component: Badge,
};

export const Primary = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Success = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Error = {
  args: {
    children: "Error",
    variant: "error",
  },
};

export const DotOnly = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge variant="primary" dotOnly />
      <Badge variant="success" dotOnly />
      <Badge variant="warning" dotOnly />
      <Badge variant="error" dotOnly />
    </div>
  ),
};
