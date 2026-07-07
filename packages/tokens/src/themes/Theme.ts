import type { spacing } from "../spacing/spacing";
import type { shape } from "../shape/shape";
import type { elevation } from "../elevation/elevation";
import type { typography } from "../typography/typography";
import type { motion } from "../motion/motion";

export interface ThemeColors {
  primary: string;
  onPrimary: string;
  surface: string;
  surfaceVariant: string;
  onSurface: string;
  outline: string;
  success: string;
  warning: string;
  error: string;
  onError: string;
  background: string;
}

export interface Theme {
  mode: "light" | "dark";
  color: ThemeColors;
  spacing: typeof spacing;
  shape: typeof shape;
  elevation: typeof elevation;
  typography: typeof typography;
  motion: typeof motion;
}
