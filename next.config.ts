import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'domf5oio6qrcr.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
