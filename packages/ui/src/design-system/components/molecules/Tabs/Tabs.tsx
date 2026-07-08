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
    "tabs tabs__root",
    fullWidth ? "tabs--fullWidth" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabsClassName} role="tablist" {...props}>
      {tabs.map((tab) => {
        const isActive = tab.value === value;
        const tabClassName = [
          "tabs__tab",
          isActive ? "tabs__tab--active" : "",
          tab.disabled ? "tabs__tab--disabled" : "",
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
            {tab.icon && <span className="tabs__icon">{tab.icon}</span>}
            <span className="tabs__label">{tab.label}</span>
            {isActive && <span className="tabs__indicator" />}
          </button>
        );
      })}
    </div>
  );
};
