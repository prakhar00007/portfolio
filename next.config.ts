import type { NextConfig } from "next";

const SECTION_IDS = ["about", "metrics", "projects", "experience", "tech", "contact"];

const nextConfig: NextConfig = {
  async rewrites() {
    return SECTION_IDS.map((id) => ({
      source: `/${id}`,
      destination: "/",
    }));
  },
};

export default nextConfig;
