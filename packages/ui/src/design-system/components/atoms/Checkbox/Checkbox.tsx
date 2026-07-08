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
    <div className="checkbox checkbox__wrapper">
      <label className="checkbox__label" htmlFor={checkboxId}>
        <input
          ref={inputRef}
          type="checkbox"
          className="checkbox__input"
          id={checkboxId}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span
          className={`checkbox__checkmark ${error ? "checkbox__checkmark--error" : ""}`}
        >
          {icon || <span className="checkbox__defaultIcon" />}
        </span>
        {label && <span className="checkbox__text">{label}</span>}
      </label>

      {error && errorMessage ? (
        <span className="checkbox__errorText">{errorMessage}</span>
      ) : (
        helperText && <span className="checkbox__helperText">{helperText}</span>
      )}
    </div>
  );
};
