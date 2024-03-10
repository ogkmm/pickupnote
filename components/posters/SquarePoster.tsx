import * as React from 'react';
import { cn, getCurrentDate } from '@/lib/utils';
import { DataContext } from '../provider/InterInfoProvider';
import Image from 'next/image';
import PknPosterBottomKV from '../PknPosterBottomKV';
import parse from 'html-react-parser';

interface SquarePosterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SquarePoster: React.FC<SquarePosterProps> = ({ className, ...props }) => {
  const { state: interInfo } = React.useContext(DataContext);

  return (
    <>
      <div className="overflow-y-auto hidden-scrollbar">
        <div
          id="poster-square-wrapper"
          className={cn(
            'w-[430px] h-[430px] p-[8px] bg-[#EEF95D] flex flex-col gap-[8px]',
            className
          )}
          {...props}
        >
          <div
            id="poster-square-content"
            className="h-[354px] flex flex-col justify-between items-start px-[24px] py-[40px] gap-[24px] rounded-[8px] bg-white"
          >
            <div className="flex flex-row items-center gap-[32px]">
              <Image
                src={interInfo.image}
                width={119}
                height={119}
                alt="music image"
                className="rounded-[8px] shadow-image"
              />
              <div
                id="poster-square-music-text-info"
                className="max-w-[201px] flex flex-col items-start gap-[19px]"
              >
                <p
                  id="poster-square-music-text-info-title"
                  className="w-full text-balance line-clamp-2 font-[600] text-[20px] leading-[24px]"
                >
                  {interInfo.title}
                </p>
                <div className="flex items-center gap-[8px] text-[17px]">
                  <p
                    id="poster-square-music-text-info-artists"
                    className="max-w-[142px] truncate leading-[16px] tracking-[-.48px] font-[500]"
                  >
                    {interInfo.artist}
                  </p>
                  {/* ・ */}
                  <p>&#183;</p>
                  <p
                    id="poster-square-music-text-info-year"
                    className="leading-[24px] tracking-[-.2px] text-[#757771]"
                  >
                    {interInfo.publishYear}
                  </p>
                </div>
              </div>
            </div>
            <p
              id="poster-square-main-text"
              className="w-full line-clamp-2 text-[15px] font-[400] leading-normal text-[#2A2D25]"
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

export default SquarePoster;
