import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export const Input = ({
                          label,
                          helperText,
                          error = false,
                          errorMessage,
                          fullWidth = false,
                          leftIcon,
                          rightIcon,
                          ...props
                      }: InputProps) => {
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