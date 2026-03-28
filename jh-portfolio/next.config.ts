import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jh-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
