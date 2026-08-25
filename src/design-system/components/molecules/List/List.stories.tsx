import { List } from "./List";

export default {
  title: "Molecules/List",
  component: List,
};

const items = [
  { label: "Inbox", secondary: "3 new messages" },
  { label: "Sent", secondary: "Last sent 2 hours ago" },
  { label: "Drafts", secondary: "1 unsaved draft" },
  { label: "Trash" },
];

export const Default = {
  args: {
    items,
  },
};

export const Dense = {
  args: {
    items,
    dense: true,
  },
};

export const WithLeading = {
  args: {
    items: items.map((item) => ({ ...item, leading: "📧" })),
  },
};

export const WithSelection = {
  args: {
    items: items.map((item, i) => ({ ...item, selected: i === 0 })),
  },
};

export const WithDisabled = {
  args: {
    items: items.map((item, i) => ({
      ...item,
      disabled: i === items.length - 1,
    })),
  },
};
