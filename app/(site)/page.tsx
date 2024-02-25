'use client';
import NoteStartButton from '@/components/button/NoteStartButton';
import RetrievalInputBox from '@/components/inputbox/RetrievalInputBox';
import CicleInfo from '@/components/svgs/CicleInfo';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent } from '@/components/Sheet';
import PosterCreator from '@/components/PosterCreator';
import KVLogo from '@/components/svgs/KVLogo';
import { toastError, extractIdFromSpotifyLink } from '@/lib/utils';
import toast from 'react-hot-toast';
import axios from 'axios';
import { spotifyMediaInfoApi } from '@/lib/constants';
import { MusicInfo, MusicInfoResponse } from '@/lib/type';
import { DataContext } from '@/lib/context';

export default function Home() {
  const inputBoxRef = useRef<HTMLInputElement | null>(null);
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [musicInfo, setMusicInfo] = useState<MusicInfo>({} as MusicInfo);

  const clickHandle = (): void => {
    const shareLink: string | undefined = inputBoxRef.current?.value;
    if (!shareLink) {
      toastError('Enter a link please.');
      setSheetOpen(false);
      return;
    }

    const fetchData = async (link: string) => {
      const key = extractIdFromSpotifyLink(link);
      const history = localStorage.getItem(key);

      if (history) {
        setMusicInfo(JSON.parse(history));
      } else {
        const { data } = await axios.post<MusicInfoResponse>(
          spotifyMediaInfoApi,
          {
            url: link
          }
        );
        console.log(data);
        localStorage.setItem(key, JSON.stringify(data.musicInfo));
        setMusicInfo(data.musicInfo);
      }

      setSheetOpen(true);
    };

    toast.promise(fetchData(shareLink), {
      loading: 'Picking up...',
      success: 'Successfully picked up.',
      error: 'Picked up failed.'
    });
  };

  return (
    <>
      <div className="flex-1">
        <section>
          <div className="w-full h-[700px] flex justify-center items-center border-b-[0.5px] border-black">
            <h1 className="font-bold text-5xl text-center">
              🚧 UNDER CONSTRUCTION
            </h1>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="relative flex justify-center items-center w-10/12 max-w-[1168px]">
            <div className="flex flex-col justify-center items-center gap-[24px] z-20">
              <KVLogo />
              <button className="flex justify-center items-center gap-[8px] mt-[8px] text-[14px] opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out text-[#757771]">
                <CicleInfo />
                <p>如何获得曲目链接</p>
              </button>
              <div className="flex flex-nowrap justify-center items-center gap-[8px] min-w-[311px] sm:min-w-[528px] my-[11px] py-[9px] px-[24px] bg-white rounded-[8px]">
                <RetrievalInputBox ref={inputBoxRef} />
                <NoteStartButton onClick={clickHandle} />
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                  <SheetContent>
                    <DataContext.Provider value={musicInfo}>
                      <PosterCreator />
                    </DataContext.Provider>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-[700px] flex justify-center items-center border-t-[0.5px] border-black">
            <h1 className="font-bold text-5xl text-center">
              🚧 UNDER CONSTRUCTION
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
