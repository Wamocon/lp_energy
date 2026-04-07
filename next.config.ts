import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lp_energy",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
