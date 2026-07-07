import { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "Organisms/Modal",
  component: Modal,
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Title"
        >
          <p>This is the modal content.</p>
        </Modal>
      </>
    );
  },
};

export const WithDescription = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
          description="This action cannot be undone."
        >
          <p>Are you sure you want to proceed?</p>
        </Modal>
      </>
    );
  },
};

export const Large = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Large Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
          title="Large Modal"
        >
          <p>Wider modal content goes here.</p>
        </Modal>
      </>
    );
  },
};
