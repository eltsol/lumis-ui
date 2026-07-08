import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("renders input field", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<TextField label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<TextField helperText="Enter your username" />);
    expect(screen.getByText("Enter your username")).toBeInTheDocument();
  });

  it("renders error message when error is true", () => {
    render(<TextField error errorMessage="Username is required" />);
    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  it("does not render helper text when error is true", () => {
    render(<TextField error errorMessage="Error" helperText="Helper" />);
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  it("applies fullWidth class", () => {
    render(<TextField fullWidth />);
    expect(document.querySelector(".textfield--fullWidth")).toBeInTheDocument();
  });

  it("applies error class to input container", () => {
    render(<TextField error />);
    expect(
      document.querySelector(".textfield__inputContainer--error"),
    ).toBeInTheDocument();
  });

  it("renders left and right icons", () => {
    render(<TextField leftIcon="👤" rightIcon="🔍" />);
    expect(screen.getByText("👤")).toBeInTheDocument();
    expect(screen.getByText("🔍")).toBeInTheDocument();
  });

  it("forwards input props", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<TextField onChange={handleChange} />);
    await user.type(screen.getByRole("textbox"), "hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("forwards placeholder", () => {
    render(<TextField placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });
});
