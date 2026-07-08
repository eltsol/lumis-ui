import "./Chip.scss";
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
    "Chip Chip__root",
    `Chip--${variant}`,
    `Chip--${size}`,
    selectable ? "Chip--selectable" : "",
    selected ? "Chip--selected" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={chipClassName} onClick={onClick} {...props}>
      {icon && <span className="Chip__icon">{icon}</span>}
      <span className="Chip__label">{label}</span>
      {onDelete && (
        <button className="Chip__delete" onClick={onDelete} aria-label="Delete">
          ✕
        </button>
      )}
    </span>
  );
};
