import { useState } from "react";
import styles from "./Tooltip.module.css";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  content,
  children,
  placement = "top",
  visible: visibleProp,
  className,
  ...props
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const isControlled = visibleProp !== undefined;
  const isVisible = isControlled ? visibleProp : visible;

  const tooltipClassName = [
    styles.wrapper,
    styles[placement],
    isVisible ? styles.visible : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={tooltipClassName}
      onMouseEnter={() => !isControlled && setVisible(true)}
      onMouseLeave={() => !isControlled && setVisible(false)}
      {...props}
    >
      {children}
      <span className={styles.tooltip}>{content}</span>
    </span>
  );
};
