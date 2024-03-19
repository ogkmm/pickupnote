import React from 'react';
import Image from 'next/image';
import SpotifyCodeGuidance from '@/components/svgs/SpotifyCodeGuidance';
import { cn, generateSpotifyCodeLink } from '@/lib/utils';
import { DataContext } from './provider/InterInfoProvider';
import LogoEnM from './svgs/LogoEnM';

interface PickupnotePosterBottomKVProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PickupnotePosterBottomKVSCStyle = ({
  className,
  ...props
}: PickupnotePosterBottomKVProps) => {
  const { state: interInfo } = React.useContext(DataContext);
  const spotifyCode: string = generateSpotifyCodeLink(interInfo);

  return (
    <div
      id="pickupnote-poster-buttom-spotifycode-kv"
      className={cn(
        'w-full py-[32px] px-[24px] flex justify-between',
        className
      )}
      {...props}
    >
      <LogoEnM />
      <div className="w-[296px] flex flex-col gap-[13.6px]">
        <Image src={spotifyCode} width={296} height={70.7} alt="spotify code" />
        <SpotifyCodeGuidance />
      </div>
    </div>
  );
};

export default PickupnotePosterBottomKVSCStyle;
