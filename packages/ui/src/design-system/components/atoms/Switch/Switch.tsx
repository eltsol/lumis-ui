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
    <label className="Switch__label" htmlFor={switchId}>
      <input
        type="checkbox"
        className="Switch__input"
        id={switchId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="Switch__track">
        <span className="Switch__thumb" />
      </span>
      {label && <span className="Switch__text">{label}</span>}
    </label>
  );
};
