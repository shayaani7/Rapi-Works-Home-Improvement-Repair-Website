import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.openai.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
      // English service slug aliases
      {
        source: "/painting-services-kl",
        destination: "/en/services/painting",
        permanent: true,
      },
      {
        source: "/en/painting-services-kl",
        destination: "/en/services/painting",
        permanent: true,
      },
      {
        source: "/plaster-ceiling-kl",
        destination: "/en/services/plaster-ceiling",
        permanent: true,
      },
      {
        source: "/en/plaster-ceiling-kl",
        destination: "/en/services/plaster-ceiling",
        permanent: true,
      },
      {
        source: "/plumbing-services-kl",
        destination: "/en/services/plumbing",
        permanent: true,
      },
      {
        source: "/en/plumbing-services-kl",
        destination: "/en/services/plumbing",
        permanent: true,
      },
      {
        source: "/electrical-services-kl",
        destination: "/en/services/electrical",
        permanent: true,
      },
      {
        source: "/en/electrical-services-kl",
        destination: "/en/services/electrical",
        permanent: true,
      },
      {
        source: "/aircond-installation-kl",
        destination: "/en/services/aircond-installation",
        permanent: true,
      },
      {
        source: "/en/aircond-installation-kl",
        destination: "/en/services/aircond-installation",
        permanent: true,
      },
      // Bahasa Malaysia service slug aliases
      {
        source: "/ms/servis-cat-rumah-kl",
        destination: "/ms/services/painting",
        permanent: true,
      },
      {
        source: "/ms/kontraktor-plaster-ceiling-kl",
        destination: "/ms/services/plaster-ceiling",
        permanent: true,
      },
      {
        source: "/ms/servis-paip-kl",
        destination: "/ms/services/plumbing",
        permanent: true,
      },
      {
        source: "/ms/servis-elektrik-kl",
        destination: "/ms/services/electrical",
        permanent: true,
      },
      {
        source: "/ms/pemasangan-aircond-kl",
        destination: "/ms/services/aircond-installation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
