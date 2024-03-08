import React from 'react';
import Image from 'next/image';
import LogoEn from '@/components/svgs/LogoEn';
import SpotifyCodeGuidance from '@/components/svgs/SpotifyCodeGuidance';
import { MusicInfo } from '@/lib/type';
import { cn, generateSpotifyCodeLink } from '@/lib/utils';

interface PickupnotePosterButtomKVProps
  extends React.HTMLAttributes<HTMLDivElement> {
  info: MusicInfo;
}

const PickupnotePosterButtomKV = ({
  className,
  info,
  ...props
}: PickupnotePosterButtomKVProps) => {
  const spotifyCode: string = generateSpotifyCodeLink(info);

  return (
    <div
      id="pickupnote-poster-buttom-kv"
      className={cn(
        'w-full py-[16px] px-[12px] flex justify-between',
        className
      )}
      {...props}
    >
      <LogoEn />
      <div className="w-[148px] flex flex-col gap-[7px]">
        <Image src={spotifyCode} width={148} height={36} alt="spotify code" />
        <SpotifyCodeGuidance />
      </div>
    </div>
  );
};

export default PickupnotePosterButtomKV;
