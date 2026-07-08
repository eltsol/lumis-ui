import "./Tabs.scss";
import { TabsProps } from "./Tabs.types";

export const Tabs = ({
  tabs,
  value,
  onChange,
  fullWidth = false,
  className,
  ...props
}: TabsProps) => {
  const tabsClassName = [
    "Tabs Tabs__root",
    fullWidth ? "Tabs--fullWidth" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabsClassName} role="tablist" {...props}>
      {tabs.map((tab) => {
        const isActive = tab.value === value;
        const tabClassName = [
          "Tabs__tab",
          isActive ? "Tabs__tab--active" : "",
          tab.disabled ? "Tabs__tab--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={tab.value}
            className={tabClassName}
            role="tab"
            aria-selected={isActive}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.value)}
          >
            {tab.icon && <span className="Tabs__icon">{tab.icon}</span>}
            <span className="Tabs__label">{tab.label}</span>
            {isActive && <span className="Tabs__indicator" />}
          </button>
        );
      })}
    </div>
  );
};
