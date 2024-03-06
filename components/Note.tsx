import Image from 'next/image';
import RetrievalButton from './button/RetrievalButton';
import React, { FC, useState, useRef, useContext } from 'react';
import { cn } from '@/lib/utils';
import SharePosterModal from './modal/SharePosterModal';
import { DataContext } from '@/lib/context';

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {}

const Note: FC<NoteProps> = ({ className, ...props }) => {
  const [enteredCharacterLength, setEnteredCharacterLength] = useState(0);
  const musicInfo = useContext(DataContext);
  const modalRef = useRef<HTMLDialogElement>(null);
  /* dummy data */
  const detail = {
    shareTarget: {
      type: 'Album',
      title: 'LANDER',
      authors: ['LiSA'],
      releaseYear: '2020',
      image: '/example.jpeg'
    },
    comment:
      'Even factoring differences in body weight between children and adults into account, it would still.',
    id: '78qoF0s9vf9twx2eOijPuq'
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredCharacterLength(e.target.value.length);
  };

  const handleGenerateButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current) {
      /**
       * Server Communication
       * - Save current user memo
       * - Clean local storage
       */

      /* modal element (daisyUI) has a pre-defined showModal() method */
      modalRef.current.showModal();
    }
  };

  const handleModalOnClose = () => {
    console.log('Closed!!!');
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-[12px] pt-[32px] pb-[24px] px-[16px] rounded-[12px] bg-[#EEF95D] overflow-auto hidden-scrollbar',
        className
      )}
      {...props}
    >
      {/* Music Info */}
      <div id="music-card" className="flex justify-between px-[4px]">
        <div id="music-info" className="flex flex-1 gap-[20px] pb-[8px]">
          <Image
            src={musicInfo.image}
            width={96}
            height={96}
            alt="spotify_media_image"
          />
          <div className="flex flex-1 items-end">
            <div className="flex flex-col text-[14px] leading-[18px] gap-[8px]">
              <p>{musicInfo.itemType}</p>
              <p className="text-[22px] leading-[24px] font-bold">
                {musicInfo.title}
              </p>
              <p>{musicInfo.artist}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a
            id="repick-button"
            className="flex flex-row-reverse"
            href={`https://open.spotify.com/${musicInfo.itemType}/${musicInfo.platId}`}
            target="_blank"
          >
            <Image src="/spotify.svg" width={29} height={28} alt="spotify" />
          </a>
        </div>
      </div>

      {/* Editor Area */}
      <div id="bd" className="relative flex flex-col grow gap-[12px]">
        <div
          id="editor"
          className="h-full flex flex-col gap-[4px] py-[24px] px-[20px] rounded-[12px] bg-white"
        >
          <textarea
            className="w-full h-full text-[14px] bg-white resize-none outline-none placeholder:text-[#CACBC9]"
            placeholder="想写点什么?"
            onChange={handleTextareaChange}
          />
          <p className="flex flex-row-reverse text-[#757771] text-[12px]">
            {enteredCharacterLength}字
          </p>
        </div>
        <div className="flex justify-between px-[4px] py-[8px]">
          <div className="my-auto">
            <p className="text-[12px] text-[#757771]">已保存</p>
          </div>
          <div id="button">
            <RetrievalButton onClick={(e) => handleGenerateButtonClick(e)}>
              生成海报
            </RetrievalButton>
          </div>
        </div>
      </div>

      {/* Modal */}
      <SharePosterModal
        ref={modalRef}
        detail={detail}
        onClose={handleModalOnClose}
      />
    </div>
  );
};

export default Note;
