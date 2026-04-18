import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSheets = () => {
  const sheetsRef = useRef([]);
  const { camera } = useThree();

  // Procedurally generate an acoustic "egg crate / pyramid" design bump map
  const bumpMap = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256; 
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    const tileSize = 32;
    for (let x = 0; x < 256; x += tileSize) {
      for (let y = 0; y < 256; y += tileSize) {
        // Create a distinct gradient representing a pyramid bump
        const grad = ctx.createRadialGradient(
          x + tileSize/2, y + tileSize/2, 0, 
          x + tileSize/2, y + tileSize/2, tileSize/2
        );
        grad.addColorStop(0, '#ffffff'); // Highest ridge
        grad.addColorStop(1, '#000000'); // Deepest valley
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, tileSize, tileSize);
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    // Repeat across the surface for a dense acoustic panel pattern
    texture.repeat.set(12, 18);
    return texture;
  }, []);

  useFrame(() => {
    const rotationAmount = Math.abs(camera.position.x) / 10; 
    const gap = 0.2 + (rotationAmount * 1.5); 
    
    sheetsRef.current.forEach((sheet, index) => {
      if (sheet) {
        const offset = index - 2.5; 
        const targetZ = offset * gap;
        sheet.position.z += (targetZ - sheet.position.z) * 0.1;
      }
    });
  });

  return (
    <group rotation={[0, -0.2, 0]}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh 
          key={i} 
          ref={(el) => (sheetsRef.current[i] = el)}
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[4.5, 6.5, 0.15]} />
          <meshStandardMaterial
            color="#7a8086"
            roughness={0.9}
            metalness={0.1}
            bumpMap={bumpMap}
            bumpScale={0.15} // Adds extreme depth and shadows mimicking the acoustic design
          />
        </mesh>
      ))}
    </group>
  );
};

const SoundproofFrame3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={150} castShadow />
        <directionalLight position={[-5, -10, -5]} intensity={0.8} color="#ffffff" />
        
        <React.Suspense fallback={null}>
          <AnimatedSheets />
        </React.Suspense>
        
        <Environment preset="studio" environmentIntensity={0.8} />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default SoundproofFrame3D;
