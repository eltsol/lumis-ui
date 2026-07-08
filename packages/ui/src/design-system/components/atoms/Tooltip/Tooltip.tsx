import { useState } from "react";
import "./Tooltip.scss";
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
    "Tooltip Tooltip__wrapper",
    `Tooltip--${placement}`,
    isVisible ? "Tooltip--visible" : "",
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
      <span className="Tooltip__root">{content}</span>
    </span>
  );
};
