import React from 'react';
import SmallCloseIcon from '@/components/svgs/SmallCloseIcon';
import DownloadPosterButton from '@/components/button/DownloadPosterButton';
import {
  ShareToInstagramButton,
  ShareToXButton,
  ShareToFacebookButton
} from '@/components/button/social-media';
import { cn } from '@/lib/utils';
import Poster from './posters/Poster';
import { Separator } from './Separator';

interface PosterPreviewPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

const PosterPreviewPanel: React.FC<PosterPreviewPanelProps> = ({
  className,
  onClose,
  ...props
}) => {
  return (
    <div
      className={cn(
        'my-[42px] left-[50%] top-[50%] translate-x-[-1/2] translate-y-[-1/2] flex flex-col gap-[40px] sm:gap-[20px] justify-center items-center',
        className
      )}
      {...props}
    >
      <div
        id="poster-preview-panel"
        className="relative flex flex-col items-center h-[595px] w-[375px] sm:w-[529px] md:w-[578px] px-[10px] gap-[20px] overflow-y-hidden"
      >
        <div className="hidden sm:block absolute left-0 top-0">
          <button className="group relative w-[30px] h-[30px] rounded-full bg-[#F2F2F2] hover:bg-[#DFE0DE] transition-opacity-smooth transition-colors-smooth">
            <SmallCloseIcon
              className="m-auto group-hover:opacity-80"
              onClick={onClose}
            />
          </button>
        </div>
        <div className="sm:hidden w-full flex">
          <button className="group relative w-[30px] h-[30px] rounded-full bg-[#F2F2F2] hover:bg-[#DFE0DE] transition-opacity-smooth transition-colors-smooth">
            <SmallCloseIcon
              className="m-auto group-hover:opacity-80"
              onClick={onClose}
            />
          </button>
        </div>
        <Poster variant="Standard" />
      </div>
      <div
        id="poster-controll-panel"
        className="w-full flex flex-col sm:flex-row justify-center items-center gap-[28px]"
      >
        <DownloadPosterButton />
        <Separator
          className="hidden sm:block h-full w-px bg-white"
          decorative
          orientation="vertical"
        />
        <div
          id="poster-controll-panel-social-media"
          className="w-auto flex flex-col sm:flex-row gap-[20px] justify-center items-center"
        >
          <p className="text-[#DFE0DE] text-[17px] font-[400] leading-[24px] tracking-[-.2px]">
            {'Share to'}
          </p>
          <div className="w-[228.4px] flex justify-between items-center">
            <ShareToInstagramButton />
            <ShareToXButton />
            <ShareToFacebookButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterPreviewPanel;
