import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://cdn.hackclub.com/019dd2c7-6c22-7a2a-bed9-f5077d78f7e4/HeroImage.webp'),
      new URL('https://cdn.hackclub.com/019e3b97-7d57-77b1-b6de-1e06fa13bacb/Screenshot%202026-05-18%20151915.png'),
    ],
  },
};

export default nextConfig;
