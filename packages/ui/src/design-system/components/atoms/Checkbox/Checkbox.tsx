import { useEffect, useRef } from "react";
import "./Checkbox.scss";
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
    <div className="Checkbox Checkbox__wrapper">
      <label className="Checkbox__label" htmlFor={checkboxId}>
        <input
          ref={inputRef}
          type="checkbox"
          className="Checkbox__input"
          id={checkboxId}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span
          className={`Checkbox__checkmark ${error ? "Checkbox__checkmark--error" : ""}`}
        >
          {icon || <span className="Checkbox__defaultIcon" />}
        </span>
        {label && <span className="Checkbox__text">{label}</span>}
      </label>

      {error && errorMessage ? (
        <span className="Checkbox__errorText">{errorMessage}</span>
      ) : (
        helperText && <span className="Checkbox__helperText">{helperText}</span>
      )}
    </div>
  );
};
