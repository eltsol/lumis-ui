import type { Decorator, Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/design-system/providers";
import "../src/design-system/tokens.css";

const withTheme: Decorator = (Story, context) => {
  const mode = context.globals.theme || "light";
  return (
    <ThemeProvider defaultMode={mode}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
    docs: {
      toc: true,
    },
  },
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Toggle between light and dark mode",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
