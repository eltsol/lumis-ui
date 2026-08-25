import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Snackbar } from "./Snackbar";

describe("Snackbar", () => {
  it("does not render when isOpen is false", () => {
    render(<Snackbar isOpen={false} message="Test" onClose={() => {}} />);
    expect(screen.queryByText("Test")).not.toBeInTheDocument();
  });

  it("renders when isOpen is true", () => {
    render(<Snackbar isOpen message="Test" onClose={() => {}} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders action button when actionLabel is provided", () => {
    render(
      <Snackbar
        isOpen
        message="Test"
        actionLabel="UNDO"
        onAction={() => {}}
        onClose={() => {}}
      />,
    );
    expect(screen.getByText("UNDO")).toBeInTheDocument();
  });

  it("calls onAction when action button is clicked", async () => {
    const handleAction = vi.fn();
    const user = userEvent.setup();
    render(
      <Snackbar
        isOpen
        message="Test"
        actionLabel="UNDO"
        onAction={handleAction}
        onClose={() => {}}
      />,
    );
    await user.click(screen.getByText("UNDO"));
    expect(handleAction).toHaveBeenCalled();
  });

  it("renders close button when no actionLabel", () => {
    render(<Snackbar isOpen message="Test" onClose={() => {}} />);
    expect(screen.getByLabelText("Close")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Snackbar isOpen message="Test" onClose={handleClose} />);
    await user.click(screen.getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("does not render close button when actionLabel is provided", () => {
    render(
      <Snackbar
        isOpen
        message="Test"
        actionLabel="UNDO"
        onAction={() => {}}
        onClose={() => {}}
      />,
    );
    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
  });
});
