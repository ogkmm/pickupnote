import { SVGProps, memo } from 'react';

const Square = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <path
      stroke="#CACBC9"
      strokeWidth={2}
      d="M1 8a7 7 0 0 1 7-7h44a7 7 0 0 1 7 7v44a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8Z"
    />
    <path
      fill="#CACBC9"
      d="M21.232 35v-1.064h2.282v-7.644H21.68v-.826c.924-.154 1.582-.392 2.128-.728h.98v9.198h2.072V35h-5.628Zm8.466-5.46c-.504 0-.91-.392-.91-.966 0-.588.406-.98.91-.98.518 0 .938.392.938.98 0 .574-.42.966-.938.966Zm0 5.656c-.504 0-.91-.406-.91-.98 0-.588.406-.98.91-.98.518 0 .938.392.938.98 0 .574-.42.98-.938.98ZM32.894 35v-1.064h2.282v-7.644h-1.834v-.826c.924-.154 1.582-.392 2.128-.728h.98v9.198h2.072V35h-5.628Z"
    />
  </svg>
);

export default memo(Square);
