import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
// import MapPage from "./pages/mapPage";

const topics = [
  { title: 'Array', position: [-4, 0, 0], route: '/map' },
  { title: 'String', position: [0, 0, 0], route: '/area/string' },
  { title: 'Linked List', position: [4, 0, 0], route: '/area/linkedlist' },
];

function TopicBox({ title, position, route }) {
  const meshRef = useRef();
  const navigate = useNavigate();

  useFrame(() => {
    // Add a slow rotation effect
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      onClick={() => navigate(route)}
      scale={[2, 2, 2]}
    >
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="#FFA323" />
      <Html center>
        <div style={{ color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>{title}</div>
      </Html>
    </mesh>
  );
}

const AreaSelector = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          {topics.map((topic, index) => (
            <TopicBox
              key={index}
              title={topic.title}
              position={topic.position}
              route={topic.route}
            />
          ))}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default AreaSelector;
