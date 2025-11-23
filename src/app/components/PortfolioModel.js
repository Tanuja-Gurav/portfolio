'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Model loader
function Model({ url, scale }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -1.2, 0]}
      rotation={[-0.1, -0.6, 0]}
    />
  );
}

// Preload the model
useGLTF.preload('/models/scene.gltf');

const PortfolioModel = () => {
  const [modelScale, setModelScale] = useState(0.5);

  // Adjust scale based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setModelScale(0.3); // Mobile
      else if (window.innerWidth < 1024) setModelScale(0.4); // Tablet
      else setModelScale(0.5); // Desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Load Model */}
        <Suspense fallback={null}>
          <Model url="/models/scene.gltf" scale={modelScale} />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableRotate={true}
          enableZoom={false}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
};

export default PortfolioModel;
