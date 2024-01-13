import * as React from 'react';
import { SVGProps, memo } from 'react';

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#2A2D25"
        d="M17.58 3.267h2.976l-6.501 7.43 7.648 10.111h-5.988l-4.69-6.132-5.367 6.132H2.68l6.954-7.947-7.337-9.594h6.14l4.24 5.605 4.903-5.605Zm-1.044 15.76h1.649L7.54 4.955h-1.77l10.765 14.072Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M2.297 2.297h19.406v19.406H2.297z" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(X);
