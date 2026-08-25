import { palette } from "../color/palette";
import { spacing } from "../spacing/spacing";
import { shape } from "../shape/shape";
import { elevation } from "../elevation/elevation";
import { typography } from "../typography/typography";
import { motion } from "../motion/motion";
import type { Theme } from "./Theme";

export const darkTheme = {
  color: {
    primary: palette.primary[80],
    onPrimary: palette.neutral[10],
    surface: palette.neutral[10],
    surfaceVariant: palette.neutral[20],
    onSurface: palette.neutral[100],
    outline: palette.neutral[40],
    success: palette.success[90],
    onSuccess: palette.neutral[10],
    warning: palette.warning[90],
    onWarning: palette.neutral[10],
    error: palette.error[90],
    onError: palette.neutral[10],
    background: palette.neutral[0],
  },
  spacing,
  shape,
  elevation,
  typography,
  motion,
  mode: "dark",
} satisfies Theme;
