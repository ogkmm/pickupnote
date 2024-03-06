import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        site: '1200px'
      },
      screens: {
        sm: '576px',
        md: '992px',
        lg: '1440px'
      },
      boxShadow: {
        image: '0px 2px 16px 0px rgba(0, 0, 0, 0.35);'
      }
    }
  },
  plugins: [require('daisyui'), require('@anuragroy/tailwindcss-animate')]
};
export default config;
