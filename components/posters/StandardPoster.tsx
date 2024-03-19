import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { DataContext } from '../provider/InterInfoProvider';
import PknPosterBottomKV from '../PknPosterBottomKV';
import parse from 'html-react-parser';
import PosterFooter from './components/PosterFooter';

interface StandardPosterProps extends React.HTMLAttributes<HTMLDivElement> {}

const StandardPoster = React.forwardRef<HTMLDivElement, StandardPosterProps>(
  ({ className, ...props }, ref) => {
    const { state: interInfo } = React.useContext(DataContext);

    return (
      <>
        <div className="overflow-y-auto hidden-scrollbar">
          <div
            id="poster-standard-wrapper"
            className={cn(
              'w-[860px] p-[16px] bg-[#EEF95D] flex flex-col gap-[8px]',
              className
            )}
            ref={ref}
            {...props}
          >
            <div
              id="poster-standard-content"
              className="flex flex-col items-center px-[48px] py-[80px] gap-[88px] rounded-[40px] bg-white"
            >
              <div className="flex flex-col items-center gap-[64px]">
                <Image
                  src={interInfo.image}
                  width={408}
                  height={408}
                  alt="music image"
                  className="rounded-[8px] shadow-image"
                />
                <div
                  id="poster-standard-music-text-info"
                  className="max-w-[418] flex flex-col items-center gap-[40px]"
                >
                  <p
                    id="poster-standard-music-text-info-title"
                    className="w-full text-balance line-clamp-2 leading-none font-[600] text-[64px] text-center"
                  >
                    {interInfo.title}
                  </p>
                  <div className="flex items-center gap-[16px] text-[34px] leading-none">
                    <p
                      id="poster-standard-music-text-info-artists"
                      className="max-w-[301px] truncate tracking-[-.2px] font-[500]"
                    >
                      {interInfo.artist}
                    </p>
                    {/* ・ */}
                    <p>&#183;</p>
                    <p
                      id="poster-standard-music-text-info-year"
                      className="tracking-[-.2px] text-[#757771]"
                    >
                      {interInfo.publishYear}
                    </p>
                  </div>
                </div>
              </div>
              <p
                id="poster-standard-main-text"
                className="w-full text-wrap break-all text-[40px] font-[400] leading-normal text-[#2A2D25]"
              >
                {parse(interInfo.thought)}
              </p>
              <PosterFooter />
            </div>
            <PknPosterBottomKV />
          </div>
          <div className="h-[104px]" />
        </div>
      </>
    );
  }
);

StandardPoster.displayName = 'StandardPoster';

export default StandardPoster;
