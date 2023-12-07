'use client';
import { Appearence } from '@/lib/type';
import { useState, useEffect, FC } from 'react';

interface SelectedOptions {
  [index: number]: string;
}

interface AppearenceCollapseProps {
  onRadioChange?: (opts: SelectedOptions) => void;
}

export const appearenceList: Appearence[] = [
  {
    name: '歌曲二维码',
    default: true
  },
  {
    name: '创建时间',
    default: true
  },
  {
    name: '记录次数',
    default: false
  }
];

const AppearenceCollapse: FC<AppearenceCollapseProps> = ({ onRadioChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

  const handleRadioChange = (index: number, value: string) => {
    const updatedSelectedOptions = { ...selectedOptions, [index]: value };
    setSelectedOptions(updatedSelectedOptions);
    onRadioChange?.(updatedSelectedOptions);
  };

  useEffect(() => {
    /* Initiaize radio state using default setting */
    setSelectedOptions(
      appearenceList.reduce(
        (prev, curr, index) => ({
          ...prev,
          [index]: curr.default ? '开启' : '关闭'
        }),
        {}
      )
    );
  }, []);

  return (
    <div className="collapse collapse-arrow bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-[16px] flex items-center py-[16px] px-[24px]">
        显示选项
      </div>
      <div className="collapse-content px-[24px] overflow-y-auto hidden-scrollbar">
        <div className="pt-[20px] border-t-[0.5px]">
          <div className="relative flex flex-col gap-[12px] text-[14px]">
            {appearenceList.map((option, index) => (
              <div key={index} className="w-full flex justify-between">
                <p>{option.name}</p>
                <div className="flex gap-[12px]">
                  <div className="flex flex-col">
                    <input
                      id={`ac${index}`}
                      type="radio"
                      name={`apprearence-${index}`}
                      className="hidden peer"
                      value="关闭"
                      onChange={() => handleRadioChange(index, '关闭')}
                      checked={selectedOptions[index] === '关闭'}
                    />
                    <label
                      htmlFor={`ac${index}`}
                      className="cursor-pointer peer-checked:text-[#423FA1] peer-checked:font-medium"
                    >
                      关闭
                    </label>
                    <div className="border-t-[4px] border-transparent peer-checked:border-[#423FA1]" />
                  </div>
                  <div className="flex flex-col">
                    <input
                      id={`ao${index}`}
                      type="radio"
                      name={`apprearence-${index}`}
                      className="hidden peer"
                      value="开启"
                      onChange={() => handleRadioChange(index, '开启')}
                      checked={selectedOptions[index] === '开启'}
                    />
                    <label
                      htmlFor={`ao${index}`}
                      className="cursor-pointer peer-checked:text-[#423FA1] peer-checked:font-medium"
                    >
                      开启
                    </label>
                    <div className="border-t-[4px] border-transparent peer-checked:border-[#423FA1]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppearenceCollapse;
