import styles from "./TextField.module.css";
import { TextFieldProps } from "./TextField.types";

export const TextField = ({
  label,
  helperText,
  error = false,
  errorMessage,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ...props
}: TextFieldProps) => {
  return (
    <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""}`}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={`${styles.inputContainer} ${error ? styles.error : ""}`}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

        <input className={styles.input} {...props} />

        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </div>

      {error && errorMessage ? (
        <span className={styles.errorText}>{errorMessage}</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
};
