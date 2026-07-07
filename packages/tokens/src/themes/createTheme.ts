import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import type { Theme } from "./Theme";

export type ThemeMode = "light" | "dark";

export const createTheme = (mode: ThemeMode): Theme => {
  return mode === "light" ? lightTheme : darkTheme;
};
