import * as React from 'react';
import { SVGProps, memo } from 'react';

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha'
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#191919"
        d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 18v-3h2v3h12v-3h2v3c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 20H6Z"
      />
    </g>
  </svg>
);

export default memo(DownloadIcon);
