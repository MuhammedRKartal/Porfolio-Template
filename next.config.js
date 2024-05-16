/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  },
};

module.exports = nextConfig;
