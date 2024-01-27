import * as React from 'react';
import { SVGProps, memo } from 'react';

const MusicSymbolTrebleClef = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={136}
    viewBox="0 0 48 136"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.0522 75.1225C24.9428 75.816 23.1995 76.9865 21.8222 78.6346C20.4448 80.282 19.6055 82.082 19.3042 84.033C19.0029 85.984 19.2505 87.9137 20.0467 89.8213C20.843 91.7296 22.3387 93.2686 24.5337 94.4399C25.0503 94.4399 25.3729 94.6566 25.5025 95.0899C25.6312 95.5233 25.4373 95.74 24.9216 95.74C22.8122 95.3066 20.9614 94.4177 19.3688 93.0741C16.3989 90.6018 14.7633 87.4155 14.462 83.5126C14.2899 81.5616 14.4728 79.6754 15.0109 77.8541C15.5488 76.0327 16.2913 74.3632 17.2382 72.8456C18.4003 71.2417 19.7777 69.8538 21.3703 68.6833C21.4563 68.5963 21.7038 68.4018 22.1127 68.0981C22.5216 67.7944 22.9197 67.5129 23.3071 67.2527C23.6945 66.9925 24.2755 66.5804 25.0503 66.0165L22.6615 54.4392C20.5524 56.2171 18.4649 58.1788 16.399 60.3252C14.3329 62.4715 12.4606 64.7378 10.7819 67.1222C9.10337 69.5074 7.75829 72.033 6.74677 74.6997C5.73533 77.3665 5.22961 80.1736 5.22961 83.1227C5.22961 85.8544 5.79986 88.4234 6.94052 90.83C8.0811 93.2366 9.59834 95.3288 11.4922 97.1058C13.386 98.8837 15.5704 100.282 18.0453 101.302C20.5202 102.32 23.0273 102.83 25.5669 102.83C25.6532 102.83 26.0508 102.787 26.7613 102.7C27.4718 102.613 28.2246 102.505 29.0206 102.374C29.8175 102.245 30.5491 102.104 31.2164 101.952C31.8829 101.8 32.2169 101.637 32.2169 101.464L31.8291 99.6429C30.1507 91.1009 28.5578 82.9274 27.0522 75.1225ZM29.3115 74.8623L34.6058 100.684C37.6619 99.5124 39.7274 97.5072 40.8036 94.6672C41.8799 91.8273 42.1268 88.9438 41.5459 86.0169C40.965 83.0899 39.5986 80.4987 37.446 78.2439C35.2943 75.9892 32.5827 74.8623 29.3115 74.8623ZM22.5324 40.0655C23.8665 39.3711 25.1041 38.3311 26.2447 36.9432C27.3854 35.556 28.4397 34.0704 29.4084 32.4879C30.3764 30.9054 31.2164 29.2901 31.926 27.6419C32.6365 25.9946 33.2068 24.4991 33.637 23.1546C34.1104 21.724 34.4331 20.1193 34.6058 18.3415C34.7777 16.5636 34.4982 15.0682 33.7666 13.8534C33.25 12.7699 32.5722 12.1412 31.733 11.9672C30.8929 11.794 30.0537 11.8588 29.2145 12.1625C28.3753 12.4662 27.5793 12.9538 26.8257 13.626C26.0728 14.2983 25.5237 14.8941 25.1799 15.4145C24.2323 17.1054 23.4037 18.9916 22.6938 21.0731C21.9836 23.1546 21.4993 25.3117 21.2411 27.5451C20.9829 29.7776 20.9506 31.924 21.1443 33.9842C21.3379 36.0436 21.8006 38.0709 22.5324 40.0655ZM20.5955 42.0813C19.8638 39.2201 19.2182 36.4121 18.6586 33.6583C18.099 30.9054 17.8193 28.0761 17.8193 25.1705C17.8193 23.0463 17.97 20.7152 18.2713 18.179C18.5725 15.6427 19.1213 13.1705 19.9176 10.7639C20.7138 8.35734 21.8114 6.20029 23.2103 4.29276C24.6095 2.38441 26.4704 0.997266 28.7949 0.129686C29.01 0.0435021 29.2251 0 29.4402 0C29.7417 0 30.0969 0.173188 30.5059 0.520384C30.9149 0.86676 31.3451 1.37647 31.7973 2.0487C32.2487 2.72094 32.6471 3.41451 32.9917 4.13024C33.3356 4.84515 33.5939 5.33353 33.7666 5.59372C34.9284 7.80494 35.7782 10.1573 36.3168 12.6501C36.8545 15.1437 37.1666 17.6258 37.2529 20.0972C37.4248 23.8269 37.2203 27.5122 36.6394 31.1549C36.0585 34.7968 34.8853 38.3525 33.1205 41.8212C32.5184 42.8619 31.9049 43.9134 31.2808 44.9755C30.6567 46.0384 29.9144 47.0677 29.0532 48.0649C28.8813 48.2389 28.5692 48.5533 28.1171 49.008C27.6649 49.4636 27.2021 49.9298 26.7287 50.4067C26.2553 50.8836 25.8357 51.3284 25.4699 51.7396C25.1041 52.1517 24.9216 52.4012 24.9216 52.4882L27.5679 65.4962C27.585 65.5815 28.8919 65.4962 28.8919 65.4962C31.4176 65.5282 34.0917 65.9402 36.4137 66.862C38.6519 67.9027 40.578 69.3334 42.192 71.1547C43.806 72.9761 45.0966 75.0248 46.0654 77.3008C47.0341 79.5777 47.5181 81.8866 47.5181 84.2283C47.5181 86.5693 47.1734 88.9545 46.485 91.3824C44.7202 95.9789 41.9011 99.3827 38.0278 101.594C37.5968 101.854 36.9832 102.147 36.1872 102.472C35.3912 102.797 35.0792 103.307 35.2511 104C36.2842 108.725 36.9833 111.975 37.3499 113.756C37.7157 115.538 37.9846 117.836 38.1565 120.651C38.3284 123.343 37.8656 125.765 36.7682 127.932C35.6707 130.107 34.1968 131.871 32.3456 133.234C30.4953 134.605 28.8055 135.401 27.2779 135.647C25.7494 135.885 24.7057 136 24.1467 136C22.2096 136 20.3157 135.631 18.4649 134.892C16.1837 134.03 14.2684 132.709 12.7189 130.927C11.1694 129.146 10.3946 126.979 10.3946 124.427C10.3946 122.818 10.8573 121.168 11.7827 119.477C12.7081 117.787 13.9241 116.572 15.4305 115.841C17.1091 114.971 18.6263 114.733 19.9822 115.119C21.3379 115.513 22.457 116.252 23.3394 117.335C24.2217 118.419 24.8352 119.732 25.1799 121.267C25.5237 122.81 25.5025 124.246 25.1147 125.592C24.7277 126.938 23.9422 128.079 22.7584 129.007C21.5747 129.943 19.9283 130.361 17.8193 130.279C18.6801 131.839 19.8853 132.824 21.4348 133.234C22.9843 133.653 24.5769 133.677 26.2122 133.332C27.8482 132.988 29.3864 132.347 30.8286 131.412C32.2707 130.484 33.4008 129.475 34.218 128.391C34.7345 127.611 35.1223 126.594 35.3806 125.338C35.6389 124.074 35.7896 122.769 35.832 121.398C35.8752 120.036 35.832 118.969 35.7033 118.213C35.5737 117.45 35.3586 116.268 35.0572 114.668C33.7666 109.423 32.9486 106.123 32.6039 104.777C32.432 104.348 31.9692 104.207 31.2164 104.358C30.4627 104.51 29.828 104.651 29.3115 104.777C25.61 105.261 22.5109 105.04 20.0144 104.131C16.1407 103.09 12.7296 101.236 9.78125 98.5693C6.83289 95.9033 4.46561 92.6727 2.67933 88.8782C0.893138 85.0844 0 82.201 0 80.2278C0 78.2554 0 77.0086 0 76.4883C0 72.9761 0.602595 69.6806 1.80779 66.6018C4.08894 61.7886 6.78987 57.3662 9.91039 53.3336C13.0309 49.3011 16.5926 45.55 20.5955 42.0813Z"
      fill="#423FA1"
    />
  </svg>
);

export default memo(MusicSymbolTrebleClef);
