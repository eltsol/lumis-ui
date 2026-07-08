import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders checkbox with label", () => {
    render(
      <Checkbox label="Accept terms" checked={false} onChange={() => {}} />,
    );
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders checkbox input", () => {
    render(<Checkbox label="Accept" checked={false} onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("calls onChange when clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Accept" checked={false} onChange={handleChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders helper text", () => {
    render(
      <Checkbox
        label="Accept"
        checked={false}
        onChange={() => {}}
        helperText="Please accept to continue"
      />,
    );
    expect(screen.getByText("Please accept to continue")).toBeInTheDocument();
  });

  it("renders error message when error is true", () => {
    render(
      <Checkbox
        label="Accept"
        checked={false}
        onChange={() => {}}
        error
        errorMessage="You must accept"
      />,
    );
    expect(screen.getByText("You must accept")).toBeInTheDocument();
  });

  it("does not render helper text when error is true", () => {
    render(
      <Checkbox
        label="Accept"
        checked={false}
        onChange={() => {}}
        error
        errorMessage="Error"
        helperText="Helper"
      />,
    );
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  it("disables checkbox when disabled is true", () => {
    render(
      <Checkbox label="Accept" checked={false} onChange={() => {}} disabled />,
    );
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("applies error class to checkmark", () => {
    render(
      <Checkbox label="Accept" checked={false} onChange={() => {}} error />,
    );
    expect(
      document.querySelector(".checkbox__checkmark--error"),
    ).toBeInTheDocument();
  });
});
