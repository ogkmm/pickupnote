import { loginOutButtonText } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React from 'react';

interface LoginOutButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const LoginOutButton: React.FC<LoginOutButtonProps> = (props) => {
  return (
    <button
      className={cn(
        'bg-transparent rounded-[8px] py-[8px] px-[24px] border-black border-[2px] text-[14px] hover:bg-black hover:text-white transition-colors duration-300 ease-in-out',
        props.className
      )}
    >
      {loginOutButtonText}
    </button>
  );
};

export default LoginOutButton;
