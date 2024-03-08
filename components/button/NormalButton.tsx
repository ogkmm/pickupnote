import { cn } from '@/lib/utils';
import React from 'react';

interface NormalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
}

export const NormalButton: React.FC<NormalButtonProps> = ({
  name,
  ...props
}) => {
  return (
    <button
      className={cn(
        'w-auto text-[17px] leading-[22.5px] tracking-[-.6px] font-[400] hover:text-slate-500 transition-colors duration-300 ease-in-out',
        props.className
      )}
    >
      {name}
    </button>
  );
};

export default NormalButton;
