import React, { FC } from 'react';
import Image from 'next/image';

const trackTitle: string = 'LANDER';
const trackImage: string =
  'https://i.scdn.co/image/ab67616d0000b273d0388bce045641c4168f5f22';

const trackList: string[] = [
  '往け',
  '一斎ノ喝采',
  'dis/connect',
  'シャンプーソング',
  '明け星',
  '白銀',
  '炎',
  '逃飛行',
  'HADASHi NO STEP',
  'シフクノトキ',
  '土曜日のわたしたちは',
  '悪女のオキテ',
  'dawn',
  'NEW ME'
];

const dummyData = {
  trackTitle: trackTitle,
  trackList: trackList,
  trackImage: trackImage,
  artist: 'LiSA',
  duration: '3603',
  releaseDate: '2023-03-03',
  publisher: [
    '2023 Stichting Metropole Orkest under exclusive license to Modern Recordings / BMG RIGHTS MANAGEMENT GmbH',
    '2023 Stichting Metropole Orkest under exclusive license to Modern Recordings / BMG RIGHTS MANAGEMENT GmbH'
  ]
};

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
                {contentList!.map((l, i) => (
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
  return (
    <div className="w-[327px] h-full rounded-[12px] bg-gray-100 px-[28px] py-[32px]">
      <div className="h-full flex flex-col justify-center items-center gap-[14px] overflow-auto hidden-scrollbar">
        <div className="text-center">
          <Image src={trackImage} width={250} height={250} alt="Image" />
        </div>
        <div className="w-full flex flex-col gap-[14px]">
          {/* Title corresponding to the link entity */}
          <p className="font-bold text-[28px/31px]">{trackTitle}</p>
          <div className="border-b-[1px] border-[#CACBC9]" />
          <div id="target-body" className="flex flex-col gap-[16px]">
            <DetailView name="曲目" contentList={dummyData.trackList} />
            {/* <DetailView name="艺术家" contentString={dummyData.artist} /> */}
            {/* <DetailView name="时长" contentString={dummyData.duration} /> */}
            {/* <DetailView name="发行日期" contentString={dummyData.releaseDate} /> */}
            {/* <DetailView name="发行方" contentList={dummyData.publisher} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LinkDetailArea;
