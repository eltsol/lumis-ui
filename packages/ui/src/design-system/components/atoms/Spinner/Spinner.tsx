import styles from "./Spinner.module.css";
import { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  size = "md",
  label,
  className,
  ...props
}: SpinnerProps) => {
  const spinnerClassName = [styles.wrapper, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={spinnerClassName}
      role="status"
      aria-label={label || "Loading"}
      {...props}
    >
      <span className={`${styles.spinner} ${styles[size]}`} />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
