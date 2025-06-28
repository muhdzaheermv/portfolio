/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/portfolio",       // important for GitHub Pages subpath
  assetPrefix: "/portfolio/",   // important for static assets path
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
