import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { LuRefreshCcw } from 'react-icons/lu';

interface ReselectRetrievalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isExcutable: boolean;
}

const ReselectRetrievalButton: FC<ReselectRetrievalButtonProps> = ({
  className,
  isExcutable,
  ...props
}) => {
  return (
    <div className="py-[4px] flex">
      <button
        className={cn(
          'flex gap-[8px] items-center text-[#757771]',
          {
            'text-black': isExcutable
          },
          className
        )}
        {...props}
      >
        <LuRefreshCcw />
        <p className="text-[16px] font-[500] leading-[22.5px]">重选曲目</p>
      </button>
    </div>
  );
};

export default ReselectRetrievalButton;
