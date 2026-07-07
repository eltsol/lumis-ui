import styles from "./Chip.module.css";
import { ChipProps } from "./Chip.types";

export const Chip = ({
  variant = "default",
  size = "md",
  label,
  icon,
  onDelete,
  selectable = false,
  selected = false,
  onClick,
  className,
  ...props
}: ChipProps) => {
  const chipClassName = [
    styles.chip,
    styles[variant],
    styles[size],
    selectable ? styles.selectable : "",
    selected ? styles.selected : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={chipClassName} onClick={onClick} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {onDelete && (
        <button
          className={styles.delete}
          onClick={onDelete}
          aria-label="Delete"
        >
          ✕
        </button>
      )}
    </span>
  );
};
