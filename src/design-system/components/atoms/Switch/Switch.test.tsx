import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders switch with label", () => {
    render(<Switch label="Enable" checked={false} onChange={() => {}} />);
    expect(screen.getByText("Enable")).toBeInTheDocument();
  });

  it("renders checkbox input", () => {
    render(<Switch label="Enable" checked={false} onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("calls onChange when clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch label="Enable" checked={false} onChange={handleChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("disables switch when disabled is true", () => {
    render(
      <Switch label="Enable" checked={false} onChange={() => {}} disabled />,
    );
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("renders track and thumb elements", () => {
    render(<Switch label="Enable" checked={false} onChange={() => {}} />);
    expect(document.querySelector(".switch__track")).toBeInTheDocument();
    expect(document.querySelector(".switch__thumb")).toBeInTheDocument();
  });

  it("generates id from random string when not provided", () => {
    render(<Switch label="Enable" checked={false} onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "id",
      expect.stringMatching(/^switch-/),
    );
  });

  it("uses provided id", () => {
    render(
      <Switch
        label="Enable"
        checked={false}
        onChange={() => {}}
        id="custom-switch"
      />,
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "custom-switch");
  });
});
