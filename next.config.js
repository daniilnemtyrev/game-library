/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "ag.ru",
        port: "",
        pathname: "/screenshots/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/games",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
