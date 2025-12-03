/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/profile',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
