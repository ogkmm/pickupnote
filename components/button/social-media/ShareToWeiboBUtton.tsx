import React from 'react';
import { WeiboIcon } from '@/components/svgs/sharing-options';

const ShareToWeiboButton = () => {
  return (
    <div className="group flex flex-col gap-[4px] justify-start items-center">
      <WeiboIcon className="group-hover:opacity-80 transition-opacity-smooth" />
      <p className="group-hover:opacity-80 transition-opacity-smooth text-[17px] text-white font-[400] leading-[22.5px] tracking-[-.51px]">
        {'weibo'}
      </p>
    </div>
  );
};

export default ShareToWeiboButton;
