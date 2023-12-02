import Link from 'next/link';
import React from 'react';
import NormalButton from './button/NormalButton';
import LoginOutButton from './button/LoginOutButton';
import { cn } from '@/lib/utils';
import LogoEn from './svgs/LogoEn';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div
      className={cn(
        'w-10/12 max-w-[1168px] px-[16px] rounded-[12px] z-[100]',
        className
      )}
      {...props}
    >
      <nav className="flex justify-between items-center pb-[16px] pt-[28px]">
        <Link href="/" className="">
          <LogoEn />
        </Link>
        <div className="flex gap-[28px]">
          <NormalButton name="切换语言" />
          <NormalButton name="会员计划" />
          <LoginOutButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
