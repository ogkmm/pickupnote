import * as React from 'react';
import { SVGProps, memo } from 'react';

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M6.389 30c-.394 0-.723-.134-.99-.4A1.351 1.351 0 0 1 5 28.605c0-.395.133-.724.4-.988a1.35 1.35 0 0 1 .989-.396H33.61c.394 0 .724.134.99.401s.399.598.399.993-.133.724-.4.988a1.35 1.35 0 0 1-.989.396H6.39Zm0-8.611c-.394 0-.723-.134-.99-.4A1.351 1.351 0 0 1 5 19.994c0-.395.133-.724.4-.988a1.35 1.35 0 0 1 .989-.396H33.61c.394 0 .724.134.99.4.266.268.399.599.399.994s-.133.724-.4.988a1.35 1.35 0 0 1-.989.396H6.39Zm0-8.611c-.394 0-.723-.134-.99-.401A1.35 1.35 0 0 1 5 11.384c0-.395.133-.724.4-.988A1.35 1.35 0 0 1 6.388 10H33.61c.394 0 .724.134.99.4.266.268.399.599.399.994s-.133.724-.4.988a1.35 1.35 0 0 1-.989.396H6.39Z"
      />
    </g>
  </svg>
);

export default memo(HamburgerIcon);
