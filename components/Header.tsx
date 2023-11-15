import { FC } from 'react';
import { cn } from '@/lib/utils';
import { LoginOutButton } from './button/LoginOutButton';
import NormalButton from './button/NormalButton';
import Link from 'next/link';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'relative min-h-screen max-w-site mx-auto px-10',
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 right-0 px-10">
        <nav className="flex justify-between border-b-2 border-black dark:border-white py-3">
          <Link href="/" className="font-bold text-lg my-auto">
            Shuman
          </Link>
          <div className="flex gap-4">
            <NormalButton name="切换语言" />
            <NormalButton name="会员计划" />
            <LoginOutButton />
          </div>
        </nav>
      </div>
      <main className="flex flex-col overflow-y-auto">{children}</main>
    </div>
  );
};

export default Header;
