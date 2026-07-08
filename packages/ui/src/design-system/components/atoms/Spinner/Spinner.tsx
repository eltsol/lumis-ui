import "./Spinner.scss";
import { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  size = "md",
  label,
  className,
  ...props
}: SpinnerProps) => {
  const spinnerClassName = ["Spinner Spinner__wrapper", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={spinnerClassName}
      role="status"
      aria-label={label || "Loading"}
      {...props}
    >
      <span className={`Spinner__root Spinner--${size}`} />
      {label && <span className="Spinner__label">{label}</span>}
    </div>
  );
};
