import React, { FC, useContext } from 'react';
import Image from 'next/image';
import { DataContext } from '@/lib/context';
import SpotifyLogoCombine from './svgs/SpotifyLogoCombine';
import { generateSpotifyLink } from '@/lib/utils';

interface DetailViewProps {
  name: string;
  contentList?: string[];
  contentString?: string;
}

const DetailView: FC<DetailViewProps> = ({
  name,
  contentList,
  contentString
}) => {
  return (
    <>
      <div className="flex gap-[8px] text-[14px]">
        <p className="min-w-[56px]">{name}</p>
        <div className="flex flex-col">
          {contentString ? (
            <p>{contentString}</p>
          ) : (
            <>
              <ol>
                {contentList?.map((l, i) => (
                  <li key={i}>{`${i + 1}. ${l}`}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const LinkDetailArea = () => {
  const musicInfo = useContext(DataContext);
  const sourceOriginLink = generateSpotifyLink(
    musicInfo.itemType,
    musicInfo.platId
  );
  // const iterable =
  //   musicInfo.itemType === 'album' || musicInfo.itemType === 'playlist';
  // const trackList = iterable
  //   ? musicInfo.tracks.map((track, _) => track.title)
  //   : [];
  // console.log(musicInfo);

  return (
    <div
      id="link-detail-card"
      className="max-w-[268px] lg:max-w-[375px] flex flex-col items-center gap-[20px]"
    >
      <div className="md:h-[383px] flex flex-col items-center gap-[20px] md:justify-between">
        <Image
          id="music-image"
          src={musicInfo.image}
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
            className="text-balance font-bold text-[22px] lg:text-[34px] leading-[31px] lg:leading-[40px] tracking-[-.66px] lg:tracking-[-1px] line-clamp-2"
          >
            {musicInfo.title}
          </p>
          <div className="flex items-center gap-[8px] text-[17px]">
            <p
              id="music-text-info-artists"
              className="max-w-[211px] truncate leading-[16px] tracking-[-.2px] font-medium"
            >
              {musicInfo.artist}
            </p>
            {/* ・ */}
            <p>&#183;</p>
            <p
              id="music-text-info-year"
              className="leading-[24px] text-[#757771]"
            >
              {musicInfo.publishYear}
            </p>
          </div>
        </div>
      </div>
      <div
        id="music-source"
        className="flex gap-[8px] items-center md:mt-[44px] md:mb-[9px]"
      >
        <p className="text-[17px] font-medium leading-[16px] tracking-[-.2px]">
          {'Play on'}
        </p>
        <a id="music-source-link" href={sourceOriginLink} target="_blank">
          <SpotifyLogoCombine />
        </a>
      </div>
    </div>
  );
};
export default LinkDetailArea;
