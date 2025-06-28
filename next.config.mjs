/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

module.exports = nextConfig;
