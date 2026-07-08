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
    <div className={`Select__wrapper ${fullWidth ? "Select--fullWidth" : ""}`}>
      {label && <label className="Select__label">{label}</label>}

      <div
        className={`Select__selectContainer ${error ? "Select__selectContainer--error" : ""}`}
      >
        <select className="Select__select" {...props}>
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
        <span className="Select__arrow" />
      </div>

      {error && errorMessage ? (
        <span className="Select__errorText">{errorMessage}</span>
      ) : (
        helperText && <span className="Select__helperText">{helperText}</span>
      )}
    </div>
  );
};
