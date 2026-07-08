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
  const switchId = id || `switch-${Math.random().toString(36).slice(2, 9)}`;

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
