/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Set NEXT_BASE_PATH=/BeerMileApp for GitHub Pages project sites.
  // Leave unset for custom domains or username.github.io root.
  ...(process.env.NEXT_BASE_PATH
    ? { basePath: process.env.NEXT_BASE_PATH }
    : {}),
};

export default nextConfig;
