import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "market.bluesis.com",
        port: "",
        pathname: "/web/img/**"
      },
      {
        protocol: "https",
        hostname: "market.bluesis.com",
        port: "",
        pathname: "/board/data/file/pro_dinfo/**"
      },
    ]
  }
};

export default nextConfig;
