/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: process.env.BUN_ENV === "production" ? "/Assignment_MLN131" : "",
};

export default nextConfig;
