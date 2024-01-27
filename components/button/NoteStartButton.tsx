import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';
import StreamlineStartupSolid from '../svgs/EditSquareRounded';

interface RetrievalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const RetrievalButton = forwardRef<
  HTMLButtonElement,
  RetrievalButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'group opacity-[.85] rounded-[8px] bg-[#423FA1] p-1 text-xs text-white hover:opacity-100 transition-opacity duration-300 ease-in-out',
        className
      )}
      ref={ref}
      {...props}
    >
      <StreamlineStartupSolid className="opacity-[.85] group-hover:opacity-100 m-auto w-[24px] h-[24px] text-white" />
    </button>
  );
});

RetrievalButton.displayName = 'RetrievalButton';

export default RetrievalButton;
