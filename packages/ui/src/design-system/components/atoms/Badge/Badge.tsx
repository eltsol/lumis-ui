import "./Badge.scss";
import { BadgeProps } from "./Badge.types";

export const Badge = ({
  variant = "primary",
  size = "md",
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) => {
  const badgeClassName = [
    "Badge Badge__root",
    `Badge--${variant}`,
    `Badge--${size}`,
    dot ? "Badge--dot" : "",
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
