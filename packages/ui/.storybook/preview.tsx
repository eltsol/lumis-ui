import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/design-system/providers";
import "../src/design-system/tokens.css";

const preview: Preview = {
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
  },
  decorators: [
    (Story, context: any) => {
      const mode = context.globals.theme || "light";
      return (
        <ThemeProvider defaultMode={mode}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
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
