import { useEffect, useRef } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  label,
  helperText,
  error = false,
  errorMessage,
  checked,
  indeterminate = false,
  onChange,
  icon,
  id,
  disabled,
  ...props
}: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={checkboxId}>
        <input
          ref={inputRef}
          type="checkbox"
          className={styles.input}
          id={checkboxId}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span className={`${styles.checkmark} ${error ? styles.error : ""}`}>
          {icon || <span className={styles.defaultIcon} />}
        </span>
        {label && <span className={styles.text}>{label}</span>}
      </label>

      {error && errorMessage ? (
        <span className={styles.errorText}>{errorMessage}</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
};
