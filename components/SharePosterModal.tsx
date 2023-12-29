import React, { forwardRef } from 'react';
import Modal from './modal/Modal';
import AppearenceCollapse from './collapse/AppearenceCollapse';
import AspectRatioCollapse from './collapse/AspectRatioCollapse';
import PatternCollapse from './collapse/PatternCollapse';

interface SharePosterModalProps {
  onClose(): void;
}

const SharePosterModal = forwardRef<HTMLDialogElement, SharePosterModalProps>(
  ({ onClose }, ref) => {
    return (
      <Modal ref={ref}>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <p className="font-bold text-center text-[25px/31px] mb-[32px]">
          分享海报
        </p>
        <div className="flex justify-between gap-[24px]">
          <div className="max-w-[311px] flex flex-col gap-[16px]">
            <AppearenceCollapse
              onRadioChange={(list) => {
                console.log(list);
              }}
            />
            <AspectRatioCollapse
              onRadioChange={(index) => {
                console.log(index);
              }}
            />
            <PatternCollapse
              onRadioChange={(index) => {
                console.log(index);
              }}
            />
          </div>
          <div className="flex flex-col min-w-[327px]"></div>
        </div>
      </Modal>
    );
  }
);

SharePosterModal.displayName = 'SharePosterModal';

export default SharePosterModal;
