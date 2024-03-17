import XIcon from '@/components/svgs/sharing-options/XIcon';
import React from 'react';

const ShareToXButton = () => {
  return (
    <div className="group flex flex-col gap-[4px] justify-start items-center">
      <XIcon className="group-hover:opacity-80 transition-opacity-smooth" />
      <p className="group-hover:opacity-80 transition-opacity-smooth text-[17px] text-white font-[400] leading-[22.5px] tracking-[-.51px]">
        {'x.com'}
      </p>
    </div>
  );
};

export default ShareToXButton;
