import FacebookIcon from '@/components/svgs/sharing-options/FacebookIcon';
import React from 'react';

const ShareToFacebookButton = () => {
  return (
    <button className="group flex flex-col gap-[4px] justify-start items-center">
      <FacebookIcon className="group-hover:opacity-80 transition-opacity-smooth" />
      <p className="group-hover:opacity-80 transition-opacity-smooth text-[17px] text-white font-[400] leading-[22.5px] tracking-[-.51px]">
        {'Facebook'}
      </p>
    </button>
  );
};

export default ShareToFacebookButton;
