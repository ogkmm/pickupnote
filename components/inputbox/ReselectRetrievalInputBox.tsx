import { retrievalBoxPlaceHolderText } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface ReselectRetrievalInputBoxProps
  extends React.HTMLAttributes<HTMLInputElement> {
  onInputChange: (url: string) => void;
}

const ReselectRetrievalInputBox = forwardRef<
  HTMLInputElement,
  ReselectRetrievalInputBoxProps
>(({ className, onInputChange, ...props }, ref) => {
  return (
    <div className="flex flex-col flex-1">
      <input
        id="rsr-input-box"
        className={cn(
          'group bg-white my-[12px] border-b-black focus:outline-none placeholder:text-[17px] disabled:cursor-not-allowed',
          className
        )}
        type="url"
        placeholder={retrievalBoxPlaceHolderText}
        ref={ref}
        onChange={(e) => onInputChange(e.target.value)}
        {...props}
      />
      <div className="bg-black h-[2px] w-full mt-[-1px] tz ease-in-out duration-[600ms]" />
    </div>
  );
});

ReselectRetrievalInputBox.displayName = 'ReselectRetrievalInputBox';

export default ReselectRetrievalInputBox;
