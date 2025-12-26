/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', "ap-south-1.graphassets.com",],
  },
}

module.exports = nextConfig
