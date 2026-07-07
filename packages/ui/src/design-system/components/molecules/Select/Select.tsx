import styles from "./Select.module.css";
import { SelectProps } from "./Select.types";

export const Select = ({
  label,
  helperText,
  error = false,
  errorMessage,
  options,
  placeholder,
  fullWidth = false,
  children,
  ...props
}: SelectProps) => {
  return (
    <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""}`}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={`${styles.selectContainer} ${error ? styles.error : ""}`}>
        <select className={styles.select} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
          {children}
        </select>
        <span className={styles.arrow} />
      </div>

      {error && errorMessage ? (
        <span className={styles.errorText}>{errorMessage}</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
};
