import * as React from 'react';
import { SVGProps, memo } from 'react';

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#fff"
        d="M6 23c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 21V10c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 6 8h3v2H6v11h12V10h-3V8h3c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v11c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 23H6Zm5-7V4.825l-1.6 1.6L8 5l4-4 4 4-1.4 1.425-1.6-1.6V16h-2Z"
      />
    </g>
  </svg>
);

export default memo(ShareIcon);
