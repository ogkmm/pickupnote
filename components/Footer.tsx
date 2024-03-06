import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn('mx-[32px] mb-[24px]', className)} {...props}>
      <div className="pt-[24px] flex flex-col gap-[14px] items-center border-t-[0.5px] border-[#757771]">
        <div className="flex justify-center gap-[52px]">
          {/* Privacy policy */}
          <Link href="/privacy" className="text-[12px/22.5px] text-[#2A2D25]">
            {'Privacy policy'}
          </Link>
          {/* Terms & Condition */}
          <Link href="/terms" className="text-[12px/22.5px] text-[#2A2D25]">
            {'Terms & Condition'}
          </Link>
        </div>
        <p className="text-[12px/16px] text-[#757771]">{'@eddilexiok'}</p>
      </div>
    </footer>
  );
};

export default Footer;
