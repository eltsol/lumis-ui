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
    <label className="Radio__label" htmlFor={radioId}>
      <input
        type="radio"
        className="Radio__input"
        id={radioId}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="Radio__radiomark">
        {icon || <span className="Radio__defaultIcon" />}
      </span>
      {label && <span className="Radio__text">{label}</span>}
    </label>
  );
};
