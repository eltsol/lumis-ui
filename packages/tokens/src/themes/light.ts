import { lightColors } from "../color/semantic";
import { spacing } from "../spacing/spacing";
import { shape } from "../shape/shape";
import { elevation } from "../elevation/elevation";
import { typography } from "../typography/typography";
import { motion } from "../motion/motion";
import type { Theme } from "./Theme";

export const lightTheme = {
  color: lightColors,
  spacing,
  shape,
  elevation,
  typography,
  motion,
  mode: "light",
} satisfies Theme;
