import styles from "./Tabs.module.css";
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
    styles.tabs,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabsClassName} role="tablist" {...props}>
      {tabs.map((tab) => {
        const isActive = tab.value === value;
        const tabClassName = [
          styles.tab,
          isActive ? styles.active : "",
          tab.disabled ? styles.disabled : "",
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
            {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
            <span className={styles.label}>{tab.label}</span>
            {isActive && <span className={styles.indicator} />}
          </button>
        );
      })}
    </div>
  );
};
