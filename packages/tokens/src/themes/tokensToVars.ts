import type { Theme } from "./Theme";

const toKebab = (s: string): string =>
  s.replace(/([A-Z])/g, "-$1").toLowerCase();

function flatten(
  obj: Record<string, unknown>,
  prefix: string,
): Record<string, string> {
  return Object.entries(obj).reduce(
    (acc, [key, val]) => {
      const cssKey = `${prefix}-${toKebab(key)}`;
      if (typeof val === "object" && val !== null) {
        Object.assign(acc, flatten(val as Record<string, unknown>, cssKey));
      } else {
        acc[cssKey] = String(val);
      }
      return acc;
    },
    {} as Record<string, string>,
  );
}

/**
 * Converts a Theme object into a flat map of CSS custom properties.
 *
 * @example
 * tokensToVars(lightTheme)
 * // { '--lumis-colors-primary': '#6750A4', '--lumis-spacing-sm': '8px', ... }
 */
export function tokensToVars(theme: Theme): Record<string, string> {
  const { mode: _mode, ...rest } = theme;
  return flatten(rest as Record<string, unknown>, "--lm");
}
