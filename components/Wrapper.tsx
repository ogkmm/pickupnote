import { FC } from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper: FC<WrapperProps> = ({ children, className, ...props }) => {
  return (
    <div  
      className={cn(
        'relative rounded-[20px] bg-[#EEF95D] m-[16px] flex flex-col items-center overflow-hidden',
        className
      )}
      style={{ height: 'calc(100vh - 32px)' }}
      {...props}
    >
      <Header />
      <main className="w-full flex-1 flex flex-col items-center overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
