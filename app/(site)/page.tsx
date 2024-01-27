'use client';
import { RetrievalButton } from '@/components/button/RetrievalButton';
import RetrievalInputBox from '@/components/inputbox/RetrievalInputBox';
import CicleInfo from '@/components/svgs/CicleInfo';
import DottedWaterfall from '@/components/svgs/DottedWaterfall';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/Sheet';
import PosterCreator from '@/components/PosterCreator';

export default function Home() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [previewEnabled, setPreviewEnabled] = useState(false);
  const [shareLink, setShareLink] = useState<string>('');
  const router = useRouter();

  const clickHandle = (): void => {
    if (!ref.current?.value) {
      console.log('pls paste you link and continue.');
      return;
    }
    setPreviewEnabled(true);
    setShareLink(ref.current.value);
  };

  return (
    <>
      <section className="relative w-full h-full flex justify-center">
        <div className="flex items-center w-10/12 max-w-[1168px]">
          <div className="absolute z-10 left-1/2 top-1/2 -translate-y-[20%] -translate-x-[10%] overflow-hidden">
            <DottedWaterfall />
            <DottedWaterfall />
          </div>
          <div className="basis-1/2">{/*"placeholder"*/}</div>
          <div className="relative flex flex-col basis-1/2 justify-center items-center gap-[57px] z-20">
            <div className="px-2 text-center text-[56px] font-bold leading-tight truncate">
              <p>停半拍</p>
              <p>标记我最爱的那首歌</p>
            </div>
            <button className="flex justify-center items-center gap-[8px] text-[14px] opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out text-[#757771]">
              <CicleInfo />
              <p>如何获得曲目链接</p>
            </button>
            <div className="flex flex-nowrap gap-[4px] min-w-[420px] max-w-[504px] my-[11px] p-[4px] bg-white rounded-[8px]">
              <RetrievalInputBox className="flex-1" ref={ref} />
              <Sheet>
                <SheetTrigger asChild>
                  <RetrievalButton />
                </SheetTrigger>
                <SheetContent>
                  <PosterCreator />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-2/3 flex flex-col gap-[17.5px]">
          {/** a horizontal line with border 2px */}
          <div className="w-full border-t-2 border-[#CAD44F]" />
          <div className="w-full border-t-2 border-[#CAD44F]" />
          <div className="w-full border-t-2 border-[#CAD44F]" />
          <div className="w-full border-t-2 border-[#CAD44F]" />
          <div className="w-full border-t-2 border-[#CAD44F]" />
        </div>
      </section>
    </>
  );
}
