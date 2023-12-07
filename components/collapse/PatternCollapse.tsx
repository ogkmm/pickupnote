'use client';
import { Pattern } from '@/lib/type';
import { useState, useEffect, FC, useCallback } from 'react';
import DefaultPattern from '../svgs/pattern/DefaultPattern';

interface PatternCollapseProps {
  onRadioChange?: (optIndex: number) => void;
}

export const patternList: Pattern[] = [
  { name: '默认样式', icon: <DefaultPattern /> },
  { name: '样式2', icon: <DefaultPattern /> },
  { name: '样式3', icon: <DefaultPattern /> }
];

const PatternCollapse: FC<PatternCollapseProps> = ({ onRadioChange }) => {
  const [selectedPatternIndex, setSelectedPatternIndex] = useState(-1);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = patternList.findIndex(
      (pattern) => pattern.name === e.target.value
    );
    setSelectedPatternIndex(index);
    onRadioChange?.(index);
  };

  useEffect(() => {
    /* Select the first option by default */
    setSelectedPatternIndex(0);
  }, []);

  return (
    <div className="collapse collapse-arrow bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-[16px] flex items-center py-[16px] px-[24px]">
        选择样式
      </div>
      <div className="collapse-content px-[24px] overflow-y-auto hidden-scrollbar">
        <div className="pt-[20px] border-t-[0.5px]">
          <div className="relative flex flex-wrap justify-between gap-2 text-[14px]">
            {patternList.map((pattern, index) => (
              <div
                key={index}
                className="flex flex-col gap-[14px] items-center"
              >
                <DefaultPattern />
                <div className="flex flex-col">
                  <input
                    id={`p${index}`}
                    type="radio"
                    name="pattern-ratio"
                    className="hidden peer"
                    value={pattern.name}
                    checked={selectedPatternIndex === index}
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor={`p${index}`}
                    className="cursor-pointer peer-checked:text-[#423FA1] peer-checked:font-medium"
                  >
                    {pattern.name}
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

export default PatternCollapse;
