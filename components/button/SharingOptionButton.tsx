import React, { FC } from 'react';
import { FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Redbook from '../svgs/sharing-options/Redbook';

const sharingOptions = [
  { type: 'download', logo: <FaDownload />, name: '下载' },
  { type: 'Instgram', logo: <FaInstagram />, name: 'Instgram' },
  { type: 'Facebook', logo: <FaFacebook />, name: 'Facebook' },
  { type: 'X', logo: <FaXTwitter />, name: 'X' },
  { type: 'Redbook', logo: <Redbook />, name: '小红书' }
];

interface SharingOptionButtonProps {
  type: string;
}

const SharingOptionButton: FC<SharingOptionButtonProps> = ({ type }) => {
  const option = sharingOptions.find((o) => o.type === type);
  return (
    <div className="w-[80px] h-[62px] flex flex-col gap-[4px] justify-center items-center cursor-pointer hover:bg-slate-200">
      <div className="p-[12px]"> {option!.logo}</div>
      <p className="w-full text-[14px] text-center">{option!.name}</p>
    </div>
  );
};

export default SharingOptionButton;
