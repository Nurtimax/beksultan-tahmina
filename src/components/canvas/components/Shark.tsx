import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

const Shark = () => {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      {/* Денеси */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.4, 2.5, 8]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Башы */}
      <mesh position={[0, 0.3, 1.5]}>
        <sphereGeometry args={[0.6, 8, 8]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Мурду (конус) */}
      <mesh position={[0, 0.4, 2.2]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.4, 1, 8]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Көздөрү */}
      <mesh position={[0.4, 0.6, 1.8]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.4, 0.6, 1.9]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[-0.4, 0.6, 1.8]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-0.4, 0.6, 1.9]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Арткы канаты (жогорку) */}
      <mesh position={[0, 0.7, -0.5]} rotation={[0.2, 0, 0]}>
        <coneGeometry args={[0.3, 0.8, 4]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Каптал канаттары */}
      <mesh position={[0.9, -0.1, 0.5]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.2, 1.2, 4]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[-0.9, -0.1, 0.5]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.2, 1.2, 4]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Куйругу */}
      <mesh position={[0, 0, -1.8]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.3, 0.8, 4]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0, -1.8]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.3, 0.8, 4]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
};

const SharkScene = () => {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#001a33" }}>
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={0.5} />

        <Shark />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default SharkScene;
