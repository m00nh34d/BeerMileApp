/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Custom domain (bmtraining.lefthandpath.cc) serves at root,
  // so no basePath. Only set one for username.github.io/Repo project sites.
};

export default nextConfig;
