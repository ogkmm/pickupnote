import Image from 'next/image';
import RetrievalButton from './button/RetrievalButton';
import React, { FC, useState } from 'react';
import { cn } from '@/lib/utils';

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {}

const Note: FC<NoteProps> = ({ className, ...props }) => {
  const [enteredCharacterLength, setEnteredCharacterLength] = useState(0);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredCharacterLength(e.target.value.length);
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-[12px] pt-[32px] pb-[24px] px-[16px] rounded-[12px] bg-[#EEF95D] overflow-auto',
        className
      )}
      {...props}
    >
      <div id="holes" className="bg-white w-full h-[20px] my-[4px]" />
      <div id="music-card" className="flex justify-between px-[4px]">
        <div id="music-info" className="flex flex-1 gap-[20px] pb-[8px]">
          <Image src="/example.jpeg" width={96} height={96} alt="spotify" />
          <div className="flex flex-1 items-end">
            <div className="flex flex-col text-[14px] leading-[18px] gap-[8px]">
              <p>专辑</p>
              <p className="text-[22px] leading-[24px] font-bold">LANDER</p>
              <p>LiSA</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div id="repick-button" className="flex flex-row-reverse">
            <Image src="/spotify.svg" width={29} height={28} alt="spotify" />
          </div>
        </div>
      </div>
      <div id="bd" className="relative flex flex-col grow gap-[12px]">
        <div
          id="editor"
          className="h-full flex flex-col gap-[4px] py-[24px] px-[20px] rounded-[12px] bg-white"
        >
          <textarea
            className="w-full h-full text-[14px] resize-none outline-none placeholder:text-[#CACBC9]"
            placeholder="想写点什么?"
            onChange={handleTextareaChange}
          />
          <p className="flex flex-row-reverse text-[#757771] text-[12px]">
            {enteredCharacterLength}字
          </p>
        </div>
        <div className="flex justify-between px-[4px] py-[8px]">
          <div className="my-auto">
            <p className="text-[12px] text-[#757771]">已保存</p>
          </div>
          <div id="button">
            <RetrievalButton>生成海报</RetrievalButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
