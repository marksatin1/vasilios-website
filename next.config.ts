import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otmnbntcoglfcvomltol.supabase.co",
      },
    ],
  },
};

export default nextConfig;
