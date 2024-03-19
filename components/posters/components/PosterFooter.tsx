import React from 'react';
import { getCurrentDate } from '@/lib/utils';

const PosterFooter: React.FC = () => {
  return (
    <div className="w-full flex justify-between text-[26px] font-[300] leading-none tracking-[-.4px] text-[#757771]">
      <p>{'www.pickupnote.com'}</p>
      <p>{getCurrentDate()}</p>
    </div>
  );
};

export default PosterFooter;
