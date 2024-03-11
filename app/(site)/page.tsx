'use client';
import React from 'react';
import SquarePoster from '@/components/posters/SquarePoster';
import { DownloadIcon } from '@radix-ui/react-icons';
import { toJpeg } from 'html-to-image';
import { useCallback } from 'react';

export default function Home() {
  const posterRef = React.useRef<HTMLDivElement>(null);

  const convertToImage = useCallback(() => {
    toJpeg(posterRef.current!, {
      cacheBust: true,
      pixelRatio: 3,
      includeQueryParams: true
    }).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = '1290x1290.png';
      link.href = dataUrl;
      link.click();
    });
    console.log('clicked');
  }, [posterRef]);

  return (
    <>
      <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
        <p className="text-xs underline">430 x 430</p>
        <SquarePoster ref={posterRef} />
        <button
          onClick={convertToImage}
          className="border p-3 shadow-md rounded-full text-xs bg-black hover:opacity-80 transition-opacity-smooth text-white"
        >
          <DownloadIcon />
        </button>
      </div>
    </>
  );
}
