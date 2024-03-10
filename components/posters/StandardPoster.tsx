import * as React from 'react';
import Image from 'next/image';
import { cn, getCurrentDate } from '@/lib/utils';
import { DataContext } from '../provider/InterInfoProvider';
import PknPosterBottomKV from '../PknPosterBottomKV';
import parse from 'html-react-parser';

interface StandardPosterProps extends React.HTMLAttributes<HTMLDivElement> {}

const StandardPoster: React.FC<StandardPosterProps> = ({
  className,
  ...props
}) => {
  const { state: interInfo } = React.useContext(DataContext);

  return (
    <>
      <div className="overflow-y-auto hidden-scrollbar">
        <div
          id="poster-standard-wrapper"
          className={cn(
            'w-[355px] p-[8px] bg-[#EEF95D] flex flex-col gap-[8px]',
            className
          )}
          {...props}
        >
          <div
            id="poster-standard-content"
            className="flex flex-col items-center px-[24px] py-[40px] gap-[24px] rounded-[8px] bg-white"
          >
            <div className="flex flex-col items-center gap-[32px]">
              <Image
                src={interInfo.image}
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
                  className="w-full text-balance line-clamp-2 font-[600] text-[20px] text-center leading-[24px]"
                >
                  {interInfo.title}
                </p>
                <div className="flex items-center gap-[8px] text-[17px]">
                  <p
                    id="poster-standard-music-text-info-artists"
                    className="max-w-[142px] truncate leading-[16px] tracking-[-.48px] font-[500]"
                  >
                    {interInfo.artist}
                  </p>
                  {/* ・ */}
                  <p>&#183;</p>
                  <p
                    id="poster-standard-music-text-info-year"
                    className="leading-[24px] tracking-[-.2px] text-[#757771]"
                  >
                    {interInfo.publishYear}
                  </p>
                </div>
              </div>
            </div>
            <p
              id="poster-standard-main-text"
              className="w-full text-[15px] font-[400] leading-normal text-[#2A2D25]"
            >
              {parse(interInfo.thought)}
            </p>
            <div className="w-full flex justify-between text-[13px] font-[300] leading-[16px] tracking-[-.4] text-[#757771]">
              <p>{'www.pickupnote.com'}</p>
              <p>{getCurrentDate()}</p>
            </div>
          </div>
          <PknPosterBottomKV />
        </div>
        <div className="h-[104px]" />
      </div>
    </>
  );
};

export default StandardPoster;
