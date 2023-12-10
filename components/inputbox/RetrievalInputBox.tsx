import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { retrievalBoxPlaceHolderText } from '@/lib/constants';

interface RetrievalInputBoxProps
  extends React.HTMLAttributes<HTMLInputElement> {}

const RetrievalInputBox = forwardRef<HTMLInputElement, RetrievalInputBoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'min-w-[268px] bg-white hover:bg-[#F6F7F6] focus:bg-[#DFE0DE] rounded-[8px] py-2 px-4 opacity-70 caret-[#423FA1] outline-none dark:text-black placeholder:text-xs',
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

RetrievalInputBox.displayName = 'RetrievalInputBox';

export default RetrievalInputBox;
