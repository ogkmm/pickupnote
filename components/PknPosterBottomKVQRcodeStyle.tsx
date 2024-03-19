import React from 'react';
import { cn, generateMusicSourceLink } from '@/lib/utils';
import { QRCodeCanvas } from 'qrcode.react';
import { DataContext } from './provider/InterInfoProvider';
import LogoEnM from './svgs/LogoEnM';

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
        'w-full py-[32px] px-[24px] flex justify-between',
        className
      )}
      {...props}
    >
      <LogoEnM />
      <div className="w-[296px] flex gap-[16px] justify-end items-end">
        <div className="flex flex-col items-end text-[18px] font-[300] text-[#757771]">
          <p>{'Scan QR Code'}</p>
          <p>{'to Play'}</p>
        </div>
        <QRCodeCanvas
          value={musicSource}
          size={96}
          bgColor="#EEF95D"
          level="Q"
        />
      </div>
    </div>
  );
};

export default PickupnotePosterBottomKVQRcodeStyle;
