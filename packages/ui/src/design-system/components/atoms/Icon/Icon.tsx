import styles from "./Icon.module.css";
import { IconProps } from "./Icon.types";

export const Icon = ({
  children,
  size = "md",
  label,
  className,
  ...props
}: IconProps) => {
  const iconClassName = [styles.icon, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={iconClassName} role="img" aria-label={label} {...props}>
      {children}
    </span>
  );
};
