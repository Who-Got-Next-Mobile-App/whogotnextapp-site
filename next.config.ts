import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailingSlash: true, // potentially causing 404s on Amplify SSR
};

export default nextConfig;
