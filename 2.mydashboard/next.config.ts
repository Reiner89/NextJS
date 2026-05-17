import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,

  // confiar imagenes de terceros
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
