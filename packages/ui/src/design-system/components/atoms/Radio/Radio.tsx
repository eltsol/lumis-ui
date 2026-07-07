import styles from "./Radio.module.css";
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
    <label className={styles.label} htmlFor={radioId}>
      <input
        type="radio"
        className={styles.input}
        id={radioId}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className={styles.radiomark}>
        {icon || <span className={styles.defaultIcon} />}
      </span>
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
};
