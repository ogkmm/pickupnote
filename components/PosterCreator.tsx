import LinkDetailArea from '@/components/LinkDetailArea';
import NormalButton from './button/NormalButton';
import React, { useContext } from 'react';
import SharePostorButton from './button/SharePostorButton';
import HamburgerIcon from './svgs/HamburgerIcon';
import CloseIcon from './svgs/CloseIcon';
import I18nChangeButton from './button/I18nChangeButton';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { Separator } from '@/components/Separator';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger
} from '@/components/AlertDialog';
import PosterPreviewPanel from './PosterPreviewPanel';
import { DataContext } from './provider/InterInfoProvider';
import {
  wait,
  checkSourceAvailability,
  generateSpotifyCodeLink
} from '@/lib/utils';

interface PosterCreatorProps {
  onClose: () => void;
}

export default function PosterCreator({ onClose }: PosterCreatorProps) {
  /* music info context */
  const { state: interInfo, dispatch } = useContext(DataContext);

  /* textarea word count */
  const [enteredCharacterLength, setEnteredCharacterLength] = React.useState(0);
  /* pass on the entered content */
  const [inputContent, setInputContent] = React.useState<string>('');

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const formatedContent = value.replace(/\n/g, '<br>');

    setInputContent(formatedContent);
    setEnteredCharacterLength(value.length);
  };

  /* spotify code availability info */

  /* handle open status of generated result dialog (AlertDialog) */
  const [dialogOpenStatus, setDialogOpenStatus] = React.useState(false);
  const [isCheckingSource, setIsCheckingSource] = React.useState(false);

  const handleShareButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    /* if fail to get info from context, do nothing */
    if (!interInfo) return;

    const key = `${interInfo.platId}_${interInfo.source}_inter_info`;

    if (!Boolean(localStorage.getItem(key))) {
      const spotifyCodeSourceLink = generateSpotifyCodeLink(interInfo);
      /* checking spotify code availability before creating poster */
      setIsCheckingSource(true);
      const ret = await checkSourceAvailability(spotifyCodeSourceLink);
      /* update spotify code jotai in context */
      dispatch({ isSCAvailable: ret.isAvailable, thought: inputContent });
      /* save to local storage so that no need to check twice */
      localStorage.setItem(
        key,
        JSON.stringify({
          ...interInfo,
          isSCAvailable: ret.isAvailable,
          thought: inputContent
        })
      );

      wait(1000).then(() => {
        setIsCheckingSource(false);
        setDialogOpenStatus(true);
      });
    } else {
      /* if already checked the availability, take out and apply  */
      dispatch({
        isSCAvailable: JSON.parse(localStorage.getItem(key) ?? 'false')
          .isSCAvailable,
        thought: inputContent
      });
      setDialogOpenStatus(true);
    }
  };

  return (
    <section className="relative h-full flex flex-col bg-[#EEF94D] overflow-auto">
      <div className="flex-1 flex flex-col items-center m-[8px] bg-[#F9F8E4] rounded-[20px]">
        <div
          id="creator-menu-bar-mobile"
          className="sm:hidden flex justify-center items-center sticky top-0 bg-[#F9F8E4] w-full rounded-[20px] px-[24px] pt-[40px] pb-[24px]"
        >
          <div className="w-full flex justify-between">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
            <Popover>
              <PopoverTrigger asChild>
                <button>
                  <HamburgerIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[141px] h-[172px] rounded-[8px]"
                side="bottom"
                align="end"
              >
                <div className="w-full h-full flex flex-col items-center gap-[12px] rounded-[8px] px-[26px] py-[12px] bg-white">
                  <NormalButton name="Join waitlist" className="my-[4px]" />
                  <Separator
                    className="w-full bg-[#757771] h-[0.5px]"
                    decorative
                    orientation="horizontal"
                  />
                  <p className="text-[12px] font-[300] leading-[16px] tracking-[-.4px] text-center text-[#CACBC9]">
                    Language
                  </p>
                  <div className="flex flex-col gap-[8px]">
                    <NormalButton name="中文" className="my-[4px]" />
                    <NormalButton name="English" className="my-[2px]" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="absolute bottom-0 h-[0.5px] m-[0.5px] w-full-48 bg-[#949494]" />
        </div>
        <div
          id="creator-menu-bar"
          className="hidden sm:flex justify-center items-center sticky top-0 bg-[#F9F8E4] w-full rounded-[20px] px-[24px] pt-[40px] pb-[24px]"
        >
          <div className="relative w-full flex justify-between">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
            <NormalButton
              name="Join waitlist"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Popover>
              <PopoverTrigger asChild>
                <I18nChangeButton />
              </PopoverTrigger>
              <PopoverContent
                className="w-[112px] h-[96px] rounded-[8px]"
                side="bottom"
                align="end"
              >
                <div className="w-full h-full flex flex-col justify-center items-center rounded-[8px] bg-white">
                  <div className="flex flex-col gap-[8px]">
                    <NormalButton name="中文" className="my-[4px]" />
                    <NormalButton name="English" className="my-[2px]" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="absolute bottom-0 h-[0.5px] m-[0.5px] w-full-48 bg-[#949494]" />
        </div>
        <div className="flex-1 w-full px-[40px] flex flex-col items-center">
          <div
            id="creator-body"
            className="flex-1 w-full flex items-center justify-center mt-[46px] md:mt-[70px] mb-[56px] md:mb-[80px]"
          >
            <div className="w-full lg:max-w-[1084px] h-full flex flex-col md:flex-row justify-center items-center md:items-start gap-[48px] md:gap-[82px]">
              <LinkDetailArea />
              <div
                id="creator-body-panel"
                className="w-full md:flex-1 flex flex-col items-center gap-[48px]"
              >
                <div
                  id="creator-edit-area"
                  className="w-full h-[383px] py-[28px] bg-white rounded-[12px]"
                >
                  <div className="w-full h-[291px] py-[4px] px-[28px]">
                    <textarea
                      placeholder="write something..."
                      className="w-full h-full resize-none outline-none bg-white text-[17px] font-[400] leading-[24px] tracking-[-.2px]"
                      onChange={handleTextareaChange}
                    />
                  </div>
                  <div className="mt-[20px] px-[28px] w-full flex justify-between text-[#757771] text-[12px] font-[300] leading-[16px] tracking-[-.4px]">
                    <p>{'Autosaved'}</p>
                    <p>{`${enteredCharacterLength} words`}</p>
                  </div>
                </div>
                <div id="creator-controller" className="w-full">
                  <div className="flex flex-col items-center md:flex-row-reverse md:justify-start gap-[24px] md:gap-[48px]">
                    <AlertDialog
                      open={dialogOpenStatus}
                      onOpenChange={setDialogOpenStatus}
                    >
                      <AlertDialogTrigger asChild>
                        <SharePostorButton
                          onClick={handleShareButtonClick}
                          status={isCheckingSource}
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <PosterPreviewPanel
                          onClose={() => {
                            setDialogOpenStatus(false);
                          }}
                        />
                      </AlertDialogContent>
                    </AlertDialog>
                    <NormalButton name="Re-pickup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
