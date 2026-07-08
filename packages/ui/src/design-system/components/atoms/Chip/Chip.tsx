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
    "chip chip__root",
    `chip--${variant}`,
    `chip--${size}`,
    selectable ? "chip--selectable" : "",
    selected ? "chip--selected" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={chipClassName} onClick={onClick} {...props}>
      {icon && <span className="chip__icon">{icon}</span>}
      <span className="chip__label">{label}</span>
      {onDelete && (
        <button className="chip__delete" onClick={onDelete} aria-label="Delete">
          ✕
        </button>
      )}
    </span>
  );
};
