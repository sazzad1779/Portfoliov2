/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // ✅ Enables static export
  basePath: isProd ? "/Portfolio" : "", // ✅ Matches your GitHub repo name
  assetPrefix: isProd ? "/Portfolio/" : "", // ✅ Fixes asset paths
  images: {
    unoptimized: true, // ✅ Required for GitHub Pages (no Next.js image optimization)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {}, // ❌ Remove `serverActions: {}` (GitHub Pages does not support SSR)
};

module.exports = nextConfig;
