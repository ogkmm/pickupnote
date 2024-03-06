import React from 'react';
import { GlobeIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface I18nChangeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const I18nChangeButton: React.FC<I18nChangeButtonProps> = React.forwardRef<
  HTMLButtonElement,
  I18nChangeButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'flex gap-[6px] justify-center items-center text-[17px] leading-[22.5px]',
        className
      )}
      ref={ref}
      {...props}
    >
      <GlobeIcon className="w-[24px] h-[24px]" />
      <p>Language</p>
    </button>
  );
});

I18nChangeButton.displayName = 'I18nChangeButton';

export default I18nChangeButton;
