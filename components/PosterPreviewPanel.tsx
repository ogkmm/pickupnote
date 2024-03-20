import React, { useContext } from 'react';
import SmallCloseIcon from '@/components/svgs/SmallCloseIcon';
import DownloadPosterButton from '@/components/button/DownloadPosterButton';
import PosterVariantRadioGroup, {
  PosterVariant
} from '@/components/PosterVariantRadioGroup';
import {
  ShareToXButton,
  ShareToFacebookButton,
  ShareToWeiboButton
} from '@/components/button/social-media';
import {
  FacebookShareButton,
  TwitterShareButton,
  WeiboShareButton
} from 'react-share';
import { cn, generateShareToSocialMediaContent } from '@/lib/utils';
import Poster from './posters/Poster';
import { Separator } from './Separator';
import { DataContext } from './provider/InterInfoProvider';
import { toPng } from 'html-to-image';
import usePoster from '@/hooks/usePoster';
import SvgSpinners3DotsFade from './svgs/SvgSpinners3DotsFade';

interface PosterPreviewPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

const PosterPreviewPanel: React.FC<PosterPreviewPanelProps> = ({
  className,
  onClose,
  ...props
}) => {
  const { state: interInfo } = useContext(DataContext);
  const { content, musicUrl, tags } =
    generateShareToSocialMediaContent(interInfo);

  const [posterVariant, setPosterVariant] = React.useState(
    PosterVariant.STANDARD
  );

  const handleVariantChange = (variant: PosterVariant) => {
    setPosterVariant(variant);
  };

  /* pre-render poster to image */
  const posterRef = React.useRef<HTMLDivElement>(null);
  const { poster, loading: posterIsLoading } = usePoster(posterRef);

  /* download handler */
  const handlePosterDownload = React.useCallback(() => {
    if (!posterRef.current) return;

    /* e.g. <div id="poster-square-wrapper" ... */
    const aspect = posterRef.current.id.split('-')[1];

    toPng(posterRef.current!, {
      cacheBust: true,
      pixelRatio: 1,
      includeQueryParams: true
    }).then((dataUrl) => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${interInfo.title}_${aspect}.png`;
      a.click();
    });
  }, [posterRef, interInfo.title]);

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
          <button
            id="close-poster-preview-panel-mobile"
            className="group relative w-[30px] h-[30px] rounded-full bg-[#F2F2F2] hover:bg-[#DFE0DE] transition-opacity-smooth transition-colors-smooth"
          >
            <SmallCloseIcon
              className="m-auto group-hover:opacity-80"
              onClick={onClose}
            />
          </button>
        </div>
        <div className="sm:hidden w-full flex">
          <button
            id="close-poster-preview-panel"
            className="group relative w-[30px] h-[30px] rounded-full bg-[#F2F2F2] hover:bg-[#DFE0DE] transition-opacity-smooth transition-colors-smooth"
          >
            <SmallCloseIcon
              className="m-auto group-hover:opacity-80"
              onClick={onClose}
            />
          </button>
        </div>
        <div className="overflow-auto hidden-scrollbar">
          {posterIsLoading ? (
            <SvgSpinners3DotsFade />
          ) : (
            <img src={poster} alt="preview-poster" />
          )}
          <div className="h-[104px]" />
        </div>
        <div className="sr-only">
          <Poster ref={posterRef} variant={posterVariant} />
        </div>
        <div
          id="poster-customize-toolbar"
          className="absolute flex gap-[36px] w-[374px] h-[44px] px-[28px] py-[6px] bottom-[20px] rounded-[20px] shadow-image bg-white"
        >
          <p className="text-[17px] leading-[32px] font-[400] tracking-[-.2px] text-[#757771]">
            {'Aspect ratio'}
          </p>
          <PosterVariantRadioGroup
            className="flex-1"
            onVariantChange={handleVariantChange}
          />
        </div>
      </div>
      <div
        id="poster-controll-panel"
        className="w-full flex flex-col sm:flex-row justify-center items-center gap-[28px]"
      >
        <DownloadPosterButton onClick={handlePosterDownload} />
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
          <div className="flex gap-[32px] items-center">
            <TwitterShareButton url={musicUrl} title={content} hashtags={tags}>
              <ShareToXButton />
            </TwitterShareButton>
            <FacebookShareButton url={musicUrl} hashtag="pickupnote">
              <ShareToFacebookButton />
            </FacebookShareButton>
            <WeiboShareButton url={musicUrl} title={content}>
              <ShareToWeiboButton />
            </WeiboShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterPreviewPanel;
