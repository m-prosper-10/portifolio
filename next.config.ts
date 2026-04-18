import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  // Required for GitHub Pages — serves from /<repo-name>/ in production
  // Set NEXT_PUBLIC_BASE_PATH in your repo's Actions secrets/variables if needed
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    // Static export doesn't support Next.js image optimization
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;
