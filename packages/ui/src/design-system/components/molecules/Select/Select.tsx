import { useId } from "react";
import "./Select.scss";
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
  id,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  ...props
}: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? `select-${generatedId}`;
  const messageId = `${selectId}-message`;
  const describedBy =
    [ariaDescribedBy, helperText || errorMessage ? messageId : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`select__wrapper ${fullWidth ? "select--fullWidth" : ""}`}>
      {label && (
        <label className="select__label" htmlFor={selectId}>
          {label}
        </label>
      )}

      <div
        className={`select__selectContainer ${error ? "select__selectContainer--error" : ""}`}
      >
        <select
          className="select__select"
          id={selectId}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid ?? (error || undefined)}
          {...props}
        >
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
        <span className="select__arrow" />
      </div>

      {error && errorMessage ? (
        <span className="select__errorText" id={messageId}>
          {errorMessage}
        </span>
      ) : (
        helperText && (
          <span className="select__helperText" id={messageId}>
            {helperText}
          </span>
        )
      )}
    </div>
  );
};
