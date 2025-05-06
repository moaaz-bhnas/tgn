import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.topgrowthnetwork.com",
      },
    ],
  },
};

export default nextConfig;
