import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

const withMDX = createMDX({ configPath: "fumadocs.config.ts" });
export default withMDX(nextConfig);
