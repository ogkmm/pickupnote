import Link from 'next/link';
import React from 'react';
import NormalButton from './button/NormalButton';
import { cn } from '@/lib/utils';
import LogoEn from './svgs/LogoEn';
import I18nChangeButton from './button/I18nChangeButton';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div className={cn('sticky top-0 px-[32px] z-[100]', className)} {...props}>
      <nav className="flex justify-between items-center bg-[#EEF94D] pb-[24px] pt-[32px] border-b-[0.5px] border-[#757771]">
        <Link href="/">
          <LogoEn />
        </Link>
        <div className="flex gap-[24px]">
          <NormalButton name="Join waitlist" />
          <NormalButton name="Explore" />
        </div>
        <I18nChangeButton />
      </nav>
    </div>
  );
};

export default Header;
