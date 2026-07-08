import "./Radio.scss";
import { RadioProps } from "./Radio.types";

export const Radio = ({
  label,
  value,
  name,
  checked,
  onChange,
  icon,
  id,
  disabled,
  ...props
}: RadioProps) => {
  const radioId = id || `radio-${name}-${value}`;

  return (
    <label className="radio__label" htmlFor={radioId}>
      <input
        type="radio"
        className="radio__input"
        id={radioId}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="radio__radiomark">
        {icon || <span className="radio__defaultIcon" />}
      </span>
      {label && <span className="radio__text">{label}</span>}
    </label>
  );
};
