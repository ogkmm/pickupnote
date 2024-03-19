import React, { useContext } from 'react';
import Image from 'next/image';
import { DataContext } from './provider/InterInfoProvider';
import SpotifyLogoCombine from './svgs/SpotifyLogoCombine';
import { generateMusicSourceLink } from '@/lib/utils';
import AppleMusicLogoCombine from './svgs/AppleMusicLogoCombine';

interface LinkDetailAreaProps {}

const LinkDetailArea: React.FC<LinkDetailAreaProps> = () => {
  const { state: info } = useContext(DataContext);
  const sourceOriginLink = generateMusicSourceLink(info);
  const fromSpotify: boolean = info.source === 'Spotify';

  return (
    <div
      id="link-detail-card"
      className="max-w-[268px] lg:max-w-[375px] flex flex-col items-center gap-[20px]"
    >
      <div className="md:h-[383px] flex flex-col items-center gap-[20px] md:justify-between">
        <Image
          id="music-image"
          src={info.image}
          width={268}
          height={268}
          alt="music image"
          className="rounded-[8px] shadow-image"
        />
        <div
          id="music-text-info"
          className="flex flex-col items-center gap-[16px]"
        >
          <p
            id="music-text-info-title"
            className="text-center text-balance font-bold text-[22px] lg:text-[34px] leading-[31px] lg:leading-[40px] tracking-[-.66px] lg:tracking-[-1px] line-clamp-2"
          >
            {info.title}
          </p>
          <div className="flex items-center gap-[8px] text-[17px]">
            <p
              id="music-text-info-artists"
              className="max-w-[211px] truncate leading-[16px] tracking-[-.2px] font-medium"
            >
              {info.artist}
            </p>
            {/* ・ */}
            <p>&#183;</p>
            <p
              id="music-text-info-year"
              className="leading-[24px] text-[#757771]"
            >
              {info.publishYear}
            </p>
          </div>
        </div>
      </div>
      <div
        id="music-source"
        className="flex gap-[8px] items-center md:mt-[44px] md:mb-[9px]"
      >
        {fromSpotify ? (
          <>
            <p className="text-[17px] font-medium leading-[16px] tracking-[-.2px]">
              {'Play on'}
            </p>
            <a
              id="music-source-link-spotify"
              href={sourceOriginLink}
              target="_blank"
            >
              <SpotifyLogoCombine />
            </a>
          </>
        ) : (
          <a
            id="music-source-link-apple-music"
            href={sourceOriginLink}
            target="_blank"
          >
            <AppleMusicLogoCombine />
          </a>
        )}
      </div>
    </div>
  );
};
export default LinkDetailArea;
