import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
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
          {leadingIcon && <span className="button__icon">{leadingIcon}</span>}
          <span className="button__label">{children}</span>
          {trailingIcon && <span className="button__icon">{trailingIcon}</span>}
        </>
      )}
    </button>
  );
};
