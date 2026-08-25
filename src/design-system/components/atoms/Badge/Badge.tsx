import "./Badge.scss";
import { BadgeProps } from "./Badge.types";

export const Badge = ({
  variant = "primary",
  size = "md",
  dot = false,
  dotOnly = false,
  children,
  className,
  ...props
}: BadgeProps) => {
  const badgeClassName = [
    "badge badge__root",
    `badge--${variant}`,
    `badge--${size}`,
    dot ? "badge--dot" : "",
    dotOnly ? "badge--dot-only" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClassName} {...props}>
      {children}
    </span>
  );
};
