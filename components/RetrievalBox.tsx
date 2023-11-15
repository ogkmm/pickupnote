import React from 'react';
import { cn } from '@/lib/utils';
import { retrievalBoxPlaceHolderText } from '@/lib/constants';

interface RetrievalBoxProps extends React.HTMLAttributes<HTMLInputElement> {}

const RetrievalBox: React.FC<RetrievalBoxProps> = (props) => {
  return (
    <input
      className={cn(
        'bg-slate-100 rounded-full py-2 px-4 opacity-70 caret-black dark:text-black placeholder:text-xs',
        props.className
      )}
      type="url"
      placeholder={retrievalBoxPlaceHolderText}
    />
  );
};

export default RetrievalBox;
