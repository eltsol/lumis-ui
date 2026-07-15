import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "../../../providers";
import type { ThemeMode } from "@lumis-ui/tokens";

describe("ThemeToggle", () => {
  const renderToggle = (defaultMode: ThemeMode = "light") =>
    render(
      <ThemeProvider defaultMode={defaultMode}>
        <ThemeToggle />
      </ThemeProvider>,
    );

  it("renders toggle button", () => {
    renderToggle();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("shows moon icon in light mode", () => {
    renderToggle("light");
    expect(screen.getByText("🌙")).toBeInTheDocument();
  });

  it("shows sun icon in dark mode", () => {
    renderToggle("dark");
    expect(screen.getByText("☀️")).toBeInTheDocument();
  });

  it("toggles from light to dark mode", async () => {
    const user = userEvent.setup();
    renderToggle("light");
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("☀️")).toBeInTheDocument();
  });

  it("toggles from dark to light mode", async () => {
    const user = userEvent.setup();
    renderToggle("dark");
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("🌙")).toBeInTheDocument();
  });

  it("has correct aria-label", () => {
    renderToggle("light");
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Switch to dark mode",
    );
  });

  it("throws error when used outside ThemeProvider", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    expect(() => render(<ThemeToggle />)).toThrow(
      "ThemeToggle must be used within ThemeProvider",
    );
    consoleError.mockRestore();
  });

  it("forwards custom className", () => {
    render(
      <ThemeProvider defaultMode="light">
        <ThemeToggle className="custom" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass("custom");
  });
});
