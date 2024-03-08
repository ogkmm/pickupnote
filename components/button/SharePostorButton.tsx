import React from 'react';
import ShareIcon from '../svgs/ShareIcon';
import { cn } from '@/lib/utils';

interface SharePostorButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const SharePostorButton: React.FC<SharePostorButtonProps> = React.forwardRef<
  HTMLButtonElement,
  SharePostorButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'w-[140px] rounded-[22px] py-[12px] px-[32px] bg-[#2A2D25] hover:bg-[#3B3E36] transition-colors-smooth flex items-center gap-[8px]',
        className
      )}
      ref={ref}
      {...props}
    >
      <ShareIcon />
      <p className="mt-[3px] text-white text-[17px] font-[600] leading-[15px] tracking-[-.5px]">
        {'Share'}
      </p>
    </button>
  );
});

SharePostorButton.displayName = 'SharePosterButton';

export default SharePostorButton;
