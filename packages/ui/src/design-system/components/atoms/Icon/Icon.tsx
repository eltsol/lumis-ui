import "./Icon.scss";
import { IconProps } from "./Icon.types";

export const Icon = ({
  children,
  size = "md",
  label,
  className,
  ...props
}: IconProps) => {
  const iconClassName = ["Icon Icon__root", `Icon--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={iconClassName} role="img" aria-label={label} {...props}>
      {children}
    </span>
  );
};
