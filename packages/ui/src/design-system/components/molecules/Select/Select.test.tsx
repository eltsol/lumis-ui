import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ];

  it("renders select element", () => {
    render(<Select options={options} />);
    expect(document.querySelector("select")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<Select label="Choose" options={options} />);
    expect(screen.getByText("Choose")).toBeInTheDocument();
  });

  it("renders placeholder option", () => {
    render(<Select placeholder="Select..." options={options} />);
    expect(screen.getByText("Select...")).toBeInTheDocument();
  });

  it("renders options", () => {
    render(<Select options={options} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Select helperText="Pick one" options={options} />);
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("renders error message when error is true", () => {
    render(<Select error errorMessage="Required" options={options} />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("does not render helper text when error is true", () => {
    render(
      <Select
        error
        errorMessage="Error"
        helperText="Helper"
        options={options}
      />,
    );
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  it("applies fullWidth class", () => {
    render(<Select fullWidth options={options} />);
    expect(document.querySelector(".select--fullWidth")).toBeInTheDocument();
  });

  it("applies error class to container", () => {
    render(<Select error options={options} />);
    expect(
      document.querySelector(".select__selectContainer--error"),
    ).toBeInTheDocument();
  });

  it("renders disabled option", () => {
    render(
      <Select options={[{ label: "Disabled", value: "1", disabled: true }]} />,
    );
    expect(screen.getByText("Disabled")).toHaveAttribute("disabled");
  });

  it("renders arrow element", () => {
    render(<Select options={options} />);
    expect(document.querySelector(".select__arrow")).toBeInTheDocument();
  });
});
