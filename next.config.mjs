/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",     // 👈 critical for GitHub Pages
  assetPrefix: "/portfolio/",
};

module.exports = nextConfig;
