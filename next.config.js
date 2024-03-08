// https://github.com/contentlayerdev/contentlayer/issues/129
// This is a walk around to fix .mjs incompatible problem
// also see: https://github.com/vercel/next.js/issues/33693
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**'
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com',
        port: '',
        pathname: '/image/**'
      },
      {
        protocol: 'https',
        hostname: 'scannables.scdn.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = withContentlayer(nextConfig);
