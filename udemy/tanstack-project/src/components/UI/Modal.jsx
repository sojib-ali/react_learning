import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    const handleCancel = (e) => {
      e.preventDefault(); // stops dialog from auto-closing
      onClose();
    };

    modal.addEventListener("cancel", handleCancel);

    return () => {
      modal.removeEventListener("cancel", handleCancel);
      modal.close();
    };
  }, [onClose]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
