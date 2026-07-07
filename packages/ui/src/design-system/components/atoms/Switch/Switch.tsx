import styles from "./Switch.module.css";
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
    <label className={styles.label} htmlFor={switchId}>
      <input
        type="checkbox"
        className={styles.input}
        id={switchId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
};
