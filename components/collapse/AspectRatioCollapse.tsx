'use client';
import { AspectRatio } from '@/lib/type';
import {
  LongPicture,
  Fullscreen,
  Square,
  SixteenNine
} from '../svgs/aspect-ratio';
import { useState, useEffect, FC } from 'react';

interface AspectRatioCollapseProps {
  onRadioChange?: (optIndex: number) => void;
}

export const ratioList: AspectRatio[] = [
  {
    name: '长图',
    type: 'LONGPICTURE',
    icon: <LongPicture />
  },
  {
    name: '小红书(3:4)',
    type: 'FULLSCREEN',
    icon: <Fullscreen />
  },
  {
    name: 'Instgram Post(1:1)',
    type: 'SQUARE',
    icon: <Square />
  },
  {
    name: 'Instgram Story(9:16)',
    type: 'SIXTEENNINE',
    icon: <SixteenNine />
  }
];

const AspectRatioCollapse: FC<AspectRatioCollapseProps> = ({
  onRadioChange
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index: number = ratioList.findIndex(
      (ratio) => ratio.name === e.target.value
    );
    setSelectedOptionIndex(index);
    onRadioChange?.(index);
  };

  useEffect(() => {
    /* Select the first ratio by default */
    setSelectedOptionIndex(0);
  }, []);

  return (
    <div className="collapse collapse-arrow bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-[16px] flex items-center py-[16px] px-[24px]">
        选择长宽比
      </div>
      <div className="collapse-content px-[24px] overflow-y-auto hidden-scrollbar">
        <div className="pt-[20px] border-t-[0.5px]">
          <div className="relative flex flex-col gap-[12px] text-[14px]">
            <div className="absolute top-1/2 -translate-y-1/2">
              {selectedOptionIndex >= 0 && ratioList[selectedOptionIndex].icon}
            </div>
            {ratioList.map((option, index) => (
              <div key={index} className="w-full flex flex-row-reverse">
                <div className="flex flex-col">
                  <input
                    id={`r${index}`}
                    type="radio"
                    name="aspect-ratio"
                    className="hidden peer"
                    value={option.name}
                    checked={selectedOptionIndex === index}
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor={`r${index}`}
                    className="cursor-pointer peer-checked:text-[#423FA1] peer-checked:font-medium"
                  >
                    {option.name}
                  </label>
                  <div className="border-t-[4px] border-transparent peer-checked:border-[#423FA1]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AspectRatioCollapse;
