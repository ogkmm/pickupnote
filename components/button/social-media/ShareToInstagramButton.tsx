import InstagramIcon from '@/components/svgs/sharing-options/InstagramIcon';
import React from 'react';

const ShareToInstagramButton = () => {
  return (
    <button className="group flex flex-col gap-[4px] justify-start items-center">
      <InstagramIcon className="group-hover:opacity-80 transition-opacity-smooth" />
      <p className="group-hover:opacity-80 transition-opacity-smooth text-[17px] text-white font-[400] leading-[22.5px] tracking-[-.51px]">
        {'Instagram'}
      </p>
    </button>
  );
};

export default ShareToInstagramButton;
