import React from 'react';
import LogoEn from '@/components/svgs/LogoEn';
import { cn, generateMusicSourceLink } from '@/lib/utils';
import { QRCodeCanvas } from 'qrcode.react';
import { DataContext } from './provider/InterInfoProvider';

interface PickupnotePosterBottomKVProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PickupnotePosterBottomKVQRcodeStyle = ({
  className,
  ...props
}: PickupnotePosterBottomKVProps) => {
  const { state: interInfo } = React.useContext(DataContext);
  const musicSource: string = generateMusicSourceLink(interInfo);

  return (
    <div
      id="pickupnote-poster-buttom-qrcode-kv"
      className={cn(
        'w-full py-[16px] px-[12px] flex justify-between',
        className
      )}
      {...props}
    >
      <LogoEn />
      <div className="w-[148px] flex gap-[8px] justify-end items-end">
        <p className="text-[#757771] text-[9px] font-[400]">{'扫码收听歌曲'}</p>
        <QRCodeCanvas
          value={musicSource}
          size={48}
          bgColor="#EEF95D"
          level="Q"
        />
      </div>
    </div>
  );
};

export default PickupnotePosterBottomKVQRcodeStyle;
