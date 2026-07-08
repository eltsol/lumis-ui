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
      className={`textfield__wrapper ${fullWidth ? "textfield--fullWidth" : ""}`}
    >
      {label && <label className="textfield__label">{label}</label>}

      <div
        className={`textfield__inputContainer ${error ? "textfield__inputContainer--error" : ""}`}
      >
        {leftIcon && <span className="textfield__icon">{leftIcon}</span>}

        <input className="textfield__input" {...props} />

        {rightIcon && <span className="textfield__icon">{rightIcon}</span>}
      </div>

      {error && errorMessage ? (
        <span className="textfield__errorText">{errorMessage}</span>
      ) : (
        helperText && (
          <span className="textfield__helperText">{helperText}</span>
        )
      )}
    </div>
  );
};
