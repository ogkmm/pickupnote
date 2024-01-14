'use client';
import LinkReSelector from '@/components/LinkReSelector';
import Note from '@/components/Note';
import LinkDetailArea from '@/components/LinkDetailArea';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Create() {
  const router = useRouter();
  const returnButtonOnClick = () => {
    router.push('/');
  };

  return (
    <section className="relative w-10/12 max-w-[1168px] h-full pb-[16px] flex flex-col">
      <div
        id="return-to-homepage"
        className="w-full p-[16px] flex justify-start"
      >
        <button onClick={returnButtonOnClick}>{'<'}</button>
      </div>
      <div className="px-[16px] overflow-auto">
        <div className="flex h-full gap-4">
          <LinkDetailArea />
          <div className="flex-1">
            <div className="h-full flex flex-col gap-[12px]">
              <LinkReSelector />
              <Note className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
