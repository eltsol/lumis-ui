import { useRef } from "react";
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
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsClassName = [
    "tabs tabs__root",
    fullWidth ? "tabs--fullWidth" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabsClassName} role="tablist" {...props}>
      {tabs.map((tab, index) => {
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
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            className={tabClassName}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.value)}
            onKeyDown={(event) => {
              const enabledTabs = tabs
                .map((item, itemIndex) => ({ item, itemIndex }))
                .filter(({ item }) => !item.disabled);
              const currentIndex = enabledTabs.findIndex(
                ({ itemIndex }) => itemIndex === index,
              );
              let nextIndex = currentIndex;

              if (event.key === "ArrowRight") {
                nextIndex = (currentIndex + 1) % enabledTabs.length;
              }
              if (event.key === "ArrowLeft") {
                nextIndex =
                  (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
              }
              if (event.key === "Home") nextIndex = 0;
              if (event.key === "End") nextIndex = enabledTabs.length - 1;
              if (nextIndex === currentIndex || nextIndex < 0) return;

              event.preventDefault();
              const nextTab = enabledTabs[nextIndex];
              if (!nextTab) return;
              tabRefs.current[nextTab.itemIndex]?.focus();
              onChange(nextTab.item.value);
            }}
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
