import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export', // Uncomment this if you want to deploy as a static site (recommended for shared hosting)
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
