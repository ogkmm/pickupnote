'use client';
import Note from '@/components/Note';
import LinkDetailArea from '@/components/LinkDetailArea';
import NormalButton from './button/NormalButton';
import LoginOutButton from './button/LoginOutButton';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function PosterCreator() {
  const router = useRouter();

  return (
    <section className="relative h-full pb-[16px] flex flex-col">
      <div
        id="creator-menu-bar"
        className="w-full p-4 flex flex-row-reverse gap-[28px]"
      >
        <LoginOutButton />
        <NormalButton name="会员计划" />
        <NormalButton name="切换语言" />
      </div>
      <div className="px-[16px] overflow-auto">
        <div className="flex h-full gap-4">
          <LinkDetailArea />
          <div className="flex-1">
            <Note className="h-full flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
