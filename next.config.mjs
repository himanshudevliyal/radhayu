/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t7gx1q7p-3001.inc1.devtunnels.ms",
      },
      {
        protocol: "https",
        hostname: "z34dr4pd-4001.inc1.devtunnels.ms",
      },
      {
        protocol: "https",
        hostname: "api.radhayuherbals.com",
      },

      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
