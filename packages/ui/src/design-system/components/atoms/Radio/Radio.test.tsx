import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders radio with label", () => {
    render(
      <Radio
        label="Option 1"
        value="1"
        name="group"
        checked={false}
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("renders radio input", () => {
    render(
      <Radio
        label="Option"
        value="1"
        name="group"
        checked={false}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("calls onChange when clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Radio
        label="Option"
        value="1"
        name="group"
        checked={false}
        onChange={handleChange}
      />,
    );
    await user.click(screen.getByRole("radio"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders with correct value and name", () => {
    render(
      <Radio
        label="Option"
        value="opt1"
        name="group1"
        checked={false}
        onChange={() => {}}
      />,
    );
    const radio = screen.getByRole("radio");
    expect(radio).toHaveAttribute("value", "opt1");
    expect(radio).toHaveAttribute("name", "group1");
  });

  it("disables radio when disabled is true", () => {
    render(
      <Radio
        label="Option"
        value="1"
        name="group"
        checked={false}
        onChange={() => {}}
        disabled
      />,
    );
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("renders custom icon when provided", () => {
    render(
      <Radio
        label="Option"
        value="1"
        name="group"
        checked={false}
        onChange={() => {}}
        icon="★"
      />,
    );
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("generates id from name and value", () => {
    render(
      <Radio
        label="Option"
        value="opt1"
        name="group1"
        checked={false}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("radio")).toHaveAttribute(
      "id",
      "radio-group1-opt1",
    );
  });
});
