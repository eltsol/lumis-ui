import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  const tabs = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
  ];

  it("renders tab buttons", () => {
    render(<Tabs tabs={tabs} value="tab1" onChange={() => {}} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("sets active tab", () => {
    render(<Tabs tabs={tabs} value="tab1" onChange={() => {}} />);
    const tabButtons = screen.getAllByRole("tab");
    expect(tabButtons[0]).toHaveAttribute("aria-selected", "true");
    expect(tabButtons[1]).toHaveAttribute("aria-selected", "false");
  });

  it("calls onChange when tab is clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} value="tab1" onChange={handleChange} />);
    await user.click(screen.getByText("Tab 2"));
    expect(handleChange).toHaveBeenCalledWith("tab2");
  });

  it("does not call onChange when tab is disabled", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[{ label: "Tab", value: "tab", disabled: true }]}
        value="tab"
        onChange={handleChange}
      />,
    );
    await user.click(screen.getByText("Tab"));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies disabled class to disabled tab", () => {
    render(
      <Tabs
        tabs={[{ label: "Tab", value: "tab", disabled: true }]}
        value="tab"
        onChange={() => {}}
      />,
    );
    expect(document.querySelector(".tabs__tab--disabled")).toBeInTheDocument();
  });

  it("applies fullWidth class", () => {
    render(<Tabs tabs={tabs} value="tab1" onChange={() => {}} fullWidth />);
    expect(document.querySelector(".tabs__root")).toHaveClass(
      "tabs--fullWidth",
    );
  });

  it("renders icon when provided", () => {
    render(
      <Tabs
        tabs={[{ label: "Tab", value: "tab", icon: "★" }]}
        value="tab"
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("renders indicator on active tab", () => {
    render(<Tabs tabs={tabs} value="tab1" onChange={() => {}} />);
    expect(document.querySelector(".tabs__indicator")).toBeInTheDocument();
  });

  it("sets role tablist", () => {
    render(<Tabs tabs={tabs} value="tab1" onChange={() => {}} />);
    expect(document.querySelector('[role="tablist"]')).toBeInTheDocument();
  });

  it("forwards custom className", () => {
    render(
      <Tabs tabs={tabs} value="tab1" onChange={() => {}} className="custom" />,
    );
    expect(document.querySelector(".tabs__root")).toHaveClass("custom");
  });
});
