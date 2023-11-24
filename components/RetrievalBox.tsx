import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { retrievalBoxPlaceHolderText } from '@/lib/constants';

interface RetrievalBoxProps extends React.HTMLAttributes<HTMLInputElement> {}

const RetrievalBox = forwardRef<HTMLInputElement, RetrievalBoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'bg-slate-200 rounded-full py-2 px-4 opacity-70 caret-black dark:text-black placeholder:text-xs',
          className
        )}
        type="url"
        placeholder={retrievalBoxPlaceHolderText}
        ref={ref}
        {...props}
      />
    );
  }
);

RetrievalBox.displayName = 'RetrievalBox';

export default RetrievalBox;
