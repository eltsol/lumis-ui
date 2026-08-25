import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";
import "./Button.scss";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const rootClassName = [
    "button button__root",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--fullwidth" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = loading ? (
    <span className="button__loader">Loading...</span>
  ) : (
    <>
      {leadingIcon && <span className="button__icon">{leadingIcon}</span>}
      <span className="button__label">{children}</span>
      {trailingIcon && <span className="button__icon">{trailingIcon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, onClick, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <a
        className={rootClassName}
        href={href}
        aria-disabled={isDisabled || undefined}
        onClick={handleClick}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={rootClassName}
      disabled={isDisabled}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
