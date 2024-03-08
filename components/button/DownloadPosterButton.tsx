import React from 'react';
import DownloadIcon from '@/components/svgs/DownloadIcon';
import { cn } from '@/lib/utils';

interface DownloadPosterButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const DownloadPosterButton: React.FC<DownloadPosterButtonProps> =
  React.forwardRef<HTMLButtonElement, DownloadPosterButtonProps>(
    ({ className, ...props }, ref) => {
      return (
        <button
          className={cn(
            'w-auto rounded-[22px] py-[12px] px-[32px] bg-white hover:bg-white/80 transition-colors-smooth flex items-center gap-[8px]',
            className
          )}
          ref={ref}
          {...props}
        >
          <DownloadIcon />
          <p className="mt-[3px] text-black text-[17px] font-[600] leading-[15px] tracking-[-.5px]">
            {'Download'}
          </p>
        </button>
      );
    }
  );

DownloadPosterButton.displayName = 'SharePosterButton';

export default DownloadPosterButton;
