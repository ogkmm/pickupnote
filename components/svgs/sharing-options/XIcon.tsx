import * as React from 'react';
import { SVGProps, memo } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={28}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1354_658)">
      <path
        d="M21.0105 3.81152H24.4822L16.8976 12.4803L25.8203 24.2766H18.8339L13.3618 17.1222L7.10058 24.2766H3.62677L11.7393 15.0043L3.17969 3.81152H10.3435L15.2897 10.3509L21.0105 3.81152ZM19.792 22.1986H21.7158L9.29821 5.78036H7.23386L19.792 22.1986Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1354_658">
        <rect
          width={22.6406}
          height={22.6406}
          fill="white"
          transform="translate(3.17969 2.67969)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default memo(XIcon);
