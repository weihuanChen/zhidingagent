import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Next.js 16 默认使用 Turbopack，UTF-8 编码是默认的
  // 如果需要使用 webpack，可以通过 --webpack 标志运行构建
  turbopack: {},
};

export default nextConfig;
