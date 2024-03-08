import { MusicInfo } from '@/lib/type';
import * as React from 'react';
import Image from 'next/image';
import { cn, generateSpotifyCodeLink } from '@/lib/utils';
import LogoEn from '@/components/svgs/LogoEn';
import SpotifyCodeGuidance from '../svgs/SpotifyCodeGuidance';

interface StandardPosterProps extends React.HTMLAttributes<HTMLDivElement> {
  info: MusicInfo;
  thought: string;
}

const StandardPoster: React.FC<StandardPosterProps> = ({
  className,
  info,
  thought,
  ...props
}) => {
  const spotifyCode: string = generateSpotifyCodeLink(info);

  return (
    <div
      id="poster-standard-wrapper"
      className={cn(
        'w-[355px] p-[8px] bg-[#EEF95D] flex flex-col gap-[8px] overflow-y-auto hidden-scrollbar',
        className
      )}
      {...props}
    >
      <div
        id="poster-standard-content"
        className="flex flex-col items-center px-[24px] py-[40px] gap-[44px] rounded-[8px] bg-white"
      >
        <div className="flex flex-col items-center gap-[32px]">
          <Image
            src={info.image}
            width={204}
            height={204}
            alt="music image"
            className="rounded-[8px] shadow-image"
          />
          <div
            id="poster-standard-music-text-info"
            className="max-w-[204px] flex flex-col items-center gap-[19px]"
          >
            <p
              id="poster-standard-music-text-info-title"
              className="w-full text-balance truncate font-[600] text-[26px] leading-[24px]"
            >
              {info.title}
            </p>
            <div className="flex items-center gap-[8px] text-[17px]">
              <p
                id="poster-standard-music-text-info-artists"
                className="max-w-[142px] truncate leading-[16px] tracking-[-.48px] font-[500]"
              >
                {info.artist}
              </p>
              {/* ・ */}
              <p>&#183;</p>
              <p
                id="poster-standard-music-text-info-year"
                className="leading-[24px] tracking-[-.2px] text-[#757771]"
              >
                {info.publishYear}
              </p>
            </div>
          </div>
        </div>
        <p
          id="poster-standard-main-text"
          className="w-full text-[15px] font-[400] leading-normal text-[#2A2D25]"
        >
          {thought}
        </p>
        <div className="w-full flex justify-between text-[13px] font-[300] leading-[16px] tracking-[-.4] text-[#757771]">
          <p>{'www.pickupnote.xyz'}</p>
          <p>{'2024/02/26'}</p>
        </div>
      </div>
      <div
        id="pickupnote-poster-kv"
        className="w-full py-[16px] px-[12px] flex justify-between"
      >
        <LogoEn />
        <div className="w-[148px] flex flex-col gap-[7px]">
          <Image src={spotifyCode} width={148} height={36} alt="spotify code" />
          <SpotifyCodeGuidance />
        </div>
      </div>
    </div>
  );
};

export default StandardPoster;
