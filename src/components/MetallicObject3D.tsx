
"use client";

import { useRef, memo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

// Memoized so it never re-renders unless props change
const MetallicShape = memo(function MetallicShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    return (
        <mesh ref={meshRef} castShadow receiveShadow scale={0.63} position={[2.2, 0.4, 0]}>
            <torusKnotGeometry args={[1.5, 0.4, 80, 12]} />
            <meshPhysicalMaterial
                color="#ffffff"
                metalness={1.0}
                roughness={0.08}
                clearcoat={1.0}
                clearcoatRoughness={0.08}
                envMapIntensity={2.8}
                iridescence={0.6}
                iridescenceIOR={1.5}
                thickness={1.6}
            />
        </mesh>
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
                dpr={[1, 1.2]}
                frameloop="demand"
                style={{ pointerEvents: 'auto' }}
                onCreated={({ gl }) => {
                    // Allow vertical scroll to pass through the canvas
                    gl.domElement.style.touchAction = 'pan-y';
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <directionalLight position={[-10, -10, -5]} intensity={1} color="#4444ff" />
                    <pointLight position={[5, 5, -5]} intensity={10} color="#ffffff" /> {/* Rim light 1 */}
                    <pointLight position={[-5, -5, -10]} intensity={15} color="#ffffff" /> {/* Rim light 2 */}

                    <PresentationControls
                        global
                        rotation={[0, 0, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <MetallicShape />
                    </PresentationControls>
                </Suspense>
                <AdaptiveDpr pixelated />
            </Canvas>
        </div>
    );
});

