import React, { CSSProperties } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface ImageSettings {
  src: string;
  height: number;
  width: number;
  excavate: boolean;
  x?: number;
  y?: number;
}

interface QRProps {
  value: string;
  size?: number;
  level?: string;
  bgColor?: string;
  fgColor?: string;
  style?: CSSProperties;
  includeMargin?: boolean;
  imageSettings?: ImageSettings;
}

type QRCodeProps = QRProps & React.SVGProps<SVGSVGElement>;

const QRCode: React.FC<QRCodeProps> = ({ value, ...props }) => {
  return <QRCodeSVG value={value} {...props} />;
};

export default QRCode;
