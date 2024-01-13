import React, { forwardRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ children }, ref) => {
  return (
    <dialog className="modal" ref={ref}>
      <div className="modal-box bg-[#F9F8E4] md:min-w-[734px] md:max-h-[770px] overflow-hidden">
        {children}
      </div>
    </dialog>
  );
});

Modal.displayName = 'Modal';

export default Modal;
