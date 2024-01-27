'use client';
import NoteStartButton from '@/components/button/NoteStartButton';
import RetrievalInputBox from '@/components/inputbox/RetrievalInputBox';
import CicleInfo from '@/components/svgs/CicleInfo';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet';
import PosterCreator from '@/components/PosterCreator';
import KVGridStyleBG from '@/components/svgs/KVGridStyleBG';
import KVLogo from '@/components/svgs/KVLogo';

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
      <section className="w-full h-full flex justify-center overflow-auto hidden-scrollbar">
        <div className="relative flex justify-center items-center w-10/12 max-w-[1168px]">
          <div className="absolute z-10 left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] overflow-hidden">
            <KVGridStyleBG />
          </div>
          <div className="flex flex-col justify-center items-center gap-[24px] z-20">
            <KVLogo />
            <button className="flex justify-center items-center gap-[8px] mt-[8px] text-[14px] opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out text-[#757771]">
              <CicleInfo />
              <p>如何获得曲目链接</p>
            </button>
            <div className="flex flex-nowrap justify-center items-center gap-[8px] min-w-[311px] sm:min-w-[528px] my-[11px] py-[9px] px-[24px] bg-white rounded-[8px]">
              <RetrievalInputBox ref={ref} />
              <Sheet>
                <SheetTrigger asChild>
                  <NoteStartButton onClick={clickHandle} />
                </SheetTrigger>
                <SheetContent>
                  <PosterCreator />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
