/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      }
    ]
  },
  reactStrictMode: true
};

module.exports = withNextIntl(nextConfig);
