import React from 'react';
import { GlobeIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface I18nChangeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const I18nChangeButton: React.FC<I18nChangeButtonProps> = () => {
  return (
    <button
      className={cn(
        'flex gap-[6px] justify-center items-center text-[17px/22.5px]'
      )}
    >
      <GlobeIcon className="w-[24px] h-[24px]" />
      <p>Language</p>
    </button>
  );
};

export default I18nChangeButton;
