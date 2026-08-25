import { useId } from "react";
import "./Switch.scss";
import { SwitchProps } from "./Switch.types";

export const Switch = ({
  label,
  checked,
  onChange,
  id,
  disabled,
  ...props
}: SwitchProps) => {
  const generatedId = useId();
  const switchId = id ?? `switch-${generatedId}`;

  return (
    <label className="switch__label" htmlFor={switchId}>
      <input
        type="checkbox"
        className="switch__input"
        id={switchId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="switch__track">
        <span className="switch__thumb" />
      </span>
      {label && <span className="switch__text">{label}</span>}
    </label>
  );
};
