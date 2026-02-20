import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "upload.wikimedia.org"],
    formats: ["image/avif", "image/webp"]
  },
  reactStrictMode: true
};

export default nextConfig;
