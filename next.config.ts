import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://cdn.hackclub.com/019dd2c7-6c22-7a2a-bed9-f5077d78f7e4/HeroImage.webp'),
    ],
  },
};

export default nextConfig;
