import * as React from 'react';
import { cn } from '@/lib/utils';
import { DataContext } from '../provider/InterInfoProvider';
import Image from 'next/image';
import PknPosterBottomKV from '../PknPosterBottomKV';
import parse from 'html-react-parser';
import PosterFooter from './components/PosterFooter';

interface NineSixteenPosterProps extends React.HTMLAttributes<HTMLDivElement> {}

const NineSixteenPoster = React.forwardRef<
  HTMLDivElement,
  NineSixteenPosterProps
>(({ className, ...props }, ref) => {
  const { state: interInfo } = React.useContext(DataContext);

  return (
    <>
      <div className="overflow-y-auto hidden-scrollbar">
        <div
          id="poster-ninesixteen-wrapper"
          className={cn(
            'w-[1080px] h-[1920px] p-[16px] bg-[#EEF95D] flex flex-col gap-[8px]',
            className
          )}
          ref={ref}
          {...props}
        >
          <div
            id="poster-ninesixteen-content"
            className="flex flex-col items-center px-[48px] py-[80px] gap-[88px] rounded-[40px] bg-white"
          >
            <div className="w-full flex justify-start">
              <div className="flex items-center gap-[64px]">
                <Image
                  src={interInfo.image}
                  width={348}
                  height={348}
                  alt="music image"
                  className="rounded-[8px] shadow-image"
                />
                <div
                  id="poster-ninesixteen-music-text-info"
                  className="max-w-[418px] flex flex-col items-start gap-[40px]"
                >
                  <p
                    id="poster-ninesixteen-music-text-info-title"
                    className="w-full text-balance line-clamp-2 font-[600] text-[64px] leading-none"
                  >
                    {interInfo.title}
                  </p>
                  <div className="flex items-center gap-[16px] text-[34px]">
                    <p
                      id="poster-ninesixteen-music-text-info-artists"
                      className="max-w-[301px] truncate leading-none tracking-[-.2px] font-[500]"
                    >
                      {interInfo.artist}
                    </p>
                    {/* ・ */}
                    <p>&#183;</p>
                    <p
                      id="poster-ninesixteen-music-text-info-year"
                      className="leading-none tracking-[-.2px] text-[#757771]"
                    >
                      {interInfo.publishYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              id="poster-ninesixteen-main-text"
              className="w-full h-[1010px] text-wrap break-all line-clamp-[14] text-[48px] font-[400] leading-normal text-[#2A2D25]"
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
});

NineSixteenPoster.displayName = 'NineSixteenPoster';

export default NineSixteenPoster;
