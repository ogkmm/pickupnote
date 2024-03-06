import * as React from 'react';
import { SVGProps, memo } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha'
      }}
    >
      <path fill="#D9D9D9" d="M0 0h40v40H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#2A2D25"
        d="M20 21.944 11.445 30.5a1.325 1.325 0 0 1-.972.403c-.38 0-.704-.134-.973-.403a1.325 1.325 0 0 1-.402-.972c0-.38.134-.704.402-.973L18.056 20 9.5 11.444a1.325 1.325 0 0 1-.402-.972c0-.38.134-.704.402-.972.269-.269.593-.403.973-.403s.703.134.972.403L20 18.055 28.556 9.5c.268-.269.593-.403.972-.403.38 0 .704.134.972.403.269.268.403.593.403.972 0 .38-.134.704-.403.972L21.945 20l8.555 8.555c.269.269.403.593.403.973s-.134.703-.403.972a1.325 1.325 0 0 1-.972.403c-.38 0-.703-.134-.972-.403L20 21.944Z"
      />
    </g>
  </svg>
);

export default memo(CloseIcon);
