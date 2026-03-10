import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withMDX = createMDX({ configPath: "fumadocs.config.ts" });
export default withMDX(nextConfig);
