import * as React from 'react';
import { SVGProps, memo } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={28}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1354_1274)">
      <path
        d="M14.7002 1.8457C21.4657 1.8457 26.9502 7.33021 26.9502 14.0957C26.9502 20.21 22.4705 25.2779 16.6143 26.1969V17.6367H19.4686L20.0117 14.0957H16.6143V11.7978C16.6143 10.829 17.0888 9.88477 18.6106 9.88477H20.1553V6.87012C20.1553 6.87012 18.7534 6.63086 17.4131 6.63086C14.615 6.63086 12.7861 8.32672 12.7861 11.3969V14.0957H9.67578V17.6367H12.7861V26.1969C6.92984 25.2779 2.4502 20.21 2.4502 14.0957C2.4502 7.33021 7.9347 1.8457 14.7002 1.8457Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1354_1274">
        <rect
          width={24.5}
          height={24.5}
          fill="white"
          transform="translate(2.4502 1.75)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default memo(FacebookIcon);
