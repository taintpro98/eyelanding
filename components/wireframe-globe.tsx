"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
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

  useFrame((_, delta) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.PI * 0.3;
      ringsRef.current.rotation.y += delta * 0.15;
    }
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
