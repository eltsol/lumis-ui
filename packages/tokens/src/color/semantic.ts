import { palette } from "./palette";
import type { ThemeColors } from "../themes/Theme";

export const lightColors: ThemeColors = {
  primary: palette.primary[40],
  onPrimary: palette.neutral[100],
  surface: palette.neutral[99],
  surfaceVariant: palette.neutral[95],
  onSurface: palette.neutral[10],
  outline: palette.neutral[80],
  success: palette.success[40],
  warning: palette.warning[40],
  error: palette.error[40],
  onError: palette.neutral[100],
  background: palette.neutral[100],
};

/** @deprecated use lightColors */
export const colors = lightColors;
