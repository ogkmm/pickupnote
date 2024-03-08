import React, { FC } from 'react';
import Image from 'next/image';

interface PosterProps {
  posterDetail: any;
  date: string;
  userInfo?: any;
}
const DeprecatedPoster: FC<PosterProps> = ({ posterDetail, date }) => {
  return (
    <>
      <div className="p-[8px] bg-[#EEF95D]">
        <div className="rounded-[8px] px-[16px] py-[20px] bg-white">
          <div className="flex flex-col gap-[24px]">
            <div id="music-info" className="flex gap-[16px]">
              <Image
                width={72}
                height={72}
                src={posterDetail.shareTarget.image}
                alt="image"
              />
              <div className="flex flex-col flex-1 justify-end">
                <div
                  id="music-info"
                  className="flex flex-col justify-between text-[16px] leading-[20px] gap-[12px]"
                >
                  <p className="text-[22px] leading-[24px] font-bold">
                    {posterDetail.shareTarget.title}
                  </p>
                  <div>
                    {posterDetail.shareTarget.authors.map((a: any, i: any) => (
                      <span key={i}>
                        {a}
                        <span>・</span>
                      </span>
                    ))}
                    {posterDetail.shareTarget.releaseYear}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[14px]">{posterDetail.comment}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeprecatedPoster;
