'use client';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Footer from './Footer';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper: FC<WrapperProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'relative m-[8px] rounded-[20px] bg-[#EEF94D] flex flex-col',
        className
      )}
      {...props}
    >
      <Header />
      <main className="flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
