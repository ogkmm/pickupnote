import React from 'react';
import SharingOptionButton from './button/SharingOptionButton';

const SharingOptionGroup = () => {
  return (
    <>
      <div className="w-full pt-[16px] pb-[24px] rounded-[12px] bg-white">
        <div id="group" className="flex">
          <div>
            <SharingOptionButton type="download" />
          </div>
          <div className="border-l-[1px] h-[70px] bg-[#CACBC9]" />
          <div id="social" className="flex flex-wrap gap-y-[12px]">
            <SharingOptionButton type="Instgram" />
            <SharingOptionButton type="Facebook" />
            <SharingOptionButton type="X" />
            <SharingOptionButton type="Redbook" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SharingOptionGroup;
