import { useRef, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Memoized so it never re-renders unless props change
const MetallicShape = memo(function MetallicShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
            floatingRange={[-0.1, 0.1]}
        >
            <mesh ref={meshRef} castShadow receiveShadow scale={0.63} position={[2.2, 0.4, 0]}>
                {/* Reduced tube segments 256→128, radial segments 32→24 — still looks polished but 40% less vertices */}
                <torusKnotGeometry args={[1.5, 0.4, 128, 24]} />
                <meshPhysicalMaterial
                    color="#e0e0e0"
                    metalness={1.0}
                    roughness={0.1}
                    clearcoat={1.0}
                    clearcoatRoughness={0.1}
                    envMapIntensity={2.5}
                />
            </mesh>
        </Float>
    );
});

export const MetallicObject3D = memo(function MetallicObject3D() {
    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                dpr={[1, 1.5]}
                frameloop="always"
                style={{ pointerEvents: 'auto' }}
                onCreated={({ gl }) => {
                    // Allow vertical scroll to pass through the canvas
                    gl.domElement.style.touchAction = 'pan-y';
                }}
            >
                <Environment preset="city" environmentIntensity={1} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4444ff" />

                <PresentationControls
                    global
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                >
                    <MetallicShape />
                </PresentationControls>
            </Canvas>
        </div>
    );
});
