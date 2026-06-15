"use client";

import { useRef, useSyncExternalStore } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void): () => void {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener?.("change", onChange);
  return () => mq.removeEventListener?.("change", onChange);
}

function getReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/** SSR-safe subscription to `prefers-reduced-motion`. */
function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
}

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();

  useFrame((_, delta) => {
    if (reduced) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 32, 24]} />
      <meshBasicMaterial
        color="#22c55e"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function WireframeRings() {
  const ringsRef = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame((_, delta) => {
    if (!ringsRef.current) return;
    ringsRef.current.rotation.x = Math.PI * 0.3;
    if (reduced) return;
    ringsRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={ringsRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.8, 64]} />
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 6]}>
        <ringGeometry args={[1.6, 1.9, 64]} />
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, -Math.PI / 8]}>
        <ringGeometry args={[1.4, 1.7, 64]} />
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function GlobeScene() {
  return (
    <group>
      <WireframeSphere />
      <WireframeRings />
    </group>
  );
}
