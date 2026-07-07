import {
  createContext,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import {
  createTheme,
  tokensToVars,
  type Theme,
  type ThemeMode,
} from "@lumis-ui/tokens";

export interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  defaultMode?: ThemeMode;
  children: ReactNode;
}

export const ThemeProvider = ({
  defaultMode = "light",
  children,
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const theme = createTheme(mode);
  const cssVars = tokensToVars(theme);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      <div data-lumis-theme={mode} style={cssVars as CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
