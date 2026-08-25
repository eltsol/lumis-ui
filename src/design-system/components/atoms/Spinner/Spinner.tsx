import "./Spinner.scss";
import { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  size = "md",
  label,
  className,
  ...props
}: SpinnerProps) => {
  const spinnerClassName = ["spinner spinner__wrapper", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={spinnerClassName}
      role="status"
      aria-label={label || "Loading"}
      {...props}
    >
      <span className={`spinner__root spinner--${size}`} />
      {label && <span className="spinner__label">{label}</span>}
    </div>
  );
};
