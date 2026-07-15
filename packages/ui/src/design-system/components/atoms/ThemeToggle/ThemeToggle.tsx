import { useContext } from "react";
import "./ThemeToggle.scss";
import { ThemeToggleProps } from "./ThemeToggle.types";
import { ThemeContext } from "../../../providers";

export const ThemeToggle = ({ className, ...props }: ThemeToggleProps) => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeToggle must be used within ThemeProvider");
  }

  const { mode, setMode } = context;

  return (
    <button
      className={`theme-toggle theme-toggle__root ${className || ""}`}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      {...props}
    >
      <span className="theme-toggle__icon">
        {mode === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
};
