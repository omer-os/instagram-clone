const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  pwa: {
    dest: "public",
  },
};

module.exports = withPWA(nextConfig);
