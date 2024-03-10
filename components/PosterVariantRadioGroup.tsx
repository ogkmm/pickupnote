import { cn } from '@/lib/utils';
import React, { useReducer } from 'react';

export enum PosterVariant {
  STANDARD = 'Standard',
  NINE_SIXTEEN = '9:16',
  SQUARE = '1:1'
}

type ReturnType = {
  variant: string;
};

const reducer = (state: ReturnType, action: string): ReturnType => {
  switch (action) {
    case PosterVariant.STANDARD:
      return {
        ...state,
        variant: PosterVariant.STANDARD
      };
    case PosterVariant.NINE_SIXTEEN:
      return {
        ...state,
        variant: PosterVariant.NINE_SIXTEEN
      };
    case PosterVariant.SQUARE:
      return {
        ...state,
        variant: PosterVariant.SQUARE
      };
    default:
      throw new Error('invalid variant');
  }
};

interface PosterVariantRadioGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onVariantChange: (variant: PosterVariant) => void;
}

const PosterVariantRadioGroup: React.FC<PosterVariantRadioGroupProps> = ({
  className,
  onVariantChange,
  ...props
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: PosterVariant.STANDARD
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    dispatch(value);
    onVariantChange(value as PosterVariant);
  };

  return (
    <div className={cn('flex justify-between', className)} {...props}>
      <div className="flex flex-col">
        <input
          id="standard-radio"
          type="radio"
          name="variant"
          className="hidden peer"
          value={PosterVariant.STANDARD}
          onChange={handleChange}
          checked={state.variant === PosterVariant.STANDARD}
        />
        <label
          htmlFor="standard-radio"
          className="text-[17px] leading-[32px] font-[400] cursor-pointer border-b-[6px] border-transparent peer-checked:border-[#423FA1]"
        >
          {PosterVariant.STANDARD}
        </label>
      </div>
      <div className="flex flex-col">
        <input
          id="nine-sixteen-radio"
          type="radio"
          name="variant"
          className="hidden peer"
          value={PosterVariant.NINE_SIXTEEN}
          onChange={handleChange}
          checked={state.variant === PosterVariant.NINE_SIXTEEN}
        />
        <label
          htmlFor="nine-sixteen-radio"
          className="text-[17px] leading-[32px] font-[400] cursor-pointer border-b-[6px] border-transparent peer-checked:border-[#423FA1]"
        >
          {PosterVariant.NINE_SIXTEEN}
        </label>
      </div>
      <div className="flex flex-col">
        <input
          id="square-radio"
          type="radio"
          name="variant"
          className="hidden peer"
          value={PosterVariant.SQUARE}
          onChange={handleChange}
          checked={state.variant === PosterVariant.SQUARE}
        />
        <label
          htmlFor="square-radio"
          className="text-[17px] leading-[32px] font-[400] cursor-pointer border-b-[6px] border-transparent peer-checked:border-[#423FA1]"
        >
          {PosterVariant.SQUARE}
        </label>
      </div>
    </div>
  );
};

export default PosterVariantRadioGroup;
