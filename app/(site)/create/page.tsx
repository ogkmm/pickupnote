'use client';
import LinkReSelector from '@/components/LinkReSelector';
import Note from '@/components/Note';
import LinkDetailArea from '@/components/LinkDetailArea';
import React from 'react';

export default function Create() {
  return (
    <section className="relative w-10/12 max-w-[1168px] h-full p-[16px] flex flex-col">
      <div></div>
      <div className="flex flex-1 gap-4 overflow-auto">
        <LinkDetailArea />
        <div className="h-full flex-1">
          <div className="h-full flex flex-col gap-[12px]">
            <LinkReSelector />
            <Note className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
