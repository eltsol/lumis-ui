import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("does not render when isOpen is false", () => {
    render(<Modal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });

  it("renders overlay when isOpen is true", () => {
    render(<Modal isOpen onClose={() => {}} />);
    expect(document.querySelector(".modal__overlay")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<Modal isOpen onClose={() => {}} title="Modal Title" />);
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<Modal isOpen onClose={() => {}} description="Description text" />);
    expect(screen.getByText("Description text")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <Modal isOpen onClose={() => {}}>
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Modal isOpen onClose={handleClose} title="Test" />);
    await user.click(screen.getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when overlay is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Modal isOpen onClose={handleClose} />);
    await user.click(document.querySelector(".modal__overlay")!);
    expect(handleClose).toHaveBeenCalled();
  });

  it("does not call onClose when clicking inside modal content", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal isOpen onClose={handleClose}>
        <button>Inner Button</button>
      </Modal>,
    );
    await user.click(screen.getByText("Inner Button"));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("does not call onClose on overlay when closeOnOverlayClick is false", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Modal isOpen onClose={handleClose} closeOnOverlayClick={false} />);
    await user.click(document.querySelector(".modal__overlay")!);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("calls onClose when Escape key is pressed", async () => {
    const handleClose = vi.fn();
    render(<Modal isOpen onClose={handleClose} />);
    await userEvent.setup().keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalled();
  });

  it("sets body overflow to hidden when open", () => {
    render(<Modal isOpen onClose={() => {}} />);
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("applies size class", () => {
    render(<Modal isOpen onClose={() => {}} size="lg" />);
    expect(document.querySelector(".modal--lg")).toBeInTheDocument();
  });
});
