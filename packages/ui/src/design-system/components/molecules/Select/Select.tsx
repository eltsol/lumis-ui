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
  ...props
}: SelectProps) => {
  return (
    <div className={`select__wrapper ${fullWidth ? "select--fullWidth" : ""}`}>
      {label && <label className="select__label">{label}</label>}

      <div
        className={`select__selectContainer ${error ? "select__selectContainer--error" : ""}`}
      >
        <select className="select__select" {...props}>
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
        <span className="select__errorText">{errorMessage}</span>
      ) : (
        helperText && <span className="select__helperText">{helperText}</span>
      )}
    </div>
  );
};
