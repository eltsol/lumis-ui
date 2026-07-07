import { useState } from "react";
import { Tabs } from "./Tabs";

export default {
  title: "Molecules/Tabs",
  component: Tabs,
};

const tabs = [
  { label: "Overview", value: "overview" },
  { label: "Details", value: "details" },
  { label: "Settings", value: "settings" },
];

export const Default = {
  render: () => {
    const [value, setValue] = useState("overview");
    return <Tabs tabs={tabs} value={value} onChange={setValue} />;
  },
};

export const WithIcons = {
  render: () => {
    const [value, setValue] = useState("overview");
    return (
      <Tabs
        tabs={tabs.map((tab) => ({ ...tab, icon: "📄" }))}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const FullWidth = {
  render: () => {
    const [value, setValue] = useState("overview");
    return (
      <div style={{ width: 400 }}>
        <Tabs tabs={tabs} value={value} onChange={setValue} fullWidth />
      </div>
    );
  },
};

export const WithDisabled = {
  render: () => {
    const [value, setValue] = useState("overview");
    return (
      <Tabs
        tabs={tabs.map((tab, i) => ({ ...tab, disabled: i === 2 }))}
        value={value}
        onChange={setValue}
      />
    );
  },
};
