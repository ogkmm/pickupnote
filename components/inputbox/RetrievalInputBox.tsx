import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { retrievalBoxPlaceHolderText } from '@/lib/constants';
import MusicSymbolTrebleClef from '../svgs/MusicSymbolTrebleClef';
import MusicSymbolBassClef from '../svgs/MusicSymbolBassClef';

interface RetrievalInputBoxProps
  extends React.HTMLAttributes<HTMLInputElement> {}

const RetrievalInputBox = forwardRef<HTMLInputElement, RetrievalInputBoxProps>(
  ({ className, ...props }, ref) => {
    const [selected, setSelected] = React.useState(false);

    const handleInputOnFocus = () => {
      setSelected(true);
    };
    const handleInputOnBlur = () => {
      setSelected(false);
    };

    return (
      <div className={cn('relative grow', className)}>
        <div className="flex justify-center">
          <input
            id="ns-input-box"
            className="w-[300px] bg-white px-[5px] py-[2px] border-b-black focus:outline-none placeholder:text-[16px] disabled:cursor-not-allowed"
            type="url"
            placeholder={retrievalBoxPlaceHolderText}
            ref={ref}
            onFocus={handleInputOnFocus}
            onBlur={handleInputOnBlur}
            {...props}
          />
          <div className="absolute bottom-0 bg-black h-[2px] w-full mt-[-1px] tz ease-in-out duration-[600ms]" />
        </div>
        {!selected ? (
          <MusicSymbolTrebleClef className="absolute left-[-4px] bottom-[-51px] w-[45.7px] h-[136px]" />
        ) : (
          <MusicSymbolBassClef className="absolute left-[-4px] bottom-[-19.85px] w-[63.88px] h-[73.07px]" />
        )}
      </div>
    );
  }
);

RetrievalInputBox.displayName = 'RetrievalInputBox';

export default RetrievalInputBox;
