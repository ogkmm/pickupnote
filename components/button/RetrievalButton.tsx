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
        'bg-zinc-500 rounded-full py-2 px-8 text-xs text-white hover:bg-green-600 transition-colors duration-300 ease-in-out',
        className
      )}
      ref={ref}
      {...props}
    >
      {retrievalButtonText}
    </button>
  );
});

RetrievalButton.displayName = 'RetrievalButton';

export default RetrievalButton;
