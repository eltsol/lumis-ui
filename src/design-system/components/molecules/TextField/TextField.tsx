import { useId } from "react";
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
  id,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? `textfield-${generatedId}`;
  const messageId = `${inputId}-message`;
  const describedBy =
    [ariaDescribedBy, helperText || errorMessage ? messageId : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div
      className={`textfield__wrapper ${fullWidth ? "textfield--fullWidth" : ""}`}
    >
      {label && (
        <label className="textfield__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={`textfield__inputContainer ${error ? "textfield__inputContainer--error" : ""}`}
      >
        {leftIcon && <span className="textfield__icon">{leftIcon}</span>}

        <input
          className="textfield__input"
          id={inputId}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid ?? (error || undefined)}
          {...props}
        />

        {rightIcon && <span className="textfield__icon">{rightIcon}</span>}
      </div>

      {error && errorMessage ? (
        <span className="textfield__errorText" id={messageId}>
          {errorMessage}
        </span>
      ) : (
        helperText && (
          <span className="textfield__helperText" id={messageId}>
            {helperText}
          </span>
        )
      )}
    </div>
  );
};
