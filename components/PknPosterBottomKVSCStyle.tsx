import React from 'react';
import Image from 'next/image';
import LogoEn from '@/components/svgs/LogoEn';
import SpotifyCodeGuidance from '@/components/svgs/SpotifyCodeGuidance';
import { cn, generateSpotifyCodeLink } from '@/lib/utils';
import { DataContext } from './provider/InterInfoProvider';

interface PickupnotePosterBottomKVProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PickupnotePosterBottomKVSCStyle = ({
  className,
  ...props
}: PickupnotePosterBottomKVProps) => {
  return (
    <div
      id="pickupnote-poster-buttom-spotifycode-kv"
      className={cn(
        'w-full py-[16px] px-[12px] flex justify-between',
        className
      )}
      {...props}
    >
      <LogoEn />
      <div className="w-[148px] flex flex-col gap-[7px]">
        <Image
          src={
            'https://scannables.scdn.co/uri/plain/jpeg/000000/white/640/spotify:track:5cnVhbHqMWWUJaOgMwY3OJ'
          }
          width={148}
          height={36}
          alt="spotify code"
        />
        <SpotifyCodeGuidance />
      </div>
    </div>
  );
};

export default PickupnotePosterBottomKVSCStyle;
