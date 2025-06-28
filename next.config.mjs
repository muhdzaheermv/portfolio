/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',         // 👈 Required for GitHub Pages
  assetPrefix: '/portfolio/',     // 👈 Required for GitHub Pages
};

module.exports = nextConfig;
