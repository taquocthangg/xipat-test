import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'], // 👈 thêm domain ảnh ở đây
  },
};

export default nextConfig;
