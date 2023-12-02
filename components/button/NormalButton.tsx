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
        'text-[14px] hover:text-slate-500 dark:hover:text-slate-300 transition-colors duration-300 ease-in-out',
        props.className
      )}
    >
      {name}
    </button>
  );
};

export default NormalButton;
