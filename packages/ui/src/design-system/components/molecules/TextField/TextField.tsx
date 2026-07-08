import "./TextField.scss";
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
    <div
      className={`TextField__wrapper ${fullWidth ? "TextField--fullWidth" : ""}`}
    >
      {label && <label className="TextField__label">{label}</label>}

      <div
        className={`TextField__inputContainer ${error ? "TextField__inputContainer--error" : ""}`}
      >
        {leftIcon && <span className="TextField__icon">{leftIcon}</span>}

        <input className="TextField__input" {...props} />

        {rightIcon && <span className="TextField__icon">{rightIcon}</span>}
      </div>

      {error && errorMessage ? (
        <span className="TextField__errorText">{errorMessage}</span>
      ) : (
        helperText && (
          <span className="TextField__helperText">{helperText}</span>
        )
      )}
    </div>
  );
};
