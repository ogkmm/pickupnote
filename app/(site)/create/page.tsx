'use client';
import LinkReSelector from '@/components/LinkReSelector';
import Note from '@/components/Note';
import AppearenceCollapse from '@/components/collapse/AppearenceCollapse';
import AspectRatioCollapse from '@/components/collapse/AspectRatioCollapse';
import PatternCollapse from '@/components/collapse/PatternCollapse';
import React from 'react';

export default function Create() {
  return (
    <section className="relative w-10/12 max-w-[1168px] h-full p-[16px] flex flex-col">
      <div></div>
      <div className="flex flex-1 gap-4 overflow-y-auto">
        <div className="basis-2/5 max-w-[342px] min-w-[316px] flex flex-col gap-[16px]">
          <AppearenceCollapse
            onRadioChange={(list) => {
              console.log(list);
            }}
          />
          <AspectRatioCollapse
            onRadioChange={(index) => {
              console.log(index);
            }}
          />
          <PatternCollapse
            onRadioChange={(index) => {
              console.log(index);
            }}
          />
        </div>
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
