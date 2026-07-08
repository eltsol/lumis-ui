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
    "button button__root",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--fullwidth" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={isDisabled} {...props}>
      {loading ? (
        <span className="button__loader">Loading...</span>
      ) : (
        <>
          {leftIcon && <span className="button__icon">{leftIcon}</span>}
          <span className="button__label">{children}</span>
          {rightIcon && <span className="button__icon">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
