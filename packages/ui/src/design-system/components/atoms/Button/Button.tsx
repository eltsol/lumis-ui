import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const className = [
    "Button Button__root",
    `Button--${variant}`,
    `Button--${size}`,
    fullWidth ? "Button--fullWidth" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={isDisabled} {...props}>
      {loading ? (
        <span className="Button__loader">Loading...</span>
      ) : (
        <>
          {leftIcon && <span className="Button__icon">{leftIcon}</span>}
          <span className="Button__label">{children}</span>
          {rightIcon && <span className="Button__icon">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
