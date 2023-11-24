import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';
import useTrack from '@/hooks/useTrack';
import SvgSpinners3DotsFade from './svgs/SvgSpinners3DotsFade';

interface WarpperProps extends React.HTMLAttributes<HTMLDivElement> {}
interface PreviewContentProps {
  url: string;
}

const Warpper: FC<WarpperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex px-7 py-5 bg-slate-100 dark:bg-slate-300 rounded-2xl dark:text-black',
        className
      )}
    >
      {children}
    </div>
  );
};

const PreviewContent: FC<PreviewContentProps> = ({ url }) => {
  const { track, isLoading, isError } = useTrack(url);

  if (isLoading)
    return (
      <Warpper className="justify-center">
        <SvgSpinners3DotsFade className="w-8 h-8" />
      </Warpper>
    );

  if (isError)
    return (
      <Warpper className="justify-center bg-yellow-500 dark:bg-yellow-500">
        <p className="text-black">⚠️ Check your Spotify link and try again.</p>
      </Warpper>
    );

  return (
    <Warpper className="justify-between">
      <div className="flex gap-[28px] h-[64px] justify-center items-center">
        <Image
          src={track!.image}
          width={64}
          height={64}
          alt="Avatar"
          className="rounded-lg"
        />
        <div className="flex flex-col gap-[4px] text-xs">
          <p>{track!.title}</p>
          <div className="flex gap-2">
            {track!.authors.map((a: string, i: number) => (
              <p key={i}>{a}</p>
            ))}
          </div>
          <p>{`${track!.type} • ${track!.releaseYear}`}</p>
        </div>
      </div>
      <Link
        href={'/mark'}
        className="flex justify-center items-center text-xs transition-all duration-300 ease-in-out hover:underline"
      >
        Go
        <GrFormNextLink className="inline-flex items-baseline" />
      </Link>
    </Warpper>
  );
};

export default PreviewContent;
