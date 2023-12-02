import { retrievalButtonText } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface RetrievalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const RetrievalButton = forwardRef<
  HTMLButtonElement,
  RetrievalButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'bg-[#423FA1] opacity-[.85] rounded-[8px] py-2 px-8 text-xs text-white hover:opacity-100 transition-opacity duration-300 ease-in-out',
        className
      )}
      ref={ref}
      {...props}
    >
      <p>{retrievalButtonText}</p>
    </button>
  );
});

RetrievalButton.displayName = 'RetrievalButton';

export default RetrievalButton;
