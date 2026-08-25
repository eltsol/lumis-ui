import { useState } from "react";
import { Snackbar } from "./Snackbar";

export default {
  title: "Molecules/Snackbar",
  component: Snackbar,
};

function UseSnackbarDefault() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Snackbar</button>
      <Snackbar
        isOpen={isOpen}
        message="Changes saved successfully"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export const Default = {
  render: () => <UseSnackbarDefault />,
};

function UseSnackbarWithAction() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Snackbar</button>
      <Snackbar
        isOpen={isOpen}
        message="Photo deleted"
        actionLabel="UNDO"
        onAction={() => {}}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export const WithAction = {
  render: () => <UseSnackbarWithAction />,
};
