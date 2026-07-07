import styles from "./Badge.module.css";
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
    styles.badge,
    styles[variant],
    styles[size],
    dot ? styles.dot : "",
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
