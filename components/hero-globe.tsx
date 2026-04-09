"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { GlobeScene } from "./wireframe-globe";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

export function HeroGlobe() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden max-sm:pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
        className="!h-full !w-full max-sm:opacity-90"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
