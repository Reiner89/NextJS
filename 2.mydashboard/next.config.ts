import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // confiar imagenes de terceros
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
