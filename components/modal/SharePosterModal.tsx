import React, { forwardRef } from 'react';
import Modal from './Modal';
import AppearenceCollapse from '../collapse/AppearenceCollapse';
import AspectRatioCollapse from '../collapse/AspectRatioCollapse';
import PatternCollapse from '../collapse/PatternCollapse';
import DeprecatedPoster from '../posters/DeprecatedPoster';
import SharingOptionGroup from '../SharingOptionGroup';

interface SharePosterModalProps {
  onClose(): void;
  detail: any;
}

const SharePosterModal = forwardRef<HTMLDialogElement, SharePosterModalProps>(
  ({ onClose, detail }, ref) => {
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
          <div className="max-w-[315px] h-full flex flex-col gap-[16px] overflow-auto">
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
          <div className="flex flex-col w-[327px] gap-[16px]">
            <DeprecatedPoster
              posterDetail={detail}
              date={new Date(Date.now()).toISOString()}
            />
            <SharingOptionGroup />
          </div>
        </div>
      </Modal>
    );
  }
);

SharePosterModal.displayName = 'SharePosterModal';

export default SharePosterModal;
