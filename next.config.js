/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.buymeacoffee.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "placehold.it",
      },
    ],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localeDetection: false,
  },
};

module.exports = nextConfig;
