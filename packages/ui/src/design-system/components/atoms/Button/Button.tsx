import styles from "./Button.module.css";
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
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={isDisabled} {...props}>
      {loading ? (
        <span className={styles.loader}>Loading...</span>
      ) : (
        <>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
          <span className={styles.label}>{children}</span>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
